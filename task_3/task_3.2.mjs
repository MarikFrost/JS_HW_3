import enterprises from './module_task3.mjs'
/*
2. Написать функцию, которая будет принимать 1 аргумент 
(id отдела или название отдела и возвращать название предприятия, к которому относится).

Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2
*/

let company = "Отдел маркетинга"
function arrayCompanyId(array, company) {
    let nameCompany = "Компании с таким id отдела не существует"
    array.forEach(element => {   
        element.departments.forEach(el => {
            if(el.id === company) {
                nameCompany = element.name
            }
            if(el.name === company) {
                nameCompany = element.name
            }
        })        
    })
    return nameCompany
}

function getEnterpriseName (company) {
    console.log(arrayCompanyId(enterprises, company))   
}
getEnterpriseName(company)
