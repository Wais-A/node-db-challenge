exports.seed = function ( knex, Promise )
{
  // Deletes ALL existing entries
  return knex( 'resources' ).insert( [
    { name: 'screw driver' },
    { name: 'mop' },
    { name: 'resume' },
    { name: 'jack' },
    { name: 'vacuum' },
    { name: 'safety boots' },
    { name: 'toolkit' }
  ] );
};
