const db = require('../db-config.js')

module.exports = {
   getProjects,
    getProjectById,
    addProject
}

function getProjects() {
   return db('projects')
}
function getProjectById(id) {
   return db("projects").where({ id })
}
function addProject(project) {
   return db("projects").insert(project)
}