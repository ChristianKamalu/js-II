// *** TERNARY *** //

// Let's review if/else statements
var name = `Bob Ross`;

if(name !== `Bob Ross`) {
    name = `Bob Ross`;
} else {
    name = `Best Man`;
}

console.log(name)




// What if we could write the same thing, but with less typing?

//               condition ? if true : is false
var x = name === `Best Man` ? 1000000 : -10;

console.log(x)

// How do we use an if/else statement to assign a variable?

// How do we do it with a ternary?
x = -1

var thing = x > 0 ? `it's possitive` : x === 0 ? `It's zero` : `it's negative`;

console.log(thing)

// Can we nest ternaries?