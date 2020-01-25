const express = require( 'express' );
const projects = require( './projects-model' );
const router = express.Router();
const db = require('../data/db-config.js')


router.get('/', (req, res)=> {
    projects.retreave()
    .then(proj =>{

        res.status(200).json(proj)
    }).catch(err => {

        res.status(500).json(err)
    })
})

router.post('/', (req, res)=> {
    const userData = req.body
    projects.add(userData)
    .then(proj => {
        res.status(200).json({new_project: 'added'})
    } ).catch( err =>
    {

        res.status( 500 ).json( err );
    } )
})

module.exports = router