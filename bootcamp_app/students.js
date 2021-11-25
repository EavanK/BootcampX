const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2];
const limit = process.argv[3] || 5;
// const value = [`%${cohort}%`, limit];
pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%'||$1||'%'
LIMIT $2;`, [cohort, limit])
  .then(res => {
    res.rows.forEach(student => {
      console.log(`${student.name} has an id of ${student.student_id} and was in the ${student.cohort} cohort`);
    });
  })
  .catch(err =>  console.error('query error', err.stack));