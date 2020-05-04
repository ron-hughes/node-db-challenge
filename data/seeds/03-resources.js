exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          name: "vscode",
          description: "code editor"
        },

        {
          name: "react",
          description: "library"
        },

        {
          name: "imovie",
          description: "video editor"
        },

        {
          name: "youtube",
          description: "video hosting website"
        }
        
      ]);
    });
};
