// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getResources(){
    const resourceData = await db('resources')
    return resourceData
}

async function getResourceById(resource_id){
    const result = await db('resources')
            .where('resource_id',resource_id)
            .first()
    return result
}

async function postResource(newResource){
    const [resource_id] = await db('resources').insert(newResource)
    const newResourceData = await getResourceById(resource_id)

    return newResourceData
}

module.exports = {
    getResources,
    getResourceById,
    postResource
}