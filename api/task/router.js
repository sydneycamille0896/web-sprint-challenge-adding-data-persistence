// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')

const router = express.Router()

router.get('/', async (req,res,next) => {
    try {
        const data = await Tasks.getTasks()
        res.json(data)
        console.log(data)
    } catch(error){
        next(error)
    }
})

router.post('/', async (req,res,next) => {
    try{
        const data = await Tasks.postTask(req.body)
        res.status(201).json(data)
        console.log('data from router: ', data)
    } catch(error){
        next(error)
    }
})

module.exports = router