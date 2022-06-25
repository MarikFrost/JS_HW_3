import enterprises from './module_task3.mjs'
/*
9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

Пример:
moveEmployees(2, 3)
*/

const fromDepartment = 8
const inDepartment = 10
let result
let valueEmploees = 0

//Решил разделить решение на две функции: 
function moveEmployees (from, to) {
    fromFunction(from)
    inFunction(to)
    return result
}

//fromFunction удаляет сотрудников и проверяет есть ли в отделе сотрудники для перевода в другой
function fromFunction (from) {
    enterprises.forEach(element => {
        element.departments.forEach(el => {
            if(el.id === from && el.employees_count === 0) {
                result = `В отделе ${el.name} нет сотрудников для перевода`
            }
    
            if(el.id === from && el.employees_count > 0){
                valueEmploees = el.employees_count
                el.employees_count = 0
                result = `Сотрудники переведены из ${el.name} в `
            }
        })
    })
} 

//inFunction добавляем сотрудников в отдел
function inFunction(to) {
    enterprises.forEach(element => {
        element.departments.forEach(el => {
            if(el.id === to && valueEmploees > 0) {
                el.employees_count = el.employees_count + valueEmploees
                result = result + el.name
            }
        })
    })
} 

const resultFunction = moveEmployees(fromDepartment, inDepartment)
console.log(result)