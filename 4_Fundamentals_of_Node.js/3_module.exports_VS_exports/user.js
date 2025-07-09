const user = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    street: 'Broadway'
  },
  hobbies: ['reading', 'cooking'],
  greet: function () {
    console.log('Hello')
  }
}

let address = user.address // address is a reference to user.address
console.log(address) // { city: 'New York', street: 'Broadway' }

console.log(address === user.address) // true

address.country = 'USA'
address.pinCode = 10001
console.log(address) // { city: 'New York', street: 'Broadway', country: 'USA', pinCode: 10001 }
console.log(user.address) // { city: 'New York', street: 'Broadway', country: 'USA', pinCode: 10001 }

// the way here 'address' is a reference to 'user.address' object, in the same way the 'exports'  is a reference to 'module.exports' object

// from the above 'user object' we can get an idea how actually the 'module.exports' and 'exports' are working behind the scenes in nodejs.
console.log(exports === module.exports) // true

// but if we try to reassign the 'exports' to some other object then the reference will be broken and 'exports' will no longer be a reference to 'module.exports' object. Eg:
// exports = { name: 'John' }; // this will break the reference

// but we can reassign the 'module.exports' as many time as we want. Eg:
module.exports = { name: 'John' } // now this object will be returned when we require this module.

// the exports might be created as below behind the scenes:
// const exports = module.exports;
