// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let idiszka = document.createElement('div')
// let butt = document.createElement('button')
//
// idiszka.innerText = 'hello'
// idiszka.id = 'first'
// butt.classList.add('button')
// butt.innerText = 'sent'
//
// document.body.append(idiszka,butt)
//
// butt.onclick = function (ev) {
//     ev.preventDefault()
//         if (ev) {
//             idiszka.style.display = 'none'
//         }
// }
//
//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let forms = document.createElement('form');
// let buttons = document.createElement('button');
// let inputs = document.createElement('input');
// let divka = document.createElement('div');
//
// buttons.classList.add('butt');
// inputs.classList.add('input');
// forms.id = 'idisz';
// buttons.innerHTML = 'age';
//
// document.body.append(forms,divka);
// forms.append(inputs, buttons);
//
// buttons.onclick = (e) => {
//     e.preventDefault();
//     if (inputs.value < 18){
//         divka.innerText = 'child'
//     }else if (inputs.value > 18) {
//         divka.innerText = 'adult'
//     }
// }

// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let forms = document.createElement('form')
// let input_name = document.createElement('input')
// let input_surname = document.createElement('input')
// let input_age = document.createElement('input')
// let button_element = document.createElement('button')
// let divka = document.createElement('div')
//
// input_name.setAttribute('name', 'user_name')
// input_surname.setAttribute('name', 'user_surname')
// input_age.setAttribute('name', 'user_age')
//
// button_element.innerText = 'Submit'
//
// document.body.append(forms, button_element, divka)
// forms.append(input_name, input_surname, input_age)
//
// button_element.onclick = (e) => {
//     e.preventDefault()
//     let user_name = input_name.value
//     let user_surname = input_surname.value
//     let user_age = input_age.value
//     let user = {user_name, user_surname, user_age}
//     divka.innerText = user.user_name + ' ' + user.user_surname + ' ' + user.user_age
// }


// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// let divka = document.createElement('div')
// let butt = document.createElement('button')
// let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) || 0 : 0
//
// divka.innerText = count
// butt.innerText = 'set'
//
// document.body.append(count,butt)
//
// butt.onclick = function () {
//     count++
//     localStorage.setItem('count', count)
//     location.reload()
// }

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

// передивлявся відео якзробив ментор

// let sess = JSON.parse(localStorage.getItem('sessionList'));
// for (const item of sess) {
//     let div = document.createElement("div");
//     div.innerText = item.toString();
//     document.body.appendChild(div);
// }
//
// let sessionList = []
// if (localStorage.getItem('sessionList')) {
//     sessionList = JSON.parse(localStorage.getItem('sessionList'))
// }
// sessionList.push(new Date())
// localStorage.setItem('sessionList', JSON.stringify(sessionList))

//
//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

// let forms = document.createElement('form')
// let kg = document.createElement('input')
// let button_element = document.createElement('button')
// let divka = document.createElement('div')
//
// kg.setAttribute('name', 'kg')
//
// kg.placeholder = 'kg'
//
// button_element.innerText = 'Submit'
//
// document.body.append(forms, button_element, divka)
// forms.append(kg)
//
// button_element.onclick = function (e) {
//     e.preventDefault()
//     if (kg.value) {
//         divka.innerText = kg.value * 2.442 + ' '+ 'фунтів'
//     }
// }

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//
//
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
// let form = document.createElement("form")
// let input_one = document.createElement("input")
// let input_two = document.createElement("input")
// let input_three = document.createElement("input")
// let butt = document.createElement("button")
//
// butt.innerText = "Submit"
//
// butt.onclick = (e) => {
//     e.preventDefault();
//
//     let xxx = +input_one.value
//     let ccc = +input_two.value
//     let bbb = input_three.value
//
//     for (let i = 0; i < xxx; i++) {
//         let tr = document.createElement('tr')
//         tr.innerText = xxx
//             for (let j = 0; j < ccc; j++) {
//                 let td = document.createElement('td')
//                 td.innerText = bbb
//                 tr.appendChild(td)
//             }
//             form.appendChild(tr)
//     }
// }
//
// document.body.appendChild(form)
// form.append(input_one, input_two, input_three, butt)


//
//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
