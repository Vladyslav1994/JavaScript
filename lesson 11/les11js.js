// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(cartsPbj => {
//         const {carts} = cartsPbj
//         console.log(carts)
//         for (const cart of carts) {
//             let div_main = document.createElement("div")
//
//             div_main.innerText = `${cart.id} - ${cart.total} - ${cart.discountedTotal} - ${cart.userId}`
//
//             for (let item of cart.products) {
//                 let div_sec = document.createElement('div')
//                 let img_sec = document.createElement('img')
//
//                 div_sec.innerText = `${item.discountPercentage} - ${item.discountedTotal} - ${item.id} - ${item.price} - ${item.quantity} - ${item.title} `
//                 img_sec.src = `${item.thumbnail}`
//
//                 div_main.append(div_sec, img_sec)
//             }
//
//             document.body.append(div_main)
//         }
//     });

// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

    fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then(recipeObj => {
            // console.log(recipeObj);
            let {recipes} = recipeObj
            console.log(recipes)
            let div_main = document.createElement("div")
            for (let recipe of recipes) {
                let h4_main = document.createElement("h4")
                let img_main = document.createElement("img")

                for (const recipeKey in recipe) {
                    console.log(recipeKey, recipe)
                    let div_sec = document.createElement("div")

                    div_sec.innerText = `${recipeKey} - ${recipe[recipeKey]}`

                    div_main.appendChild(div_sec)

                    // ingredients, instructions, tags
                }

                h4_main.innerText = `id ${recipe.id} - name ${recipe.name}`
                img_main.src = `${recipe.image}`

                div_main.append(h4_main, img_main)
            }



            document.body.appendChild(div_main)
        })