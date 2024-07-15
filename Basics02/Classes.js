
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
// const person = new Person("John Doe", 23);
// console.log(person)



class Person {
    constructor(name, age, phone, address, skinColor, vehicle){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
        this.skinColor = skinColor;
        this.vehicle = vehicle;
    }}
  
  const Syed = new Person("Syed",20, "Nokia", "Canada-1", "Brown", "Honda" );
  const ABduk = new Person("Abdul",20, "Nokia", "Canada-1", "Brown", "Honda" );

  console.log(Syed.name)