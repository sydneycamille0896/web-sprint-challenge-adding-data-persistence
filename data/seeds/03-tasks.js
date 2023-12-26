
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    {
      task_description: 'Scope UI/UX needs',
      task_notes: 'analyst will help with this',
      task_completed: false,
      project_id: 1
    },
    {
      task_description: 'Complete front end development',
      task_notes: 'engineer to complete',
      task_completed: false,
      project_id: 1
    },
    {
      task_description: 'Scope migration steps',
      task_notes: 'analyst to help',
      task_completed: false,
      project_id: 2
    },
    {
      task_description: 'Complete migration development',
      task_notes: 'enginner to help',
      task_completed: false,
      project_id: 2
    },
    {
      task_description: 'Tape up paper with announcement on it',
      task_notes: 'analyst to complete',
      task_completed: false,
      project_id: 3
    },
  ]);
};