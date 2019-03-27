
const BaseModels = require('./base-model');

module.exports = new BaseModels('exchange_university', t => {
  t.increments('id').primary();
  t.string('name', 50).unique();
  t.integer('city_id').references('id').inTable('city');
  t.integer('cost_of_living');
  t.integer('nb_of_place');
  t.integer('admission_rate');
  t.string('small_picture', 255);
  t.string('big_picture', 255);
  t.string('presentation_text', 2000);
  t.string('admission_text', 2000);
  t.string('student_life_text', 2000);
  t.string('cost_of_living_text', 2000);
});