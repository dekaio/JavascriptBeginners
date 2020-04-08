/*
var firstName = "Devika";
console.log(firstName);

var lastName = "Nair";
var age = 20;

var fullAge = true;
console.log(lastName);
console.log(age);
console.log(fullAge);

var job;
console.log(job);

var partner = null;
console.log(partner);

job = "hacker";
console.log(job);

//variable naming rules
//I am a single line comment
/*
I am a multi line comment


var firstName = "Devika";
var age = 28;

// Type coercion
console.log(firstName + " " + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + 'is a '+ age+ 
            ' year old girl.'+ 'is she married? '
           + isMarried);

//variable mutation
age = 'twenty eight';

console.log(age);

job = 'pilot';
alert(firstName + 'is a '+ age+ 
            ' year old girl.'+ 'is she married? '+ isMarried);
var lastName = prompt('What is her last name?');
alert(firstName+lastName);
*/

/***********BASIC OPERATORS***************

var yearDev, yearNik, yearMon;
now = 2020
var yearDev = now-24;
var yearNik = now-26;

console.log(yearDev);
console.log(yearNik);

//Math operators
console.log(now+2);
console.log(now-2);
console.log(now*2);
console.log(now/2);

//Logical Operators

var NikOlder = yearNik < yearDev;
console.log(NikOlder);

//typeof operator
console.log(typeof NikOlder);
console.log(typeof yearDev);
console.log(typeof "Nik is older than Dev");
var x;
console.log(typeof x);

*/
/* Operator precedence **********************8
var now = 2018;
var yearDev = 1995;
var fullAge =18;

//Multiple operators

var isFullAge = now - yearDev >= fullAge;
console.log(isFullAge);

//Grouping
var ageDev = now - yearDev;
var ageMark = 35;
var average = (ageDev + ageMark )/2;
console.log(average);

//Multiple assignments
var x, y;
y = x = (3+5)*4 - 6;

console.log(y,x);

//More operators
x = x * 2;
x *=2;
console.log(x);
x +=10;
console.log(x);
console.log(++x);

*/

/* If else statements -------------------------

var firstName = 'Devika';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
} else{
    console.log(firstName + ' is single!');
}

var isMarried = true;

if (isMarried){
    console.log(firstName + ' is married!');
} else{
    console.log(firstName + ' is single!');
}

function bmiCalc(mass,height)
{
    return mass/height^2;
}
var markMass = 70, markHeight = 1.72, johnMass = 68, johnHeight = 1.80;
//var greater = bmiCalc(markMass, markHeight) > bmiCalc(johnMass, johnHeight);
//console.log('Is Mark\'s BMI greater than John\'s?' + greater);
if (bmiCalc(markMass,markHeight) > bmiCalc(johnMass,johnHeight)){
    console.log('Mark\'s BMI is higher than John\'s');
} else {
        console.log('John\'s BMI is higher than Mark\'s');
                }
*/

/*----------BOOLEAN LOGIC---------------*

var firstName = 'Devika';
var age = 23;

if (age < 13) {
    console.log (firstName + ' is a girl');
} else if (age > 13 && age < 30) {
    console.log (firstName + 'is young');
} else {
    console.log (firstName + 'is old.')
}

*/

/*-------Ternary operators---------------*

var firstName = 'Devika';
var age = 9;
age >=18 ? console.log (firstName + 'drinks beer') : console.log(firstName + ' does not drink beer.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*---------Switch Statements------------
var job = 'teacher';
switch (job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an Ola');
        break;
    case 'researcher':
        console.log(firstName + ' researches on new technology.');
        break;
    default:
        console.log(firstName + ' is an IT specialist');
}
age = 50;
switch(true){
    case age < 13:
        console.log(firstName + ' is a kid');
        break;
    case age>13 && age <20:
        console.log(firstName + ' is a teenager');break;
    case age>20 && age <30:
        console.log(firstName + 'is a young woman');
        break;
    default:
        console.log(firstName + " is an adult");
        break;
}

*/

/*------------------------Truthy and Falsy values and equality operators----------*
//falsy values: undefined, null, '', 0, NaN
//truthy values: NOT falsy values

var height;
height = 0;
if (height || height === 0){
    console.log('variable is defined');
} else{
    console.log('variable is not defined');
}
height = 23;
// Equality operators
if (height == '23'){
    console.log ('The == operator does type coercion');
} else if (height === '23') {
    console.log ('The === operator doesn\'t do type coercion')
}
*/

/*----------Functions-------------------

function calculateAve (birthYear) {
    return 201
}
*/
/*---------Function Statements and Expressions-----
//function declaration
//function whatDoYouDo(job, firstName){}
//function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teacher kids how to code'; 
        case 'driver':
            return firstName + ' drives vehicles';
        case 'designer':
            return firstName + ' designs cloths';
        default:
    }
}
console.log (whatDoYouDo ('teacher', 'Dev'));*/

/*------------Arrays-----------*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1989, 1998);

console.log(names[0]);
console.log(names.length);

names[1] = 'Ben';
names[5] = 'Mary';
names[names.length] = 'Anon';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1999, 'teacher', false];
john.push('blue');
john.unshift('Mr');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1999));

console.log(john.indexOf('designer') == -1 ? 'John is not a designer' : 'John is a designer');

*/

/*-----------------Objects and Properties-------------------*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['isMarried']);
var x = 'birthYear';
console.log(john[x]);
john.job = 'designer';
john['girlFriend'] = 'Deka';
console.log(john['girlFriend']);
john['isMarried'] = true;
//new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1009;
jane['lastName'] = 'Smith';
console.log(jane);
*/
/*-----------Objects and methods----------*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge : function(){
        this.age =  2020 - this.birthYear;
}
};


//console.log(john.calcAge());
//john.age = john.calcAge();
john.calcAge();
console.log(john);

*/

/*-----------Loops and Iterations-----------*/
/*
for (var i =0; i<10; i++){
    console.log(i);
}

var john = ['John', 'Smith', 22, 'Designer'];

for (var i =0; i < john.length; i++){
    console.log(john[i]);
}

//var i = 0;
/*
while(i < john.length){
    console.log(john[i]);
    i++;
}
*/

// continue and break statements

var john = ['John', 'Smith', 22, 'Designer'];

for (var i =0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
for (var i =0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

for (var i = john.length-1; i >= 0; i--){
    console.log(john[i]);
}


































































































