const myName = 'thanakorn';
let height = 178;
let isMale = false;
let city = null;
let bigNumber = 10n;

console.log(myName, height, isMale, city, bigNumber);

const person = {
    name: 'Thanakorn',
    height: '178',
    city: 'Roi-Et'
};

console.log(person.name);

person.height = 180;

console.log(person);

person.weight = 70;

console.log(person);

const numbers = [5, 10, 15, 20];

console.log(numbers[2]);

numbers.push(25);

console.log(numbers);

numbers.pop(numbers);

console.log(numbers);

numbers.unshift(1);

console.log(numbers);

numbers.shift();

console.log(numbers);

let result = 10 + (5 * 2) / 2; /*ลำดับความสำคัญของเครื่องหมายจะคูณก่อนแล้วไป + ซึ่งจากทางซ้ายไปขวาแล้วไป ลบ*/ 

console.log(result);

let password = 'abcdefghijkl';

if(password === ''){
    console.log('password is required');
}else if(password.length >= 8 && password.length <= 12) {
    console.log('password is valid');
}else{
    console.log('password is invalid');
}

function calculateVat(money, vat){
    return money * vat / 100;
}

const totalVate = calculateVat(100, 7);

console.log(totalVate);

const totalvate10 = calculateVat(100, 10);

console.log(totalvate10);

for(let counter = 0; counter < 10; counter++){
   if(counter === 5){
    break;
   }
   console.log(counter);
}
