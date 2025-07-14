let number={
     name:"Rifat",
     Roll:740265,
     city:"Rangpur",
};
console.log(number.name);
console.log(number.city);
console.log(number["city"]);

number.country = "Bangladesh";
console.log(number.country);
number.age = 16;
console.log(number.age);

delete number.city;
console.log(number.city);




// 