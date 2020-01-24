
const cleaner = require('knex-cleaner')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return cleaner.clean(knex, {
    mode: 'truncate', 
    ignoreTable: ['knex_migrations', 'knex_migrations_lock']
  })
    
};
