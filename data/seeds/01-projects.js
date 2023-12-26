
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').insert([
    {
      project_name: 'Retire outdated software',
      project_description: 'Move process from old software to newsoftware',
      project_completed: false
    },
    {
      project_name: 'Migrate process onto new server',
      project_description: 'Migrate ETL process from SQL1 to SQL2',
      project_completed: false
    },
    {
      project_name: 'Post bulletin',
      project_description: '',
      project_completed: true
    },
  ]);
};
