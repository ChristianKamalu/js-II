// *** FOR LOOPS *** ///

console.log(1 > 2)

// What is a for loop? What syntax does it use?
// starting; ending; incrementer
for(var i = 0; i < 10; i++){
    console.log(i)
} 

// How many different ways can we loop?

for(var i = 100; i > 20; i--){
    console.log(i)
}

// Can we go backwards?

// How can we use a for loop with an array?

var bestPeople = [`Bob Ross`, `Mr. Roggers`, `Steve Erwin`, `The Rock`]

for(var i = 0; i < bestPeople.length; i++){
    console.log(bestPeople[i])
}

// Can we go backwards through an array?

for(var x = bestPeople.length - 1; x >= 0; x--){
    console.log(bestPeople[x])
}

var nums = [1,2,3,4,5,6,7]

for(var i = 0; i < nums.length; i++){
    nums[i] = nums[i] * 2
    //nums[i] = [1,2,3,4,5,6,7][i] * 2
    //nums[i] = [1,2,3,4,5,6,7][0] * 2
    //nums[i] = 1 * 2
    //nums[i] = 2
    //nums[0] = 2
}

console.log(nums)

// .ForEach 
//doesn't return anything

let favNums = [1, 2, 15];

let total = 0;
favNums.forEach((item, index, arr) => total += item)

total;

// .MAP (not destructive)
let doubleNums = favNums.map((item, index, arr) => {
    return item * 2;
})
doubleNums;
//or you can use the implicit function notation 
let doubleNums = favNums.map((item, index, arr) => item * 2)
doubleNums;

// .FILTER (not destructive)
let bigNums = favNums.filter((item, index, arr) => {
    return item > 1000;
})

// .REDUCE (not destructive)
//reduces everything into a single value including numbers, strings, etc.
let total = favNums((total, current, index, arr) => {
    return total + current;
})