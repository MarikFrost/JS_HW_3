import enterprises from './module_task3.mjs'
/*
4. Написать функцию, которая будет добавлять отдел в предприятие. 
В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

Пример:
addDepartment(1, "Название нового отдела")
*/
const companyId = 2
const departmentName = "Ночная мозговыколупывалка"
function addDepartment (id, department) {
    let result = `Компании с id: ${id}, не существует`
    enterprises.forEach(el => {
        if (el.id == id) {
            el.departments.push({
                id : 11,
                name : department,
                employees_count : 15
            })
            result = `В компанию ${el.name} добавлен отдел ${department}`
        }
    })
    return result
}
const result = addDepartment(companyId, departmentName)
console.log(result)