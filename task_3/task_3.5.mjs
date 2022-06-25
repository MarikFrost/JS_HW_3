import enterprises from './module_task3.mjs'

/*
5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

Пример:
editEnterprise(1, "Новое название предприятия")
*/
const newName = "com.fort"
const idCompany = 5

function editEnterprise(id, nameCompany) {
    let result = `Компании с id: ${id}, не существует`
    enterprises.forEach(element => {
        if(element.id === id) {
            let valueCompany = element.name
            element.name = nameCompany
            result = `Название компании с индентификатором ${id} изменено с ${valueCompany} на ${nameCompany}`
        }
    });
return result
}
const result = editEnterprise(idCompany, newName)
console.log(result)
