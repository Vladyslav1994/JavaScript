// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let xxx = 'hello world'
// console.log(xxx.length)

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let xxx = 'lorem ipsum'
// console.log(xxx.toLocaleUpperCase())

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let xxx = 'JAVASCRIPT IS COOL'
// console.log(xxx.toLocaleLowerCase())

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let xxx = str.replaceAll(' ','')
// console.log(xxx)
// let eee = xxx.replaceAll('y','y ')
// console.log(eee)
//
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '));
//
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let map_nums = arr.map(function(el){
//     return el.toString()
// })
// console.log(map_nums)

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// ось я так зробив але не запустилося, чому?

// let nums = [11, 21, 3]
// function sort(array,direction) {
//     for ( let arr of array ) {
//         if( direction === 'ascending') {
//             return arr.sort((a,b) => a-b)
//         }else if( direction === 'descending') {
//             return arr.sort((a,b) => b-a)
//         }
//     }
// }
// function sort(array, direction) {
//     if (direction === 'ascending') {
//         return array.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         return array.sort((a, b) => b - a)
//     }
// }
// console.log(sort(nums, 'descending'))
//
// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// function getCourses(array) {
//         return array.sort((a, b) => b.monthDuration - a.monthDuration);
// }
// let xxx = getCourses(coursesAndDurationArray);
// console.log(xxx)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// function getCourses(array) {
//     let courses = [];
//     for (const arrayElement of array) {
//         if (arrayElement.monthDuration >= 5) {
//             courses.push(arrayElement);
//         }
//     }
//     return courses;
// }
// let xxx = getCourses(coursesAndDurationArray);
// console.log(xxx)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let mapCourses = coursesAndDurationArray.map(function (value, index) {
//     return {...value, id: index + 1}
// })
// console.log(mapCourses);


// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в яких в modules є sass
// let sas = coursesArray.filter(function(value){
//     return value.modules.includes('sass')
// })
// console.log(sas)

// --написати пошук всіх об'єктів, в яких в modules є docker
// let moduls = coursesArray.filter(function (value){
//     return value.modules.includes('docker')
// })
// console.log(moduls)
