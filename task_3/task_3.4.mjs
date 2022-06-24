import enterprises from './module_task3.mjs'
/*
4. Написать функцию, которая будет добавлять отдел в предприятие. 
В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

Пример:
addDepartment(1, "Название нового отдела")
*/
const companyId = 9
const departmentName = "Ночная мозговыколупывалка"
function addDepartment (id, department) {
    enterprises.forEach(el => {
        if (el.id == id) {
            el.departments.push({
                id : 11,
                name : department,
                employees_count : 15
            })
        }
    })
}
addDepartment(companyId, departmentName)
enterprises.forEach(el => {
    console.log(el)
})