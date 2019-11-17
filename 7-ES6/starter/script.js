// Lecture: let and const

/*
// ES5 
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5)

// ES6 
const name6 = 'Jane Smith';
let age6 = 23;
name6='Jane Miller';
console.log(name6);
*/

/*
// ES5 
function driversLicense (passedTest)
{
    if (passedTest)
    {
        var firstName='John';
        var yearOfBirth=1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car');
}

driversLicense(true);


// ES6 
function driversLicense6 (passedTest)
{
    if (passedTest)
    {
        let firstName='John';
        const yearOfBirth=1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car');
}

driversLicense6(true); */


///////////////////////////////////////////////////////////////////////
// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge (year)
{
    return 2016 - year;
}


// ES 5 

console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth +'. Today he is ' + calcAge (yearOfBirth) + ' years old.'); 

// ES 6

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today is he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(n.repeat(5));