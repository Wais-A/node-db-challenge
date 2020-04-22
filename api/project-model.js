const db = require('../data/dbConfig');

module.exports = {
 getProjects,
 getProjectsById,
 getTasks,
 getTasksById,
 getResources,
 getResourcesById,
 addProjects,
 addTask,
 addResources,
 remove,
 removeResources
}
function getProjects(){
 return db('projects')
}
function getProjectsById(id){
 return db('projects')
 .where({id})
 .first()
}
function getTasks(){
 return db('task')
}
function getTasksById(id){
 return db('tasks as t')
  .join( 'projects as p', 'p.id', 't.project_id')
  .select( 't.id', 't.description', 't.notes')
 .where('t.project_id', id)
}
function getResources(){
 return db('resources')
}
function getResourcesById(id){
 return db( 'resources' )
  .where( { id } )
  .first()
}
function addProjects(insert){
 return db('projects')
 .insert(insert)
 .then(ids => {
  return getProjectsById(ids[0])
 })
}
function addTask(insert){
 return db( 'tasks' )
  .insert( insert )
  .then( ids =>
  {
   return getProjectsById( ids[ 0 ] );
  } )
}
function addResources(insert){
 return db( 'resources' )
  .insert( insert )
  .then( ids =>
  {
   return getProjectsById( ids[ 0 ] );
  } )
}
function remove(id) {
 return db('project')
 .where('id', id)
 .del()
}
function removeResources(id) {
 return db('resources')
 .where('id', id)
 .del()
}