interface Student {
  name: string;
  age?: number;
}

const setStudentAgeApi = (student: Student, age: number) => {
  //async code below
  console.log('1. Starting ..');
  setTimeout(() => {
    console.log('2. setting age for the student');
    student.age = age;
  }, 500);
  console.log('3. Done ..');
};

const student = { name: 'Eric' };
// setStudentAgeApi(student, 20);
// console.log(student);

//? Using promises
const setStudentAgeApiNew = (student: Student, age: number) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      student.age = age;
      if (age < 0) reject('Bad Age');
      else resolve(student);
    }, 500);
  });
};

setStudentAgeApiNew(student, -10)
  .then(data => {
    console.log(data);
  })
  .catch(err => console.error(`🧨🧨 ${err}`));
