//Текст отображающий процесс загрузки
const loadText = document.querySelector('.loading-text');
//Задний фон что будет блюрится
const bg = document.querySelector('.bg');

//Текущий статус загрузки страницы
let load = 0;

//Запускаем таймер с изменением шага раз в 30 миллисекунд вплоть до 100%
let int = setInterval(blurring, 30);

//Функция что меняет шаг загрузки и текущий blur картинки
function blurring() {

    load++

    if (load > 99) {
        clearInterval(int);
    }

    loadText.innerText = `${load} %`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

//Функция для пересчета
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

