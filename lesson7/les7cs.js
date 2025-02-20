// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = []
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
//
users.push(new User(1, 'anton', 'bereza', 'fjaskfnaj@dsakkda', 1321321));
users.push(new User(2, 'masha', 'komso', 'fjaskfnaj@dsakkda', 1321321));
users.push(new User(3, 'ania', 'ostro', 'fjaskfnaj@dsakkda', 1321321));
users.push(new User(4, 'katia', 'isko', 'fjaskfnaj@dsakkda', 1321321));
users.push(new User(5, 'lila', 'lestenko', 'fjaskfnaj@dsakkda', 1321321));
users.push(new User(6, 'vitia', 'pustowski', 'fjaskfnaj@dsakkda', 1321321));
users.push(new User(7, 'petya', 'prusko', 'fjaskfnaj@dsakkda', 1321321));
users.push(new User(8, 'andrew', 'mosko', 'fjaskfnaj@dsakkda', 1321321));
users.push(new User(9, 'sasha', 'fesko', 'fjaskfnaj@dsakkda', 1321321));
users.push(new User(10, 'nastya', 'arko', 'fjaskfnaj@dsakkda', 1321321));

// console.log(users);
//
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let xxx = users.filter((value) => {
    return value.id % 2 === 1;
});
console.log(xxx);

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// users.sort(function (a, b) {
//     // return a.id - b.id; зростання
//     // return b.id - a.id; зменшення
// })
// console.log(users);
//
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// let client = [];
// class Clients {
//     constructor(id, name, surname, email, phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// client.push(new Clients(1, 'anton', 'bereza', 'fjaskfnaj@dsakkda', 1321321,[{title:'tv',price:100}]));
// client.push(new Clients(2, 'masha', 'komso', 'fjaskfnaj@dsakkda', 1321321, [{title:'freeze', price:200}]));
// client.push(new Clients(3, 'ania', 'ostro', 'fjaskfnaj@dsakkda', 1321321,[{title:'oven', price:120}]));
// client.push(new Clients(4, 'katia', 'isko', 'fjaskfnaj@dsakkda', 1321321,[{title:'plate', price:421}]));
// client.push(new Clients(5, 'lila', 'lestenko', 'fjaskfnaj@dsakkda', 1321321,[{title:'batery', price:213}]));
// client.push(new Clients(6, 'vitia', 'pustowski', 'fjaskfnaj@dsakkda', 1321321,[{title:'led', price:523}]));
// client.push(new Clients(7, 'petya', 'prusko', 'fjaskfnaj@dsakkda', 1321321,[{title:'headphone', price:123}]));
// client.push(new Clients(8, 'andrew', 'mosko', 'fjaskfnaj@dsakkda', 1321321,[{title:'phone', price:532}]));
// client.push(new Clients(9, 'sasha', 'fesko', 'fjaskfnaj@dsakkda', 1321321,[{title:'coffee_mashine', price:342}]));
// client.push(new Clients(10, 'nastya', 'arko', 'fjaskfnaj@dsakkda', 1321321,[{title:'ice_mashine', price:243}]));
// console.log(client);
//
//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let xxx = client.sort(function(a, b) {
//     return a.order[0].price - b.order[0].price;
// })
// console.log(xxx);
//
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, max_speed,engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.max_speed}на годину`);
//     }
//     this.info = function () {
//         for (const info in this) {
//             console.log(info, this[info]);
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(newSpeed = max_speed + newSpeed)
//     }
//     this.changeYear = function (new_year) {
//         if (new_year > year || new_year < year) {
//             console.log(new_year);
//         }else {
//             console.log(year);
//         }
//     }
//     this.addDriver= function (driver) {
//         console.log(driver);
//     }
// }
// let bmw = new Car('BMW', 'Germany', 2025, 273,2)
//
// bmw.drive()
// bmw.info()
// bmw.increaseMaxSpeed(5)
// bmw.changeYear(1923)
// bmw.addDriver('anton')


//
//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, producer, year, max_speed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.engine = engine;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.max_speed} на голину`);
//         }
//         this.info = function () {
//             for (const carElement in this) {
//                 console.log(carElement, this[carElement]);
//             }
//         };
//         this.increaseMaxSpeed = function (increaseMaxSpeed) {
//             console.log(increaseMaxSpeed = max_speed + increaseMaxSpeed);
//         }
//         this.changeYear = function (new_year) {
//             if (new_year > year || new_year < year) {
//                 console.log(new_year);
//             } else {
//                 console.log(year);
//             }
//         }
//         this.addDriver= function (driver) {
//             console.log(driver);
//         }
//     }
// }

// let bmw = new Car('BMW', 'Germany', 2025, 273, 2)
// bmw.drive()
// bmw.info()
// bmw.increaseMaxSpeed(5)
// bmw.changeYear(2034)
// bmw.addDriver('anton')
//
//
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Popeliushka {
//     constructor(name,age,size_leg) {
//         this.name = name;
//         this.age = age;
//         this.size_leg = size_leg;
//     }
// }
// let popeliushka=[];
// popeliushka.push(new Popeliushka('ania',21,38));
// popeliushka.push(new Popeliushka('katia',19,38));
// popeliushka.push(new Popeliushka('lila',17,39));
// popeliushka.push(new Popeliushka('vika',23,39));
// popeliushka.push(new Popeliushka('sonia',22,36));
// popeliushka.push(new Popeliushka('tania',21,36));
// popeliushka.push(new Popeliushka('solomia',23,35));
// popeliushka.push(new Popeliushka('masha',21,39));
// popeliushka.push(new Popeliushka('andzela',22,37));
// popeliushka.push(new Popeliushka('polina',20,38));
// console.log(popeliushka);
// class Prince {
//     constructor(name,age,size_foot) {
//         this.name = name;
//         this.age = age;
//         this.size_foot = size_foot;
//     }
// }
// let prince = new Prince('anton',27,35);
//
// function f(popelusha) {
//     for (const popeliushkaElement of popelusha) {
//         if (popeliushkaElement.size_leg === prince.size_foot){
//             return popeliushkaElement
//         }
//     }
// }
// let xxx = f(popeliushka)
// console.log(xxx)

//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
// сам не зміг зробити пробую зрозуміти відео
