/*premitive type variable: They store the value of a 
variable directly in memory and create a new space in the memory each time 
when a value is assigned to a variable.*/

let a = 25;
//console.log(a);
let b = a;
//console.log(b);
a = 20;
//console.log(a);


/* non-premitive type variable=reference data types refer to instances or objects
 They cannot store the value of a variable directly in memory. 
 They store a memory address of the variable.*/

let company1 = { job: 'web developer' };
let compnay2 = company1;
//console.log(compnay2, company1);
compnay2.job = 'web designer';
//console.log(compnay2, company1);

//Cases of True and false

let x = 5;//true
x = 0;//false
x = '';//false
x = ' ';//true
x = undefined;//false
x = null;//false
x = NaN;//false
x = false;//false
x = true;
x = 1; //true
x = -1; //true
x = [];//true
x = {};//true
x = Symbol;//true



if (x) {
    //console.log("x is true");
}
else {
    //console.log("x is false");
}


//cases of undefined

let anyNumber;
//console.log(anyNumber);

function add(a, b) {
    const sum = a + b;
    return;

}

const sum = add(4, 10);
//console.log(sum);

const num = [11, 12, 15, 20, 25];

//console.log(num[5]);

const employee = { job: "web designer", position: null };
console.log(employee.position);

