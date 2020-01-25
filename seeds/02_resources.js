
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resource').insert([
    { resource_name: 'computer', resource_description: 'typing computer', project_id: 1},
    { resource_name: 'conference room', resource_description: 'boring room', project_id: 1},
    { resource_name: 'microphone', resource_description: 'because Im not load enough', project_id: 1},
    { resource_name: 'delivery van', resource_description: 'White van with free candy on the side', project_id: 1}


  ])
};
