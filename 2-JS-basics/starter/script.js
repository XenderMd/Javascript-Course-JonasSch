
/************************************
 * Variables and data types
 */

/*
console.log('Hello World Again !!!');
var firstName='John';
console.log(firstName);

var lastName = "Smith";
var age = 28;
console.log(lastName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job='Teacher';
console.log(job);
*/

/******************************
 * Variable mutation and type coercion
*/

/*
var firstName = 'John'
var age = 28;

console.log(firstName + ' ' + age );

var job, isMarried;
job = 'Teacher';
isMarried=false;
 
console.log(firstName + 'is a ' + age + ' year old ' + job + '. Is he married? '+ isMarried);

age='twenty eight';
job='driver';

alert (firstName + 'is a ' + age + ' year old ' + job + '. Is he married? '+ isMarried);
var lastName = prompt('What is his last Name ?');
console.log(firstName + ' ' + lastName);
*/

/************************************
 * Basic operators
 */
/*var now = 2018
ageJohn = 28;
ageMark=33;


var yearJohn = now-28;
var yearMark=  now - 33;
console.log(yearJohn);
console.log(now+2);
console.log(now*2);
console.log(now/10);

//Logical operators
var johnOlder= ageJohn>ageMark;
console.log(johnOlder);
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "John is older then Mark");
var x;
console.log(typeof x);
*/

/*****************************
 * Operator Precedence 
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge=18;

var isFullAge=now-yearJohn >= fullAge;//true
console.log(isFullAge);

var ageJohn = now- yearJohn;
var ageMark = 35;
var average = (ageJohn+ageMark)/2;
console.log(average);

//Multiple Assignements
var x,y;
x=y=(3+5)*4 - 6;
console.log(x,y);

//More operators
x*=2;
console.log(x);
x+=10;
console.log(x);
x--;
console.log(x);
*/

/***********************************
 * Coding Challenge 1
 */

 /*var markMass = 80;
 var markHeight= 1.78;
 var markBMI;
 var johnMass=90;
 var johnHeight=1.82;
 var johnBMI;

 var isJohnBMIHigher;

 markBMI=markMass/(markHeight*markHeight);
 johnBMI=johnMass/(johnHeight*johnHeight);

 isJohnBMIHigher=johnBMI>markBMI;
 console.log(johnBMI);
 console.log(markBMI);

 console.log("Is John BMI higher than John's ? " + isJohnBMIHigher);
*/

/**************************************************
 * If/Else Statements
 */
/*var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married')
{
    console.log(firstName + ' is married!')
}
else
{
    console.log(firstName + ' will hopefully marry soon !!')
}

var markMass = 80;
 var markHeight= 1.78;
 var markBMI;
 var johnMass=90;
 var johnHeight=1.82;
 var johnBMI;

 var isJohnBMIHigher;

 markBMI=markMass/(markHeight*markHeight);
 johnBMI=johnMass/(johnHeight*johnHeight);

 if (markBMI>johnBMI)
 {
    console.log("Mark's BMI is higher than John's ");
 }
 else
 {
     console.log("John's BMI is higher than Mark's")
 }
 */

 /****************************************
  * Boolean Logic
  */

  /*var firstName='John';
  var age = 21;

  if(age<13)
  {
      console.log(firstName +' is a boy');
  }
  else if(age>=13 && age < 20)
  {
      console.log(firstName + ' is a teenager');
  }
  else if(age >20 && age<30)
  {
      console.log(firstName + ' is a young man');
  }
  else
  {
      console.log(firstName +' is a man');
  }
  */


  /***********************************************
   * The Ternary Operator and Switch Statements
   */

   /*var firstName = 'John';
   var age=22;

   age>= 18 ? console.log(firstName + ' drinks beer.'): console.log(firstName + ' drinks juice')

   var drink = age >= 18 ? 'beer' : 'juice';
   console.log(drink);
   

   //Switch statement

   var job = 'cop';

   switch (job)
   {
       case 'instructor':
       case 'teacher':
           console.log(firstName + ' teaches kids how to code');
           break;
        case 'driver':
            console.log (firstName + ' drives uber in Lisbon');
            break;
        case 'designer':
            console.log (firstName + ' builds beatiful websites');
            break;
        default:
            console.log (firstName + ' does something else');
            break;
   }
   */


   /***********************************************
    * Truthy and Falsy values and equality operators
    */

    //falsy values: undefined, null, 0, '', NaN
    //truthy values: NOT falsy values

    /*var height=23;

    if (height || height === 0)
    {
        console.log('The variable is defined');
    }
    else
    {
        console.log ('The variable has not been defined');
    }
    // Equality operators

    if (height == '23')
    {
        console.log ('The == operator does type coercion !!')
    }
*/

/*****************************************
 * Coding Challenge 2
 */

 /*var teamJohn = (89+120+103)/3;
 var teamMike = (116+94+123)/3;
 var teamMary = (116+94+123)/3;

 switch (true)
 {
    case (teamJohn === teamMary):
         console.log('Teams John: '+ teamJohn + ' and Marry: '+ teamMary + ' won!');
         break;
    case (teamJohn === teamMike):
         console.log('Teams John: '+ teamJohn + ' and Mike: '+ teamMike + ' won!');
         break;
    case (teamMike === teamMary):
         console.log('Teams Mike: '+ teamMike + ' and Marry: '+ teamMary + ' won!');
         break;
    case (teamJohn > teamMike && teamJohn > teamMary):
         console.log('Team John won: ' + teamJohn);
         break;
    case (teamMike > teamJohn && teamMike > teamMary):
        console.log('Team Mike won: ' + teamMike);
        break;
    case (teamMary > teamJohn && teamMary > teamMike):
        console.log('Team Mary won: ' + teamMary);
        break;
    
 }
*/

/*************************************************
 * Functions 
 */

 /*function calculateAge (birthYear)
 {
     return 2018- birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageMike, ageJane);


 function yearsUntilRetirement (year, firstName)
 {
     var age = calculateAge (year);
     var retirement = 65 - age;
     if (retirement >0) 
     {
         console.log(firstName + ' retires in ' + retirement + ' years');
     }
     else
     {
         console.log (firstName+ ' is already retired');
     }
 }

 yearsUntilRetirement (1948, 'John');
 */



 /********************************************************
  * Function Statements and Expressions
  */

  // Function Expression
  /*var whatDoYouDo = function (job, firstName)
  {
      switch (job)
      {
          case 'teacher':
              return firstName + ' teaches kids how to code';

          case 'driver':
              return firstName + ' drives a cab in Lisbon';

          case 'designer':
              return firstName + ' designs beautiful websites';

          default:
              return firstName + ' does something else';
      }

  }

  console.log(whatDoYouDo ('teacher', 'John'));
  console.log(whatDoYouDo ('designer', 'Jane'));
*/

/********************************************************
 * Arrays
 */

 /*var names = ['John', 'Mark', 'Jane'];
 var year = new Array(1990, 1969, 1948);

 console.log(names[2]);
 console.log(names.length);

 names[1]='Ben';
 console.log(names);

 names[names.length]='Mary';
 console.log(names);

 // Different data types

 var john = ['John', 'Smith', 1990, 'teacher', false];

 john.push('blue');
 john.unshift('Mr.');
 console.log(john);

john.pop();
console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner=john.indexOf('designer')==-1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);
*/

/***********************************************
 * Coding Challenge 3
 */

/* function TipCalculator (bill)
 {
  
    var tip;

    if (bill<50) 
    {
        tip=bill*0.2;
    }
    else if (bill>=50 && bill <200 )
    {
        tip=bill*0.15;
    }
    else if (bill>=200)
    {
        tip=bill*0.1;
    }
    return tip;
 }



 var bills = [124, 48, 268];
 var tips = [TipCalculator(bills[0]), TipCalculator(bills[1]), TipCalculator(bills[2])];
 var total = [];
 
 total.push(bills[0]+TipCalculator(bills[0]));

 total.push(bills[1]+TipCalculator(bills[1]));

 total.push(bills[2]+TipCalculator(bills[2]));


 console.log(bills);
 console.log(tips);
 console.log(total);
 
 */

 /****************************************************
  * Objects nad properties
  */

  /*var john = {
      firstName: 'John',
      lastName: 'Smith',
      birthYear: 1990,
      family: ['Jane', 'Mark', 'Bob', 'Emily'],
      job: 'teacher',
      isMarried: false
  }

  console.log(john.firstName);
  console.log(john['lastName']);
  var x = 'birthYear';
  console.log(john[x]);
  john.job='designer';
  john['isMarried']=true;
  console.log(john);
  
  
  var jane = new Object();
  jane.firstName = 'Jane';
  jane['lastName'] = 'Smith';
  jane.birthYear=1969;
  console.log(jane);
*/


/****************************************
 * Objects and methods
 */

/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function ()
    {
        return 2018-this.birthYear;
    }
}

john.age = john.calcAge();
console.log(john);
*/


/******************************************
 * Coding Challenge 4
 */

 /*var john = new Object ();
 var mark = new Object ();

 john.name='John';
 john.mass='80';
 john.height = '1.82';
 john.BMICalc = function ()
 {
     return this.mass/(this.height*this.height);
 }
 john.bmi=john.BMICalc();

 mark.name='Mark';
 mark.mass='80';
 mark.height = '1.82';
 mark.BMICalc = function ()
 {
     return this.mass/(this.height*this.height);
 }
 
 mark.bmi=mark.BMICalc();


 if (john.bmi>mark.bmi)
 {
     console.log(john.name + ' has a higher BMI: ' + john.bmi);
 }
 else if (mark.bmi>john.bmi)
 {
    console.log(mark.name + ' has a higher BMI: ' + mark.bmi);   
 }
 else
 {
     console.log('Both have the same BMI: '+mark.bmi);
 } */

 /************************************************************************
  * Loops and iteration
  */
/*
 var john = ['John', 'Smith', 1990, 'designer', false];

  for (var i =0; i<10; i++)
  {
      console.log(i);
  }

 For Loop
  for (var i =0; i<john.length; i++)
  {
      console.log(john[i]);
  }

 while loop
  i=0;
  while(i<john.length)
  {
      console.log(john[i]);
      i++;
  }
*/

 // Continue and break statements

 /*
 for (var i=0; i<john.length; i++)
 {
     if (typeof john[i] !=='string') continue;
     console.log(john[i]);
 }

 for (var i=0; i<john.length; i++)
 {
     if (typeof john[i] !=='string') break;
     console.log(john[i]);
 }
 */


 /*******************************************************
  * Coding challenge 5
  */

/*
  var john = {

    bills: [124, 48, 268, 180, 42],
    tips:[],
    total:[],
    calcTips: function ()
    {
        for (var i=0; i<this.bills.length; i++)
        {
            if (this.bills[i]<50)
            {
                this.tips[i]=this.bills[i]*0.2;
            }
            else if (this.bills[i]>=50 && this.bills[i]<200)
            {
                this.tips[i]=this.bills[i]*0.15;
            }
            else if(this.bills[i]>=200)
            {
                this.tips[i]=this.bills[i]*0.1;
            }
        }
    },
    calcTotal: function ()
    {
        this.calcTips();

        for (var i=0; i< this.tips.length; i++)
        {
            this.total[i]=this.bills[i]+this.tips[i];
        }
    },
    
    dispTips: function ()
    {
        console.log(this.tips);
    },

    dispTotal: function ()
    {
        console.log(this.total);
    }
  }

  var mark = {

    bills: [77, 375, 110, 45],
    tips:[],
    total:[],
    calcTips: function ()
    {
        for (var i=0; i<this.bills.length; i++)
        {
            if (this.bills[i]<100)
            {
                this.tips[i]=this.bills[i]*0.2;
            }
            else if (this.bills[i]>=100 && this.bills[i]<300)
            {
                this.tips[i]=this.bills[i]*0.1;
            }
            else if(this.bills[i]>=300)
            {
                this.tips[i]=this.bills[i]*0.25;
            }
        }
    },
    calcTotal: function ()
    {
        this.calcTips();

        for (var i=0; i< this.tips.length; i++)
        {
            this.total[i]=this.bills[i]+this.tips[i];
        }
    },
    
    dispTips: function ()
    {
        console.log(this.tips);
    },

    dispTotal: function ()
    {
        console.log(this.total);
    }
  };

  mark.calcTotal();
  john.calcTotal();

  function CalcTipsAverage (tips)
  {
    var tipsAverage=0;
    for (var i = 0; i<tips.length; i++)
    {
        tipsAverage=tips[i]+tipsAverage;
    }
    return tipsAverage/tips.length;
  };

  if (CalcTipsAverage(mark.total) > CalcTipsAverage(john.total))
  {
    console.log('Mark: ' + CalcTipsAverage(mark.total)); 
  }
  else 
  {
    console.log('John: ' + CalcTipsAverage(john.total));   
  }

  */

  




 








