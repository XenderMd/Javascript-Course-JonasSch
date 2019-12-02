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

/*let firstName = 'John';
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
*/

////////////////////////////////////////////////////////////////////////////////////////////
//// Lecture Arrow functions

/*const years = [1990, 1965, 1982, 1937];

// ES5

var ages5 = years.map(function (el) 
{
    return 2016 - el;
} );
console.log(ages5);

// ES6 

let ages6 = years.map(el => 2016 - el);

console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016-el}.`);
console.log(ages6)

ages6= years.map((el, index) =>
{
    const now= new Date().getFullYear();
    const age= now-el;
    return `Age element ${index +1}: ${age}.`;
} );

console.log(ages6);
*/

//////////////////////////////////////////////////////////////////////////
//// Lecture: Arrow functions 2

//ES5

/*var box5 = {
    color: 'green',
    position: 1,
    clickMe: function ()
    {
        var self = this;
        document.querySelector('.green').addEventListener('click', function()
        {
           var str= 'This is box number ' + self.position + ' and it is ' + self.color;
           alert(str);
        });   
    }
}

box5.clickMe();

*/
//ES6

/*const box6 = {
    color: 'green',
    position: 1,
    clickMe: function ()
    {
        document.querySelector('.green').addEventListener('click', 
        ()=>{
           var str= 'This is box number ' + this.position + ' and it is ' + this.color;
           alert(str);
        });   
    }
}

box6.clickMe(); */


//ES 5
/*function Person (name)
{
    this.name=name;
}

Person.prototype.myFriends5= function (friends)
{
    var arr = friends.map(function(el)
    {
        return this.name+' is friends with ' + el;
    }.bind(this));

    console.log(arr);
};

var friends = ['Bob', 'John', 'Mark'];
new Person ('John').myFriends5(friends);
*/

/*
//ES 6
function Person (name)
{
    this.name=name;
}

Person.prototype.myFriends5 = function (friends)
{
    var arr = friends.map(el =>
    {
        return this.name+' is friends with ' + el;
    });

    console.log(arr);
};

var friends = ['Bob', 'John', 'Mark'];
new Person ('John').myFriends5(friends);
*/



/////////////////////////////////////////////////////////
//// Lecture: Destructuring

// ES 5

//var john = ['john', 26];
//var name = john [0];
//var age = john[1];


// ES 6
/*
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firsName: 'John',
    lastName: 'Smith'
}

const{firsName, lastName} = obj;
console.log(firsName);
console.log(lastName);


const{firsName: a, lastName: b} = obj;
console.log(a);
console.log(b);



function calcAgeRetirement(year)
{
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}


const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/







/////////////////////////////////////////////////////////////
////////////// Lecture Arrays in ES6
/*
const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur)
{
    cur.style.backgroundColor = 'dodgerblue';
});


// ES6 

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur=> cur.style.backgroundColor='dodgerblue');

//ES5
/*
for (var i = 0; i<boxesArr5.length; i++)
{
    if (boxesArr5[i].className==='box blue')
    {
        continue; // skips the current iteration
    };
    boxesArr5[i].textContent='I changed to blue';
}*/

// ES6 
/*
for (const cur of boxesArr6)
{
    if (cur.className.includes('blue'))
    {
        continue;
    };
    cur.textContent='I changed to blue !'
}

// ES5
var ages = [12, 17,8,21, 14, 11];

var full = ages.map(function(cur)
{
    return cur >=18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6 
console.log(ages.findIndex(cur=> cur >= 18));
console.log(ages.find(cur=>cur>= 18));
*/





///////////////////////////////////////////////////////
// Lecture: Spread operator 

/*function addFourAges (a,b,c,d)
{
    return a+b+c+d;
}

var sum1=addFourAges(18,30,12, 21);
console.log(sum1);

// ES5
var ages=[18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);

console.log(sum2);

// ES6
const sum3 = addFourAges(...ages) // ... -> the spread operator;
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith,...familyMiller];
console.log(bigFamily);

const h=document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur=> cur.style.color='purple');*/


///////////////////////////////////////////////////////////////
// Lecture: Rest parameters

//ES5

/*function isFullAge5()
{
    console.log(arguments);
    var argsArray = Array.prototype.slice.call(arguments);
    argsArray.forEach(function (cur) 
    {
        console.log(2016-cur) >=18;
    })
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2000, 1999);

//ES6

function isFullAge6(...years) // ... the REST parameters
{
    years.forEach(cur=>console.log((2016-cur)>=18));
}

isFullAge6(1990, 1999, 1965);
*/

/*function isFullAge5(limit)
{
    console.log(arguments);

    var argsArray = Array.prototype.slice.call(arguments,1);
    console.log(argsArray);

    argsArray.forEach(function (cur) 
    {
        console.log(2016-cur) >=18;
    })
}

isFullAge5(21, 1990, 1999, 1965);

//ES6

function isFullAge6(limit,...years) // ... the REST parameters
{
    years.forEach(cur=>console.log((2016-cur)>=limit));
}

isFullAge6(18, 1990, 1999, 1965);
*/



///////////////////////////////////////////////////////////////
//////////Lecture: Default Parameters


// ES5
/*
function SmithPerson (firstName, yearOfBirth, lastName, nationality)
{
    lastName===undefined ? lastName ='Smith' : lastName=lastName;
    nationality===undefined ? nationality='American': nationality=nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality=nationality;
}


var john = new SmithPerson ('John', 1990);
var emily = new SmithPerson ('Emily', 1983, 'Diaz', 'spanish');
*/

// ES6 
/*function SmithPerson (firstName, yearOfBirth, lastName='Smith', nationality='American')
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality=nationality;
}
*/


///////////////////////////////////////////////////////////////////////////////////////////////
///// Lecture: Maps

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version ?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('answer', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again !');

console.log(question.get('question'));
console.log(question.size);

if (question.has(4))
{
    //question.delete(4);
    //console.log('Answer 4 is here');
}

//question.clear();

//question.forEach ((value, key) => console.log(`This is ${key}, abd it's set to ${value}`));

for (let [key, value] of question.entries())  // destructuring
{
    if (typeof (key) ==='number')
    {
        console.log(`Answer ${key}: it's set to ${value}`);
    }
}

const ans = parseInt (prompt('Write the correct answer'));

console.log(question.get(ans ===question.get('answer')));


