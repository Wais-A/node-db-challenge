const db = require( '../data/db-config.js' );

function retreave ()
{
    return db( 'project' )
}



function add ( userData )
{
    return db( 'project' ).insert( userData );
}






module.exports = {
    retreave,
    add,
}