let coolName = "Asia";

if (coolName === "Asia") {
  let coolName = "karolina";
  console.log(coolName);
}
console.log(coolName);

function test(a, b, c, d) {
  return a + b + c + d;
}
console.log(test(1, 2, 3, 4));

function multiply(a, b) {
  let result = a * b;
  return result;
}
console.log(multiply(3, 10));
console.log(multiply(120, 56));
console.log(multiply(1234, 1234));

function averageValue(a, b, c, d) {
  let result = (a + b + c + d) / 4;
  return result;
}

console.log(averageValue(2, 4, 8, 10));
console.log(averageValue(30, 60, 90, 120));
console.log(averageValue(5, 10, 15, 20));

function createTv(brand, screanSize, color) {
  if (color !== "white" && color !== "black" && color !== "silver") {
    return null;
  }
  const obj = {
    brand: brand,
    screanSize: screanSize,
    color: color,
  };

  return obj;
}

console.log(createTv("sony", 42, "black"));
console.log(createTv("sharp", 32, "white"));
console.log(createTv("lenovo", 50, "silver"));
console.log(createTv("lenovo", 42, "green"));

let multiplyS = function (a, b) {
  return a * b;
};
console.log(multiplyS(3, 6));

let testS = multiplyS;
console.log(testS(10, 25));

function greaterThen6(array, callback) {
  let greater6 = array.filter((el) => el > 6);
  callback(greater6);
}

function showNumbers(numbers) {
  console.log(numbers);
}

greaterThen6([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], showNumbers);
greaterThen6([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (data) => {
  console.log("Data:", data);
});

function multiBy3(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 3;
  }
}
let numberArray = [1, 2, 3, 4, 5, 6, 7];

multiBy3(numberArray);
console.log(numberArray);

const Computer = ["amd", "nvidia", "32gb", "1tb"];

function createComputer(cpu, gpu, ram, dysk) {
  return {
    cpu,
    gpu,
    ram,
    dysk,
  };
}

function createLaptop(obj) {
  return { ...obj, type: "laptop", weight: 2.5 };
}

console.log(createLaptop(createComputer(...Computer)));

function createUser(name, contact) {
  const user = { name };
  if (typeof contact === "string") {
    user.email = contact;
  } else if (typeof contact === "number") {
    user.telephone = contact;
  }
  return user;
}
console.log(createUser("Ola", "ola@example.com"));
console.log(createUser("kasia", 987654321));

const school = {
  name: "sp10",
  city: "puławy",
  students: [],
  addStudent: function (name, surname) {
    const student = { name, surname };
    this.students[this.students.length] = student;
  },
  showStudents: function () {
    if (this.students.length === 0) {
      console.log("school has no students");
      return;
    }
    this.students.forEach((el) => console.log(el));
  },
  showStudentsByName: function (name) {
    if (this.students.length === 0) {
      console.log("school has no students");
      return;
    }
    return this.students.forEach((el) =>
      el.name.toLowerCase() === name.toLowerCase() ? console.log(el) : null
    );
  },
  getNumStudents: function () {
    console.log(this.students.length);
  },
  resetStudents: function () {
    this.students = [];
  },
};
school.addStudent("tomek", "palica");
school.addStudent("olek", "palica");
school.addStudent("dawid", "palica");
school.addStudent("ola", "palica");
school.showStudents();
school.showStudentsByName("tomek");
school.getNumStudents();
school.resetStudents();
school.showStudents();

function Magazine(name, producer) {
  this.name = name;
  this.producer = producer;
  this.adverts = [];
  this.addAdvert = function (name, page) {
    this.adverts.push({ name, page });
  };
  this.printAdverts = function () {
    return this.adverts.forEach((el) => console.log(el));
  };
}

const mag1 = new Magazine("loruea", "polski-makeup");
console.log(mag1);
mag1.addAdvert("piłka", 12);
mag1.printAdverts();

const truck = {
  _brand: null,
  _model: null,
  _topSpeed: 0,

  set brand(newBrand) {
    this._brand = newBrand;
  },

  get brand() {
    return this._brand;
  },

  set model(newModel) {
    this._model = newModel;
  },

  get model() {
    return this._model;
  },

  set topSpeed(newSpeed) {
    if (newSpeed > 0) {
      this._topSpeed = newSpeed;
    } else {
      console.log("speed to low");
    }
  },

  get topSpeed() {
    return this._topSpeed;
  },
};

truck.model = "xr";
truck.brand = "nissan";
truck.topSpeed = 100;
console.log(truck);
console.log(truck.model);
console.log(truck.brand);
console.log(truck.topSpeed);
let g = innerWidth;

// setInterval(() => {
//   if (innerWidth !== g) {
//     console.log("zmieniła się szerokość ekranu :");
//     console.log(`szerokość ekranu: ${innerWidth}, pierwotna szerokość :${g}`);
//     g = innerWidth;
//   }
// }, 1000);
// const userInput = prompt("podaj liczbe:");
// const secondInput = prompt("podaj kolejną liczbe");

// console.log(`wynik dodawania : ${parseInt(userInput) + parseInt(secondInput)}`);

// function foo() {
//   for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 300);
//   }
// }

let re;

console.log(re);

const object = {
  name: "tomek",
  surname: "palica",
  age: 21,
};

function readObj({ name, surname, age }) {
  console.log(name, surname, age);
}

readObj(object);

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

function reverse(string) {
  let array = string.split(" ");

  let result = [];
  // for (i = array.length; i > 0; i--) {
  //   console.log(i);
  //   result.push(array[i - 1]);
  // }
  for (i = 0; i < array.length; i++) {
    result.unshift(array[i]);
  }
  console.log(result.join(" "));
}
reverse("Ala ma kota");

const array2 = [1, 2, 2, 3, 4, 5, 5, 6];
const filteredArray = array2.filter((el, i, arr) => arr.indexOf(el) === i);
const empty = [];
const filteredArray2 = array2.forEach((el) => {
  if (empty.includes(el)) {
    return;
  } else {
    empty.push(el);
  }
});
console.log(filteredArray);
console.log(empty);
