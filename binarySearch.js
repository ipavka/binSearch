let num_min = [1];
let num_max = [500];
let userTry = 1;
let variant = Math.floor((num_min[num_min.length - 1] + num_max[num_max.length - 1]) / 2)
let userVariant = document.querySelector('.userVar').innerHTML =
    `Мой вариант: <h3>${variant}</h3>Твоё число Больше или Меньше? <br>
        Попытка номер: ${userTry}`


function seyHello(obj) {
        userTry ++;
        if (userTry === 9) {
                document.querySelector('body').innerHTML =
                    `Я угалал! Твоё число <br> <h3>${variant}</h3><h3>Попытки закончились!!!</h3>
                       <button onclick="location.reload()">Начать заново?</button> `

        } else {
                function newVar(inVar) {
                        inVar = Math.floor((num_min[num_min.length - 1] + num_max[num_max.length - 1]) / 2)
                        document.querySelector('.userVar').innerHTML =
                            `Мой вариант: <h3>${inVar}</h3>Твоё число Больше или Меньше? <br>
                                Попытка номер: ${userTry}`
                }

                let userAnswer = obj.id
                if (userAnswer === 'buttMax') {
                        num_min.push(variant)
                        variant = Math.floor((num_min[num_min.length - 1] + num_max[num_max.length - 1]) / 2)
                        newVar(variant)

                } else if (userAnswer === 'buttMin') {
                        num_max.push(variant)
                        variant = Math.floor((num_min[num_min.length - 1] + num_max[num_max.length - 1]) / 2)
                        newVar(variant)
                } else {
                        document.querySelector('body').innerHTML =
                            `<h3>Я угалал! Твоё число</h3> <h3>${variant}</h3>
                       <button onclick="location.reload()">Начать заново?</button> `
                }
        }
}






