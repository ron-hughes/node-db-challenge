const express = require("express");

const Project = require("../data/models/projectsModel");

const router = express.Router();


router.post("/", (req, res) => {
  const projectData = req.body;

  Project.addProject(projectData)
    .then(newProject => {
      res.status(201).json(newProject);
    })
    .catch(err => {
      res.status(500).json({
        message:
          "An error occurred while trying to add the project to the database",
        error: err
      });
    });
});



router.get("/", (req, res) => {
  Project.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({
        message:
          "An error occured while trying to get the projects from the database.",
        error: err
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.getProjectById(id).then(project => {
    if (project) {
      res.json(project);
    } else {
      res
        .status(404)
        .json({
          message: "Could not find project with given id"
        })
        .catch(err => {
          res.status(500).json({ message: "Failed to get projects" });
        });
    }
  });
});

module.exports = router;