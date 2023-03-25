function stopwatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}

let time = stopwatch();
console.log(time());
console.log(time());
console.log(time());
