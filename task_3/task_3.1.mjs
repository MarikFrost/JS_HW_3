import enterprises from './module_task3.mjs'
  
  /*Задания:
  1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. 
  Для предприятия посчитать сумму всех сотрудников во всех отделах.
  */
 const printDepartmens = (arrayDep) => arrayDep.forEach(el => {
    if(el.employees_count === 0) {
        console.log(`   - ${el.name} (нет сотрудников)`)
    } else{
        console.log(`   - ${el.name} (${el.employees_count} сотрудников)`)  
    }
 })

const printEmployees = function (element1) {
    let countEmployees = 0
    element1.forEach(el => countEmployees += el.employees_count)
    if(countEmployees > 0) {
        return countEmployees
    } else {
        return "Нет"
    }
}

const print = (array) => array.forEach(element=> {
    console.log(`${element.name} (${printEmployees(element.departments)} сотрудников)`)
    printDepartmens(element.departments)
})
print(enterprises)

  /***Пример:**
  Предприятие 1 (45 сотрудников)
  - Отдел тестирования (10 сотрудников)
  - Отдел маркетинга (20 сотрудников)
  - Администрация (15 человек)
  Предприятие 2 (75 сотрудников)
  - Отдел разработки (50 сотрудников)
  - Отдел маркетинга (20 сотрудников)
  - Отдел охраны труда (5 сотрудников)
  Предприятие 3 (нет сотрудников)
  - Отдел аналитики (нет сотрудников)
  */
 