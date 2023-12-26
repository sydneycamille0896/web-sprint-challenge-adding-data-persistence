// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')

const router = express.Router()

router.get('/', async (req,res,next)=>{
    try {
        const data = await Resources.getResources()
        res.json(data)
        console.log(data)
    } catch(err){
        next(err)
    }
})

router.post('/', async (req,res,next) => {
    try{
        const data = await Resources.postResource(req.body)
        res.status(201).json(data)
        console.log('data from router: ', data)
    } catch(err){
        next(err)
    }
})

module.exports = router;