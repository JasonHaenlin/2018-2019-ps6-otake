const BaseModel = require('./base-model.js');

module.exports = new BaseModel('student', t => {
  t.uuid('id').primary();
  t.string('first_name', 24);
  t.string('last_name', 24);
  t.integer('major_id').references('id').inTable('major');
  t.timestamps();
},
[
  {
    id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    first_name: 'John', last_name: 'Doe', major_id: 1
  },
  {
    id: 'c8d1ac72-b399-4519-8445-7960c60841b6',
    first_name: 'Maxime', last_name: 'Castellano', major_id: 2
  }
]);
