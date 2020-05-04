const express = require("express");

const Resource  = require("../data/models/resourcesModel");

const router = express.Router();

// ** A D D ** R E S O U R C E S
router.post("/", (req, res) => {
  const resourceData = req.body;

  Resource.addResource(resourceData)
    .then(newResource => {
      res.status(201).json(newResource);
    })
    .catch(err => {
      res.status(500).json({
        message:
          "An error occurred while trying to add the Resource to the database",
        error: err
      });
    });
});

// ** R E T R I E V E  ** R E S O U R C E S

router.get("/", (req, res) => {
  Resource.getResources()
    .then(Resources => {
      res.json(Resources);
    })
    .catch(err => {
      res.status(500).json({
        message:
          "An error occured while trying to get the Resources from the database.",
        error: err
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Resources.getResourceById(id).then(Resource => {
    if (Resource) {
      res.json(Resource);
    } else {
      res
        .status(404)
        .json({
          message: "Could not find Resource with given id"
        })
        .catch(err => {
          res.status(500).json({ message: "Failed to get Resources" });
        });
    }
  });
});

module.exports = router;