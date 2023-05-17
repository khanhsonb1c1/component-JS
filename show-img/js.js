const arr1 = [
  {
    id: 1,
    name: 1,
  },
  // {
  //   id: 2,
  //   name: 1,
  // },
  // {
  //   id: 3,
  //   name: 1,
  // },
];

const arr_x = arr1.slice(0,2)

console.log(arr_x, '/result')

const arr2 = [
  {
    id: 3,
    name: 3,
  },
  {
    id: 4,
    name: 4,
  },
  {
    id: 5,
    name: 5,
  },
];

// let hash = {}; // create an empty hash tableå
// let c = []; // create an empty array

// // iterate over both arrays and store the objects by their ID in the hash table
// arr1.forEach(obj => hash[obj.id] = obj);
// arr2.forEach(obj => hash[obj.id] = obj);

// // iterate over the hash table values and push them into the array
// for (let key in hash) {
//  c.push(hash[key]);
// }

// console.log(c)

// function mergeArrays(array1, array2) {
//   return [...new Set([...array1, ...array2])];
// }
// console.log(mergeArrays(arr1, arr2), 'kdal')
// // output: [ {id: 4, name: 4 }, {id: 5, name: 5 } ]
