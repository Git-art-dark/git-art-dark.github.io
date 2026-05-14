
const dataOperators = new Map([
    ["al", "OOO Такском ЭДО / 1С-ЭДО"], 
    ["ae", "АО «Калуга-Астрал» / 1С-ЭДО"],
    ["be", "ООО «Компания «Тензор» СБИС ЭДО Saby"],
    ["bm", "АО «ПФ «СКБ Контур» Диадок"],
    ["ps", "OOO «ПС СТ» («ПЕТЕР-СЕРВИС Спецтехнологии») (OFD.ru) ЭДО. Поток"],
    ["ld", "Атол ЭДО. «ЭЛЕКТРОННЫЕ КОММУНИКАЦИИ» (Docrobot)"],
    ["vo", " OOO «Эвотор ОФД»"],
    ["lt", "ООО «Оператор-ЦРПТ» ЭДО Лайт"],
    ["bk", "ООО «КОРУС Консалтинг СНГ», «СбреКорус» (Сферакурьер)"],
    ["jd", "АО «НИИАС»"],
    ["ah", "ОАО «ИнфоТеКС Интернет Траст»"],
    ["ad", "OOO «Русь - Телеком» 2LB - ООО «ЭТП ГПБ»"],
    ["ba", "АО «НТЦ СТЭК» 2HX - OOO «Криптэкс»"],
    ["ak", "ЗАО «ТаксНет»"],
    ["lj", "OOO «Финтендер - крипто»"],
    ["lh", "ООО «ФораПром» (LERADATA)"],
    ["ci", "OOO «Электронный экспресс» (Гарант) 2LG - OOO «Бифит ЭДО»"],
    ["bv", "ООО «МО ПНИЭИ-Краскрипт»"],
    ["jm", "ООО «Сислинк»"],
    ["ij", "ООО «Эдисофт»"],
])


// lable

const lableOperator = document.getElementById("h2-operator")
const lableOperatorId = document.getElementById("h3-operator")

// input
const inp = document.getElementById("inp-1");

// button 
const btn1 = document.getElementById("btn-1")
const btn2 = document.querySelector("#btn-2")

// div
const divContainerOperator = document.querySelector(".container-operator")

inp.addEventListener("keydown", (event) => {
    
    if (event.key === 'Enter') {
        inp["focus"] = false
        event.preventDefault();
        btn1.click();
    }
})

btn1.addEventListener("click", () => {
    

    const fullOperatorId = inp.value;
    var operatorId = "";


    if (fullOperatorId.length >= 3) {
        operatorId = fullOperatorId.slice(1, 3).toLowerCase();
    } else {
        operatorId = fullOperatorId.toLowerCase()
    }

    
    if (dataOperators.has(operatorId)) {
        inp["value"] = "";
        divContainerOperator.className = "container-operator-show";
        searchOperators(operatorId, fullOperatorId);
    } else if (!dataOperators.has(operatorId)) {
        inp["value"] = ""
        divContainerOperator.className = "container-operator-show";
        lableOperatorId.textContent = "";
        lableOperator.textContent = "Введите корректный идентификатор!";
    } else {
        console.log('error')
    }
    
})

btn2.addEventListener("click", () => {
    divContainerOperator.className = "container-operator"
})

const searchOperators = (operatorId, fullOperatorId) => {
    dataOperators.forEach(function(value, key, map){
        if (operatorId == key) {
            lableOperator.textContent = "Оператор: " + value;
            lableOperatorId.textContent = "Введеный идентификатор: " + fullOperatorId;
        }
    
})
}