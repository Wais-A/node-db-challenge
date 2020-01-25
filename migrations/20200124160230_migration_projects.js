
exports.up = function(knex) {
  return(
      knex.schema.createTable('project', tbl => {
          tbl.increments();
          tbl.string( 'project_name', 255 ).notNullable()
          tbl.text('project_description' ,2550)
          tbl.boolean( 'is_done' ).notNullable().default( false )

      })
      .createTable('resource', tbl =>{
        tbl.increments();
        tbl.string('resource_name').notNullable().unique()
        tbl.text('resource_description', 2550);
        tbl.integer( 'project_id' ).unsigned().notNullable().references( 'id' ).inTable('project')
      
         
      })
      .createTable('task', tbl =>{
          tbl.increments();
          tbl.string('task_description', 255).notNullable();
          tbl.string('task_notes', 2550);
          tbl.boolean( 'is_done' ).notNullable().default( false )
          tbl.integer( 'project_id' ).unsigned().notNullable().references( 'project.id' )
        //   tbl.primary( [ 'task_id' ] )
      })
  )
};

exports.down = function(knex) {
  return(
      knex.schema.dropTableIfExist('task')
      .dropTableIfExist('resource')
      .dropTableIfExist('project')
  )
};
