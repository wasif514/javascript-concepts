 /** 
                     //&&
 let a = 5;
 let b = 7;
 let cond1 = a<b;
 let cond2 = a===5;
  console.log("cond1&&cond2=", cond1&&cond2); 
                  

   
                     //||

let a = 5;
   let b = 7;
   let cond1 = a>b;
   let cond2 = a===5;
   console.log("cond1||cond2=", cond1||cond2); 



                     // if 
   let age = 23;
   if(age >= 18)    {
    console.log("you can vote")
   }

   else {
    console.log("you cannot vote");

   }
 
                        //practice set 1

let num = prompt("enter a number(0-100)");

if (num % 3 === 0){
    console.log(num,"is a multiple of 3")
}
else{
    console.log(num,"is not a multiple 3");
}


 
                   // pratice set 2

let score = prompt("enter your marks(0-100)");

let grade;

if(score >= 90 && score <=100){
     grade = "A"
}

else if(score >= 70 && score <=89){
    grade = "B"
}

else if(score >= 50 && score <=69){
    grade = "C"
}


else if(score >= 30 && score <=49){
    grade = "f"
}

console.log("according to your score,your grade was", grade);
*/