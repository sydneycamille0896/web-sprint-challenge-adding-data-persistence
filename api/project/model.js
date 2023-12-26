// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    const projectData = await db('projects')
    return projectData.map(project => ({
        ...project,
        project_completed: project.project_completed === 1
    }))
}

async function getProjectById(project_id){
    //console.log('project id from model: ',project_id)
    const result = await db('projects')
        .where('project_id',project_id)
        .first()
    return result
}

async function postProject(newProject){
    const [project_id] =  await db('projects').insert(newProject)
    const newProjectData = await getProjectById(project_id);

    console.log('model data: ',newProjectData)
    return {
        ...newProjectData,
        project_completed: newProjectData.project_completed === 1
    }
}

module.exports = {
    getProjects,
    postProject,
    getProjectById
}