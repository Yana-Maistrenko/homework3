/*Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення залежно від значення числа. 
Якщо число ділиться на 3, то повідомлення має бути Fizz, якщо число ділиться на 5, то повідомлення має бути Buzz, а якщо число ділиться і на 3, 
і на 5, то повідомлення має бути FizzBuzz. Наприклад, для числа 15 повідомлення має бути FizzBuzz.*/

/*let num = 15;

if(num % 3 === 0 && num % 5 === 0){
    console.log("FizzBuzz");
}else if(num % 3 === 0){
    console.log("Fizz");
}else if (num % 5 === 0){
    console.log("Buzz");
}else{
    console.log("Число поза умовою");
}*/




/*Вам необхідно написати програму, яка приймає на вхід число і виводить у 
консоль повідомлення, що вказує, чи є введений рік високосним.*/
/*let year = 1900; //Ділиться на 4, ділиться на 100, не ділиться на 400. Це не високосний рік.

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
    console.log("Рік є високосним");
}else{
    console.log("Рік не є викокосним");
}*/



/*Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі Вам N рік / роки / років. 
Залежно від числа N слово рік має змінюватися на років або року. Наприклад, Вам 1 рік, Вам 5 років, Вам 42 роки.*/

/*let age = 15;
let lastDigit = age % 10;
let lastTwoDigits = age % 100;

if(lastTwoDigits >= 11 && lastTwoDigits <= 14){
    console.log ("Вам" + " " + age + " " + "років");
}else if(lastDigit === 1){
    console.log("Вам" + " " + age + " " + "рік")
}else if(lastDigit >= 2 && lastDigit <= 4){
    console.log("Вам" + " " + age + " " + "роки")
}else{
    console.log ("Вам" + " " + age + " " + "років");
}*/