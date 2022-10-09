const num = [1, 2, 3, 4, 5, 6];
const newNumbers = [...num, 10, 11]; //spread operator
console.log(newNumbers);

const Person = {
  name: "Max",
};

const newPerson = {
  ...Person, //spread operator
  age: 28,
};

console.log(newPerson);

const Filter = (...args) => {
  //Rest operator
  return args.filter((el) => el === 1);
};

console.log(Filter(1, 2, 3, 4));
