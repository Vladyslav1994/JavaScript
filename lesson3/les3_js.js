// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>hello</div>`)
// }
// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i} hello</div>`)
// }

// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//     #OeT7t3uUMFi
// let i = 0
// while (i < 20) {
//     document.write('<h1>hello</h1>')
//     i++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//     #vLSZKMlO
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>${i} hello</h1>`)
//     i++
// }
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for(let item of listOfItems) {
//     document.write(`<li>${item}</li>`);
// }
// document.write('</ul>');
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//     #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for ( let product of products ) {
//     document.write(`<div class="product-card">
//         <h3 class="product-title">${product.title} ${product.price}</h3>
//         <img src="${product.image}" alt="" class="product-image">
// </div>`)
// }

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
// #4WrHwFTEop0
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
// for (let user of users) {
//     if (user.status === true){
//         console.log(`user ${user.name} is ${user.status}`);
//     }if (user.status === false){
//         console.log(`user ${user.name} is ${user.status}`);
//     }if (user.age > 30){
//         console.log(`user ${user.name} is ${user.age}`);
//     }
// }

// #WpkK0ZH1
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let str = ['hello', 'world', 'wor', 'windows', 'winter'];
// let numbers = [1, 2, 3,4,5];
// let all = [true, false, 1,6, 'strings'];
// console.log(str, numbers, all);



// additinal in progress

// #4aDbSgh
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = 1
// array[1] = 'hello'
// console.log(array)

// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let array = [2,17,13,6,22,31,45,66,100,-18]
//
// for (let arr of array) {
    // if (arr % 2 === 0) {
    //     console.log(arr)
    // }
    // if (arr % 2) {
    //     console.log(arr)
    // }
    // let new_value = []
    // if (arr % 3 === 0){
    //     new_value.push('okten')
    // }
    // console.log(new_value)
// }
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i])
// }