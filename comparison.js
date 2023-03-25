let a = "3";
let b = 3;
/*Double equals (==) will perform 
a type conversion when comparing two things*/

if (a == b) {
    //console.log("using double equal a and b are same");
}
else {
    //console.log("using double equal a and b are not same");
}

/*Triple equals (===) will do the same comparison as double equals but 
but without type conversion; if the types differ, false is returned.*/


if (a === b) {
    //console.log("using triple equal a and b are same");
}
else {
    //console.log("using triple equal a and b are not same");
}

//triple equal operator does not work for non premitive data types.

const employee1 = { name: "Faiza" };
const employee2 = { name: "Faiza" };

if (employee1 === employee2) {
    console.log("employee1 and employee2 are same perosn");
}
else {
    console.log("employee1 and employee2 are not same perosn");
}

