exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "create a design wireframe",
          notes: "figma.com",
          completed: "false",
          project_id: 1
        },

        {
          description: "convert wireframe to code",
          notes: "",
          completed: "false",
          project_id: 1
        },

        {
          description: "add new projects to the projects page",
          notes: "database and api projects",
          completed: "false",
          project_id: 1
        },

        {
          description: "edit the video clips",
          notes: "",
          completed: "false",
          project_id: 2
        },

        {
          description: "upload to youtube",
          notes: "",
          completed: "false",
          project_id: 2
        },

        

      ]);
    });
};
