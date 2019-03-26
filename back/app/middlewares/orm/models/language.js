const Model = require('./config');
class Language extends Model {
  static get tableName() {
    return 'language';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['university_id', 'language', 'level'],
      properties: {
        university_id: { type: 'integer' },
        language: { type: 'string', minLength: 2, maxLength: 20 },
        level: { type: 'string', enum: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] }
      }
    };
  }
  static get relationMappings() {
    // we need this to avoid circular dependency
    const University = require('./exchangeUniversity');

    return {
      university: {
        relation: Model.HasManyRelation,
        modelClass: University,
        join: {
          from: 'exchange_university.id',
          to: 'language.university_id'
        }
      }
    };
  }
}

module.exports = Language;
