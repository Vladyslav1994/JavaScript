// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function f(a,b) {
//     return a * b;
// }
//
// console.log(f(5,5));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function f(r) {
//     let p = 3.14
//     return p * (r ** 2);
// }
// console.log(f(5));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(R,H) {
//     return 2 * 3.14 * R * H
// }
// console.log(cylinder(4,2));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1,2,3,4,5]
// function array(numbers) {
//     console.log(numbers)
// }
// array(arr)

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// function f(par) {
//     document.write(`<h1>${par}</h1>`)
// }
// f('hello');

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// function f(li) {
//     document.write(`<ul>
//         <li>${li}</li>
//         <li>${li}</li>
//         <li>${li}</li>
//     </ul>`)
// }
// f('hello')

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// function f(li,num){
//     for( let i=0; i<num; i++){
//         document.write(`<ul>
//         <li>${li}</li>
// </ul>`);
//     }
// }
// f('hello',10)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// let array = [1, 2, 3, 4, 5, 'dassa', 'eqwewqsa', true];
// function f(arr) {
//     for (const arrElement of arr) {
//         document.write(`<ul>
//         <li>${arrElement}</li>
//     </ul>`);
//     }
// }
// f(array)


// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function f(id, name, age) {
//     let user = {
//         id : id,
//         name: name,
//         age: age
//     }
//     document.write(`<div>${user.id} - ${user.name} - ${user.age}</div>`)
// }
// f(1,'Ivan',31)
// f(2,'Vika',23)
// f(3,'Ania',18)

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
// let arr = [3,5,8,11,2,4]
//
// function f(array) {
//     let number = array[0];
//     for (let arr of array) {
//         if (arr < number) {
//             number = arr
//         }
//     }
//     return number
// }
//
// console.log(f(arr))
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// це була моя версія до якої дійшов і не зміг зрозуміти чому не працює, подивився відео і подабчив помилку
// let array = [3,5,8,11,2,4]
// function f (arr){
//     let b = 0
//     for (let a of arr) {
//         console.log(a+b)
//     }
//     return b
// }
// let s = f(array)
// console.log(s)

// let array = [3,5,8,11,2,4]
// function f (arr){
//     let b = 0
//     for (let a of arr) {
//         b = a + b
//     }
//     return b
// }
// let s = f(array)
// console.log(s)

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let array = [11,22,33,44]

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function usd(sum) {
    return sum / 25
}
function eur(sum) {
    return sum / 42
}
let value_usd = usd(500)
console.log(value_usd)
let value_eur = eur(500)
console.log(value_eur)
