// 5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций: 
    


let a = Number(prompt('Enter number a: '));
let b = Number(prompt('Enter number b: '));

//сумма a и b; 
let addition = a + b;
console.log(addition);

// разница между a и b;
let subtraction = a - b;
console.log(subtraction);


// произведение a и b; 
let multiply = a * b;
console.log(multiply);


// частное от деления a на b;   
let division = a / b;
console.log(division);


// остаток от деления a на b; 
let modulus = a % b;
console.log(modulus);

// результат возведения числа a в степень b
let power = a**b;
console.log(power);