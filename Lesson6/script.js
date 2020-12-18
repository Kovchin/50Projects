const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

//Стартовая инициализация (до скрола)
checkBoxes();

//Функция реализующая скролл блоков
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box =>{
        //Верх отбражения текущего элемента
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }

    })
}


