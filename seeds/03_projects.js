
exports.seed = function ( knex, Promise )
{
  // Deletes ALL existing entries
  return knex( 'project' ).insert( [
    { project_name: 'work on computer', project_description: 'electrical stuff on my computer' },
    { project_name: 'hold a meeting', project_description: 'in a boring room' }


  ] );
};
