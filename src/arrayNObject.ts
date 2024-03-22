interface User {
  secondName: string;
  age: number;
}

interface ActualUser {
  firstName: User;
}

interface Users {
  female: User[];
  male: User[];
}

const newObj: ActualUser = { firstName: { secondName: "fabrice", age: 21 } };
const users: Users = {
  female: [
    { secondName: "fabrice", age: 22 },
    { secondName: "gad", age: 21 },
  ],
  male: [
    { secondName: "anne", age: 16 },
    { secondName: "queen", age: 19 },
  ],
};

const formatObject = function (arr: string[]) {
  let finalObj = {
    females: [],
    males: [],
  };

  for (let i = 0; i < arr.length; i++) {
    const [fullName, age, gender] = arr[i].split(/\,/);
    const [firstName, lastName] = fullName.split(" ");
    const newObj: ActualUser = {
      [firstName]: { secondName: lastName, age: +age },
    };
    gender.trim().startsWith("male")
      ? finalObj.males.push(newObj)
      : finalObj.females.push(newObj);
  }
  console.log(finalObj);
};

const people = [
  "Patrick wyne, 30, male",
  "lil wyne, 32, male",
  "Eric mimi, 21, female",
  "Dodos deck, 21,male",
  "Mary Cooper, 21, female",
  "Patrick wyne, 33, male",
  "Patrick wyne, 10,male",
  "Patrick wyne, 40,male",
];
formatObject(people);
