import enterprises from './module_task3.mjs'
/*
6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

Пример:
editDepartment(7, "Новое название отдела")
*/
const idDepartment = 10
const nameDepartment = "Отдел ночнаямозговыкалупывалки"
function editDepartment(id, department) {
    let result = `Отдела с id: ${id}, не существует`
    enterprises.forEach(element => {
        element.departments.forEach(el => {
            if(el.id === id) {
                //console.log(el.name)
                let valueDepartment = el.name
                el.name = department
                result = `Название отдела с индентификатором ${id} изменено с ${valueDepartment} на ${department}`
            }
        })
    })
    return result
}
const result = editDepartment(idDepartment, nameDepartment)
console.log(result)
