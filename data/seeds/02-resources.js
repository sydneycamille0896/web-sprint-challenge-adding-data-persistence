
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    {
      resource_name: 'Migration Engineer',
      resource_description: 'Engineer with 3-5 years experience developing data migrations'
    },
    {
      resource_name: 'UI/UX Engineer',
      resource_description: 'Front end web application developer'
    },
    {
      resource_name: 'Analyst',
      resource_description: 'Requirements gatherer and documenter'
    },
  ]);
};

