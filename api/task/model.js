// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks(){
    const taskData = await db('tasks as t')
        .leftJoin('projects as p','t.project_id','=','p.project_id')
        .select('t.task_id','t.task_description','t.task_notes','t.task_completed','p.project_name','p.project_description')
    return taskData.map(task=>({
        ...task,
        task_completed: task.task_completed === 1
    }))
        
}

async function getTaskById(task_id){
    const result = await db('tasks')
            .where('task_id',task_id)
            .first()
    return result
}

async function postTask(newTask){
    const [task_id] = await db('tasks').insert(newTask)
    const newTaskData = await getTaskById(task_id)


    return {
        ...newTaskData,
        task_completed: newTaskData.task_completed === 1
    }
}

module.exports = {
    getTasks,
    getTaskById,
    postTask
}