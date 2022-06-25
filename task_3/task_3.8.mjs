import enterprises from './module_task3.mjs'
/*
8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

Пример:
deleteDepartment(3)
*/
const delDepartment = 10

function deleteDepartment(id) {
    let result = `Отдела с id: ${id} не существует`
    enterprises.forEach(element => {
        element.departments.forEach(el => {
            if(el.id === id && el.employees_count > 0) {
                result = `Невозможно удалить ${el.name} из компании ${element.name} так как в нем есть ${el.employees_count} сотрудников`
            }
            if(el.id === id && el.employees_count === 0) {
                result = `Удален ${el.name} из компании ${element.name}`
                delete element.departments
            }
        })
    })
    return result
}
const result = deleteDepartment(delDepartment)
console.log(result)