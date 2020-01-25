
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('task').insert([
    {task_description: 'hire people asap', task_notes: 'hire anyone and pay pennies', is_done: false, project_id: 1 },
    {task_description: 'eat', task_notes: 'make company pay for it', is_done: false, project_id: 1 },
    {task_description: 'do not get fired', task_notes: 'you are replaceable', is_done: false, project_id: 1 }
  ])
   
};
