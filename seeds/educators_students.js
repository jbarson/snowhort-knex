const educatorData = require("../seed_data/educators")
const studentData = require("../seed_data/students")

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert(studentData);
    })
    .then(() => {
      return knex("educators").del();
    })
    .then(() => {
      // Inserts seed entries
      return knex("students")
        .pluck("id")
        .then(studentIds => {
          return studentIds;
        });
    })
    .then(studentIds => {
      const studentDataWithEducatorIds = educatorData.map(educator => {
        educator.student_id =
          studentIds[Math.floor(Math.random() * studentIds.length)];
        return educator;
      });
      return knex("educators").insert(studentDataWithEducatorIds);
    });
};