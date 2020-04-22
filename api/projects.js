const express = require('express');

const router = express.Router()
const db = require('./project-model');

router.get('/', (req, res) => {
 db.getProjects()
 .then( get => {
  res.status(200).json(get)
 }).catch(err => {
  res.status(500).json(err)
 })
})

module.exports = router;