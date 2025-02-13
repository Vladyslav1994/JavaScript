// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій

// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let x = (a,b) => a*b;
// console.log(x(4,5));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let sum = (r) => 3.14 * r**2
// console.log(sum(5))

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let sum = (h, r) => 2 * 3.14 * h * r;
// console.log(sum(4,5));
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = () =>{
//     let array = [1, 2, 3, 4, 5];
//     for( let a of array ) {
//         console.log(a)
//     }
//     return array
// }
// arr()

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let text = (p) => {
//     document.write(`<p>${p}</p>`)
// }
// text('Hello World!');

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let x = (text) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
//     return text
// }
// x('hello world')

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let x = (text, num) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
//     return text
// }
// x('das',3)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1, 2, 3, 4, 5, 'dassa', 'eqwewqsa', true];
// let f = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<ul>
//         <li>${arrElement}</li>
//     </ul>`);
//     }
// }
// f(array)

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let f=(id, name, age)=> {
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
// let f = (num) => {
//     let x = num[0]
//     for (const numElement of num) {
//         if (numElement < x) {
//             x = numElement
//         }
//     }
//     return x
// }
// let xxx = (f(arr))
// console.log(xxx)

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let array = [3, 5, 8, 11, 2, 4]
// let f = (arr) => {
//     let b = 0
//     for (let a of arr) {
//         b = a + b
//     }
//     return b
// }
// let s = f(array)
// console.log(s)

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let swap = (arr, index1, index2) => {
//     let arr1 = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = arr1;
//     return arr;
// }
// let x = swap([11, 22, 33, 44], 3, 3)
// console.log(x)

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let usd = (sum) => sum / 25
// let eur = (sum) => sum / 42
// let value_usd = usd(500)
// console.log(value_usd)
// let value_eur = eur(500)
// console.log(value_eur)