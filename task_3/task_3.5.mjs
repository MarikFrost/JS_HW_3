import enterprises from './module_task3.mjs'

/*
5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

Пример:
editEnterprise(1, "Новое название предприятия")
*/
const newName = "com.fort"
const idCompany = 1

function editEnterprise(id, nameCompany) {
    enterprises.forEach(element => {
        if(element.id === id) {
            element.name = nameCompany
        }
    });

}
editEnterprise(idCompany, newName)
enterprises.forEach(el => {
    console.log(`Company id: ${el.id} his name ${el.name}`)
})