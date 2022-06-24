/*Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, 
например, модуля fs. для дальнейшего использования в функции, описанной в задании*/
import arrayUsers from './module_for_task2.mjs'
const resultArray = []


const myFunction = (users) => users.forEach((el, index) => {
        let count

        resultArray.forEach(element => {
            if(el.username === element.username) {
                count = false
            }
        })
        if(count !== false) {
            resultArray.push(el)
        }
    });

myFunction(arrayUsers)
console.log(resultArray)

//Запуск в терминале: node task_2_hard.mjs