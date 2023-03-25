//global scope
const num = 100;//num is a global scope variable 

//block scope
function add(first, second) {
    const sum = first + second;//first , second, sum are a block scope variable
    if (sum > 100) {
        //let mood = "happy";//mood variable only works inside if block
        var mood = "happy";//variable declared with var type can be called from anywhere
    }
    console.log(mood);
    return sum;
}

const sum = add(num, 40);
console.log(sum);

console.log(num);
