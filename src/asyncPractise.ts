interface Family {
  fatherName: string;
  motherName: string;
  childrenNumber: number;
  totalNumberofFamilyMembers?: number;
  chief?: string;
}

type Families = Family[];

const families: Families = [
  {
    fatherName: 'Yves',
    motherName: 'ella',
    childrenNumber: 4,
  },
  {
    fatherName: 'karake',
    motherName: 'Mary',
    childrenNumber: 6,
  },
  {
    fatherName: 'Dios',
    motherName: 'Grace',
    childrenNumber: 3,
  },
];

const allowedDad2022 = function (families: Families) {
  return new Promise(function (resolve, reject) {
    families.forEach(family => {
      setTimeout(() => {
        family.totalNumberofFamilyMembers =
          Object.keys(family).length + family.childrenNumber - 1;
        family.chief = family.fatherName;

        if (family.fatherName.toLowerCase() === 'yves')
          reject('Yves is not an allowed dad in 2022.');
        else resolve(family);
      }, 1000);
    });
  });
};

(async function () {
  try {
    const data = await allowedDad2022(families);
    console.log(data);
  } catch (err) {
    console.error(`🧨🧨 ${err}`);
  }
})();
