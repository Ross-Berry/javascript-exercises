const findTheOldest = function (people) {
  const yearAsOfToday = new Date();
  let oldestAge = 0;
  let oldestPerson = {};

  people.map((person) => {
    let age =
      (person.yearOfDeath || yearAsOfToday.getFullYear()) - person.yearOfBirth;

    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = person;
    }
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
