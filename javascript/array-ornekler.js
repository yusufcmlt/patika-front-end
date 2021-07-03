const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function (number) {
  newArray.push(number * 3);
});
console.log(newArray);

// output = [12, 33, 27]

const person = [
  {
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
  },
];

//1
console.log(person.filter((kisi) => kisi.age > 30));
//2
console.log(person.filter((kisi) => kisi.languages.includes("JavaScript")));
