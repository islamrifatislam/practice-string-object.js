let person = {
    name: "Rifat",
    age: 15,
    city: "Rangpur"
};
// data newa
console.log(person.name);  // Output: Rifat
console.log(person.age);   // Output: 15
// notation
console.log(person["city"]);  // Output: Rangpur
// + add
person.country = "Bangladesh";
console.log(person.country);  // Output: Bangladesh

// dealate kora
person.age = 16;
console.log(person.age);  // Output: 16
// function model
let person = {
    name: "Rifat",
    age: 15,
    greet: function() {
        console.log("Hello, I am " + this.name);
    }
};

person.greet();  // Output: Hello, I am Rifat

let person={
    name:"Rifat",
    age:15,
    city:"Rangpur"
};