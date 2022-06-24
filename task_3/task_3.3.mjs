import enterprises from './module_task3.mjs'

/*
3. Написать функцию, которая будет добавлять предприятие. 
В качестве аргумента принимает название предприятия

Пример:
addEnterprise("Название нового предприятия")
*/
const company = "comfort"

function addCompany (company) {
    enterprises.push({id : 12, name : company, departments : 
                [{id : 13, name : "Отдел ночной мозговыкалупывалки", employees_count : 1}]})
}
addCompany(company)

enterprises.forEach(el => {
    console.log(el)
})

/*
Это если не углябляться, чтобы id ставился автоматически. 
Так как думаю, такой счетчик нужно ставить с самого первого добавления
*/