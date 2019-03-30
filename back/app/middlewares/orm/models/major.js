const Model = require('./config');

class Major extends Model {
  static get tableName() {
    return 'major';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'shorthand'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 5, maxLength: 50 },
        shorthand: { type: 'string', minLength: 1, maxLength: 10 },
        icon: { type: 'string', minLength: 5, maxLength: 100 }
      }
    };
  }

  static get relationMappings() {
    // we need this to avoid circular dependency
    const StudyDepartement = require('./study-departement');
    const ExchangeUniversity = require('./exchange-university');

    return {
      studyDepartement: {
        relation: Model.HasManyRelation,
        modelClass: StudyDepartement,
        join: {
          from: 'study_departement.study_id',
          to: 'major.id'
        }
      },
      university: {
        relation: Model.ManyToManyRelation,
        modelClass: ExchangeUniversity,
        join: {
          from: 'major.id',
          through: {
            from: 'study_departement.study_id',
            to: 'study_departement.university_id'
          },
          to: 'exchange_university.id'
        }
      }
    };
  }
}

module.exports = Major;
