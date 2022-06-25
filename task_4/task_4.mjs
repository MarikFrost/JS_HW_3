import company from './module_task_4.mjs'

/* 
Написать функцию: 

Функция строит древовидный список компании.
При ее вызове в консоль должен выветить список подразделений компании с указанием количества сотрудников
и с соблюдение вложенности подразделений.

Пример:

Компания (10)
-- Отдел тестирования (7)
---- Тестирование Web (5)
---- Тестирование Mobile (0)
-- Отдел маркетинга (30)
-- Администрация (25)
---- Бухгалтерия (10)
---- Менеджмент (15)
------ Подраздел менеджмента 1 (5)
------ Подраздел менеджмента 2 (10)
---- HR (1)
*/ 
let result = ""
let symbol = ""
function obj (element) {
    element.forEach(el => {
        result = result + el.name + "\n"
        function childrenFunc (el, symbol) {    
            symbol = symbol + "--"
            el.forEach(el =>{
                result = result + symbol + el.name + "\n"
                if(typeof el.children === 'object') {
                    childrenFunc(el.children, symbol)
                }
            })  
        } 
        childrenFunc(el.children, symbol)
    })
}
obj(company)
console.log(result)
/*
Это жесть, с черточками провозился очень долго, чтобы правильно расставить
*/