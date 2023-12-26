// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')

const router = express.Router()

router.get('/', async (req,res,next) => {
    try {
        const data = await Projects.getProjects()
        res.json(data)
    } catch(err){
        next(err)
    }
})

router.get('/:project_id', async (req,res,next) => {
    try {
        //console.log(req.params)
        const { project_id } = req.params;
        //console.log(project_id)
        const data = await Projects.getProjectById(project_id)
        //console.log('router data: ',data)
        res.status(200).json(data)
    } catch(err){
        next(err)
    }
})

router.post('/', async (req,res,next) => {
    try {
        const data = await Projects.postProject(req.body)
        console.log('project id from router: ',data)
        res.status(201).json(data)
    } catch(err){
        next(err)
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })
  
  module.exports = router