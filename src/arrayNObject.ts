interface User {
  ['second-name']: string;
  age: number;
}

interface ActualUser {
  firstName: User;
}

interface Users {
  females: ActualUser[];
  males: ActualUser[];
}

const formatObject = function (arr: string[]): Users {
  const finalObj: Users = {
    females: [],
    males: [],
  };

  for (let i = 0; i < arr.length; i++) {
    const [fullName, age, gender] = arr[i].split(/\,/);
    const [firstName, lastName] = fullName.split(' ');
    const newObj: ActualUser = {
      [firstName]: { ['second-name']: lastName, age: +age },
    };
    gender.trim().startsWith('male')
      ? finalObj.males.push(newObj)
      : finalObj.females.push(newObj);
  }
  return finalObj;
};

const people = [
  'joseph salton, 21, male',
  'david datch, 32, male',
  'Eric mimi, 21, female',
  'Fabrice Dushimimana, 21,male',
  'Mary Cooper, 21, female',
  'Patrick wyne, 33, male',
  'Solange Ihirwe, 20,female',
  'saddock patrick, 21,male',
];
console.log(formatObject(people));
