const boxes = document.querySelectorAll('.box');

for(let i=0; i<boxes.length; i++){
    if (i%2 == 0){
        boxes[i].dataset.aos = "fade-right";
    }else
        boxes[i].dataset.aos = "fade-left";
}