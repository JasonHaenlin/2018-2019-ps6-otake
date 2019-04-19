const { Course } = require('../../middlewares/orm');

module.exports = {
  getCourses() {
    return Course.query();
  },
  getCoursesOf(majorShorthand) {
    return Course.query()
      .alias('c')
      .joinRelation('majorCourses')
      .where({'majorCourses.shorthand': majorShorthand})
      .select('c.semester', 'c.ue', 'c.title', 'c.description');
  }
};
