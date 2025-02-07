// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr = [1,2,3,4,5,'hello', 'hi', true, false];
// console.log(arr)

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book_1={
//     title: 'John',
//     pageCount: 3,
//     genre: 'comedy',
// }
// console.log(book_1)
//
// let book_2={
//     title: 'Harry',
//     pageCount: 32,
//     genre: 'fantasy'
// }
// console.log(book_2)
//
// let book_3={
//     title: 'God of war',
//     pageCount: 24,
//     genre: 'horror'
// }
// console.log(book_3)

//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let book_1={
//     title: 'John',
//     pageCount: 3,
//     genre: 'comedy',
//     autors: {
//         name: ['Anton'],
//         age: [23]
//     }
// }
// console.log(book_1)
//
// let book_2={
//     title: 'Harry',
//     pageCount: 32,
//     genre: 'fantasy',
//     autors: {
//         name: ['Lilia'],
//         age: [37]
//     }
// }
// console.log(book_2)
//
// let book_3={
//     title: 'God of war',
//     pageCount: 24,
//     genre: 'horror',
//     autors: {
//         name: ['Violetta'],
//         age: [18]
//     }
// }
// console.log(book_3)


//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let arr = [{name: 'Anton', username: 'Viv', password: 12344321}, {name: 'Ania', username: 'Anet', password: 123321}, {name: 'Letti', username: 'li', password: 121221}, {name: 'Olia', username: 'Ole', password: 321231},{name: 'Sergey', username: 'Ser', password: 553342}, {name: 'Ostap', username: 'Os', password: 48848}, {name: 'Lilia', username: 'lili', password: 4885283},]
// for (const arrKey in arr) {
//     let user = arr[arrKey];
//     if (user) {
//         console.log(user.password);
//     }
// }


// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
// let day = [
//     [{monday:[21,24,20]}],
//     [{tuesday:[21,24,20]}],
//     [{wednesday:[21,24,20]}],
//     [{thursday:[21,24,20]}],
//     [{friday:[21,24,20]}],
//     [{saturday:[21,24,20]}],
//     [{sunday:[21,24,20]}]
// ]
// console.log(day)

// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = +prompt("Enter number");
// if (x !== 0){
//     console.log('Вірно')
// }else{
//     console.log('Невірно');
// }

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt('time');
// if (time < 0 || time > 60) {
//     console.log('error')
// }
// else if (time <=15 ) {
//     console.log('перша частина')
// }else if (time<=30){
//     console.log('друга частина')
// }else if (time <= 45){
//     console.log('третя частина')
// }else if (time < 60){
//     console.log('четверта частина')
// }


// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 30;
// if (day<=10){
//     console.log('перша декада')
// }else if (day<=20){
//     console.log('друга декада')
// }else if (day<=31){
//     console.log('третя декада')
// }

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let number = prompt('write number day');
// switch (number) {
//     case 'monday':
//         console.log('зробити зарядку, почистити зуби, зїсти сніданок');
//         console.log('поїхати на роботу, зїсти обід, повернутися до дому');
//         console.log('піти в зал, зїсти вечерю, лягти спати');
//         break;
//     case 'tuesday':
//         console.log('зробити зарядку, поснідати');
//         console.log('зібрати речі в подорож, сходити в машазин')
//         console.log('ввечері заправити машину і виїхати в Польщу')
//         break;
//     case 'wednesday':
//         console.log('приїхати в краків до 10 ранку, поснідати');
//         console.log('погуляти в старом місті і вавель');
//         console.log('пообідати і ввечері виїхати в Прагу');
//         break;
//     case 'Thursday':
//         console.log('вночі посилитися в готель, і відпочити до ранку');
//         console.log('поснідати, піти в місто погуляти');
//         console.log('посидіти в місцевомі ресторані, спробувати місцеву кухню і звичайно випити пиво');
//         console.log('повернутися до готелю відпочити');
//         console.log('ввечері піти у місцевий паб, подивитися футбол і випити ще пива)))');
//         break;
//     case 'friday':
//         console.log('прокинутися, поснідати і виїхати в Мюнхен');
//         console.log('в обід заправити авто і пообідати');
//         console.log('приїхати в Мюнхен і заселитися в готель');
//         console.log('вночі прогулятися містом і спробувати місцеву кухню');
//         break;
//     case 'saturday':
//         console.log('поснідати і відвідати музей з форфоровими виробами');
//         console.log('пообідати і погуляти містом, подивитися на місто з найбільшого будинку в місті');
//         console.log('ввечері піти на фтбол і відчути атмосферу');
//         break;
//     case 'sunday':
//         console.log('зібрати речі і виїхати у Париж');
//         console.log('заправити авто і пообідати');
//         console.log('приїхати в Париж');
//         console.log('посидіти в ресторані з видом на Ейфелеву вежу');
//         console.log('прийти в отель і лягти спати');
//         break;
// }

//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let a = 10;
// let b = 20;
// if (a===b){
//     console.log('рівні числа')
// }else if(a < b){
//     console.log(b)
// }else if(a > b){
//     console.log(a)
// }

//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
// let x = 1;
// if (x) {
//     console.log(x)
// }else {
//     console.log('defoult')
// }
//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0].monthDuration > 5){
//     console.log('super')
// }if (coursesAndDurationArray[1].monthDuration > 5){
//     console.log('super')
// }if (coursesAndDurationArray[2].monthDuration > 5){
//     console.log('super')
// }if (coursesAndDurationArray[3].monthDuration > 5){
//     console.log('super')
// }if (coursesAndDurationArray[4].monthDuration > 5){
//     console.log('super')
// }else if (coursesAndDurationArray[5].monthDuration > 5){
//     console.log('super')
// }
