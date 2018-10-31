const connection = require('./knexfile');

const knex = require('knex')(
    connection
);

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    getBibleSchoolInfo: (root, args) =>
      knex('bible_schools')
        .where('id', args.id)
        .then(schools => {
          const school = schools[0];
          if (!school) {
            throw new Error('Bible School not found');
          }
          return school;
        }),
    getStudentInfo: (root, args) =>
      knex('students')
        .where('id', args.id)
        .then(students => {
          const student = students[0];
          if (!student) {
            throw new Error('student not found');
          }
          return student;
        }),
  }
}