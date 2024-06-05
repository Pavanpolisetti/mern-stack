'use srict'
//declaring variables
let simplifyConcept='yes';
let checkMyvar=true; 
let makeMyself="As jonas"

console.log(simplifyConcept);
console.log(makeMyself);

function logger(){
    console.log("this  is logger");
}
logger();
function sayHi(){
    console.log("hi")
}

sayHi()

//functions with aurgumrnts//
function GFG(num1, num2 = 2) {
    return num1 * num2;
}
 
console.log(GFG(4));

let x=myFunction(4,5);

function myFunction(a,b){
    return a*b
}
 console.log(x);

 //function declration
  function calcAge(birthday){
    //function expression
    return 2037-birthday;
  }
  const age1=calcAge(1991);
  console.log(age1);
  //arrrow functions
  const gfg = ( x, y, z ) => { 
    console.log( x + y + z ) 
} 
  
gfg( 10, 20, 30 );
//function calling other functions
    function cutFruitPieces(fruit) {
         return fruit * 4;
     }
    
     function fruitProcessor(apples, oranges) {
        const applePieces = cutFruitPieces(apples);
        const orangesPieces = cutFruitPieces(oranges);
    
        const juice = `Juice with ${applePieces} piece of apples and ${orangesPieces} piece of oranges`;
         return juice;
     }
    
     console.log(fruitProcessor(2, 3));
//reviewing functions
const age = function(birthday){
    return 2024-birthday;
}
const yearUntiladult = (birthday,fullName) => {
    const age1 = age(birthday);
    const adult = 18-age1;
    if(adult>0){
        console.log('${fullName} is not a adult');
    }else{
        console.log('${fullName} is  a adult');
        return'${fullName} is  a adult'
    }
}
console.log(yearUntiladult(1999,pavan));
//introdection of arrey
const frinds=['pavan','tarun','naresh','lokesh','vanu'];
console.log(frinds[1]);
console.log(frinds.length);
//basic arrey operation methods
const prinds=['pavan','tarun','naresh','lokesh','vanu'];
console.log(frinds);
//add elements
const newFriends=prinds.push('sai')
console.log(newFriends);
console.log(prinds);
//remove elements
console.log(prinds.pop());
console.log(prinds);
//ananymous functions
const p = function (a, b) {return a * b};
let z = p(4, 3);
console.log(z)
//introdection of objects
const pav=[
    'ravan',
    'javan',
    'kisan','2000-1948'
]
console.log(pav)
const pavObj={
    frd : 'ravan',
    bro: 'javan',farmer:'kisan',date:'2000-1948'
}
console.log(pavObj)
//acces object-dot(.) vs bracket nation
console.log(pavObj.frd);
console.log(pavObj['frd']);

const interestedIn = prompt('What do you want to know about pavan? choose among firstName, lastName, age, job and frd');
 if(pavObj[interestedIn]) {
     console.log(pavObj[interestedIn]);
   } else {
     console.log('Wrong request! Choose among firstName, lastName, age, job and friends');
   }
 
//Declaring the new property to object
pavObj.bro = 'dhanush';
console.log(pavObj.bro);
//object methods
  





