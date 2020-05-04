const db = require('../db-config.js')

module.exports = {
   getTasks,
   getTaskById,
   addTask
}

function getTasks() {
   return db('tasks')
}
function getTaskById(id) {
   return db("tasks").where({ id })
}
function addTask(task) {
   return db("tasks").insert(task)
}