import enterprises from './module_task3.mjs'
/*
7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

Пример:
deleteEnterprise(1)
*/
const delCompany = 1

function deleteEnterprise(id) {
    let result = `Компании с id: ${id} несуществует`
    enterprises.forEach((element, index) => {
        if(element.id === id) {
            delete enterprises[index]
            result = `Компания ${element.name} удалена`
        }
    })
    return result
}   
const result = deleteEnterprise(delCompany)
console.log(result)