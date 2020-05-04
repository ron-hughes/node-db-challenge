exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Portfolio Website",
          description: "Re-design official portfolio and add new projects.",
          completed: "false"
        },

        {
          name: "YouTube Video",
          description: "Make a video discussing a topic",
          completed: "true"
        }
      ]);
    });
};
