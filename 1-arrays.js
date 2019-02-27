// *** ARRAYS *** //



// How can we store a list?
const first = 'buy groceries';
const second = 'take out trash';
const third = 'wash laundry';

// What is an array?
//contains a list of items
//ordered, and accessible by numbers.

var toDoList = [first, second, third];

console.log(toDoList[0])
console.log(toDoList.length)

var index = 0;
// trick to figure out the last item of an array
console.log(toDoList)

console.log(typeof toDoList.length)

// What is an array? What syntax does it use?

// What can we keep in an array?

var canIReallyDoThat = [false, null, undefined, `yes`, 2, {name: `bob`}, [1, 23],  ]
console.log(canIReallyDoThat)

// How can we access the items in an array?
var nestedArray = [1, [2, [3]]]

console.log(nestedArray[1][1][0])

// How can we access the end of an array?

// METHODS //

var methodsExample = [1,2,3]

// push
//adds the item to the end of the array

methodsExample.push(10)
console.log(methodsExample)

// pop
//"pops" the item off the end of the array
methodsExample.pop()
console.log(methodsExample)

// unshift
//adds to the front of the array

methodsExample.unshift(10)
console.log(methodsExample)

// shift
//removes from the front of the array

methodsExample.shift()
console.log(methodsExample)

// slice
                                //resolves into an array
                                //non destructive (copies)
var partialArray = methodsExample.slice(0,3);

console.log(methodsExample)
console.log(partialArray)

// splice

var partialArrayTwo = methodsExample.splice(1, 1)

console.log(methodsExample)
console.log(partialArrayTwo)
