const bsdata = require('./bible_school.json');
const sdata = require('./student.json');
const connection = require('../knexfile');

const knex = require('knex')(connection);
const chunkSize = 5000;
const bibleSchool = bsdata.map(a => {
  return a;
});

const students = sdata.map(a => {
  return a;
});

const insertData = function() {
  return knex('students')
    .del()
    .then(() => knex('bible_schools').del())
    .then(() =>
      knex
        .batchInsert('bible_schools', bibleSchool, chunkSize)
        .returning('id')
        .catch(function(error) {
          console.log(error);
        })
    )
    .then(() =>
      knex
        .batchInsert('students', students, chunkSize)
        .returning('id')
        .catch(function(error) {
          console.log(error);
        })
    );
};

insertData()
  .then(function() {
    console.log('Data Insertion Complete');
  })
  .then(function() {
    process.exit(0);
  })
  .catch(function(error) {
    console.log(error);
});