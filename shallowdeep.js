//Shallow Copy = copies only the first level
const user1 = {
  name: "Hashir",
  address: {
    city: "Karachi"
  }
};

const user2 = { ...user1 };

user2.address.city = "Lahore";

console.log(user1.address.city); //Lahore - Nested object is still shared.



//Deep Copy - Copies everything recursively
const user2 = structuredClone(user1);
user2.address.city = "Lahore";

console.log(user1.address.city); //Karachi - Original remains unchanged.



//Interview 
const obj1 = {
  a: 1,
  b: {
    c: 2
  }
};

const obj2 = { ...obj1 };

obj2.b.c = 100;

console.log(obj1.b.c); //100
