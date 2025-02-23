// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let divele = document.createElement("div")
// divele.classList.add("wrap", "collapse", "alpha", "beta")
// divele.innerText = 'hello world'
// document.body.appendChild(divele)
// let clone= divele.cloneNode(true)
// document.body.appendChild(clone)
//
//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// let array = ['Main','Products','About us','Contacts'];
//
// let uli = document.createElement('ul');
// document.body.appendChild(uli);
//
// for (const string of array) {
//     let arr = document.createElement("li")
//     arr.innerText = string
//     uli.appendChild(arr);
// }

//
// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let divka = document.createElement('div')
//     divka.innerText = `${coursesAndDurationArrayElement.title} - ${coursesAndDurationArrayElement.monthDuration}`;
//
//     document.body.appendChild(divka);
// }
//
// =========================

// #Kx1xgoKy8
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let divka = document.createElement('div');
//     let h_1 = document.createElement('h1');
//     let p_1 = document.createElement('p');
//
//     divka.classList.add('item');
//     h_1.className = 'heading';
//     p_1.className = 'description';
//
//     h_1.innerText = coursesAndDurationArrayElement.title;
//     p_1.innerText = coursesAndDurationArrayElement.monthDuration;
//
//     document.body.appendChild(divka);
//     divka.append(h_1, p_1);
// }
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// ==========================