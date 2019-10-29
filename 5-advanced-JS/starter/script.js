// Object. create

/*var personProto = {
    calculateAge: function ()
    {
        console.log(2016-this.yearOfBirth);
    }
}

var john = Object.create (personProto);
john.name='John';
john.yearOfBirth=1990;
john.job='teacher';

var jane = Object.create(personProto, 
    {
        name:{value: 'Jane'},
        yearOfBirth: {value: 1969},
        job: {value: 'designer'}
    });
    */


    // Primitives vs objects

/*
    // Primitives
    var a = 23;
    var b = a;
    a= 46;

    console.log(a);
    console.log(b);


    // Objects
    var obj1=
    {
        name:'John',
        age: 26
    };

    var obj2=obj1;
    obj1.age = 30;

    console.log(obj1.age);
    console.log(obj2.age);

    // Functions

    var age = 27;
    var obj = 
    {
        name: 'Jonas',
        city: 'Lisbon'
    };

    function change (a, b)
    {
        a=30;
        b.city= 'San Francisco';
    }

    change(age, obj);

    console.log(age);
    console.log (obj.city);

    */


    //////////////////////////////////////////////////////////////////////////////
    // Passing functions as arguments

/*
    var years = [1990, 1965, 1937, 2005, 1998];

    function arrayCalc (arr, fn)
    {
        var arrRes = [];
        for (var i = 0; i<arr.length; i++)
        {
            arrRes.push(fn(arr[i]));
        }

        return arrRes;
    }

    function calculateAge (el)
    {
        return 2016 - el;
    }

    function isFullAge(el)
    {
        return el>=18;
    }

    function maxHearRate(el)
    {
        if (el>= 18 ** el <= 81)
        {
          return Math.round(206.9- (0.67*el));
        }
        else 
        {
            return -1;
        }
    }

    var ages = arrayCalc (years, calculateAge);
    console.log(ages);

    var fullAges = arrayCalc (ages, isFullAge);
    console.log(fullAges);

    var rates = arrayCalc (ages, maxHearRate);
    console.log(rates);

    */




    ///////////////////////////////////////////////////////////////////////////
    // Functions returning functions
/*
    function interviewQuestion(job)
    {
        if (job === 'designer')
        {
            return function (name)
            {
                console.log(name + ', can you please explain what UX design is ?');
            }
        }
        else if (job === 'teacher')
        {
            return function (name)
            {
                console.log ('What subject do you teach, ' + name + '?');
            }
        }
        else 
        {
            return function (name)
            {
                console.log ('Hello '+ name + ', what do you do ?');
            }
        }
    }

    var teacherQuestion = interviewQuestion ('teacher');
    teacherQuestion('John');

    var designerQuestion = interviewQuestion ('designer');
    designerQuestion('John');

    interviewQuestion ('teacher')('Mark');

*/

/////////////////////////////////////////////////////////////////////////////
// Lecture: IIFE


/*function game()
{
    var score = math.random()*10;
    console.log(score >=5);
}
game ();*/

/*(function () 
{
    var score = Math.random()*10;
    console.log(score >=5);   
}
) ();

(function (goodluck) 
{
    var score = Math.random()*10;
    console.log(score >=5 - goodluck);   
}
) (5);*/


////////////////////////////////////////////////////////////////////////////////
//////// Lectures: Closures


/*function retirement (retirementAge)
{
    var a = ' years left until retirement. ';
    return function (yearOfBirth)
    {
        var age=2016 - yearOfBirth;
        console.log((retirementAge-age)+a);
    }
}


var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990); */


/* function interviewQuestion(job)
    {
        var question;
        if (job === 'designer')
        {
            return function (name)
            {
                console.log(name + ', can you please explain what UX design is ?');
            }
        }
        else if (job === 'teacher')
        {
            return function (name)
            {
                console.log ('What subject do you teach, ' + name + '?');
            }
        }
        else 
        {
            return function (name)
            {
                console.log ('Hello '+ name + ', what do you do ?');
            }
        }
    }
*/

function interviewQuestion (job)
{
    return function (name)
    {
        if (job === 'designer')
        {
            console.log(name + ', can you please explain what UX design is ?');
        }
        else if (job === 'teacher')
        {
            console.log ('What subject do you teach, ' + name + '?');
        }
        else
        {
            console.log ('Hello '+ name + ', what do you do ?');
        }
    }
}

interviewQuestion('teacher')('John');






