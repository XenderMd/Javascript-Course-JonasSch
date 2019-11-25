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

