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

// div
const divContainerOperator = document.querySelector(".container")

var list1 = [...dataOperators.keys()]
var list2 = [...dataOperators.values()]

const ul1 = document.createElement('ul');
const fragment = document.createDocumentFragment();

list1.forEach((key, index) => {
    const li = document.createElement("li");
    li.textContent = `${String(key).toUpperCase()} - ${String(list2[index]).toUpperCase()}`;
    fragment.appendChild(li);
});

ul1.appendChild(fragment);
divContainerOperator.appendChild(ul1);