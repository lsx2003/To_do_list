const backgrond = document.querySelector('html');
 
const IMG_Number = 36;  // 이미지수 변경 가능

 
function paintImage(imgNumber){
    const image = new Image();  //?
    image.src = `image/${imgNumber + 1}.png`; // random 값이 0일경우를 대비해 +1 
    image.classList.add("bgimage");
    backgrond.prepend(image);
}

function genRandom(){   //math.floor -> 나머지는 버리고 정수로 출력, math.ceil -> 나머지 올림
    const number = Math.floor(Math.random() * IMG_Number)
    return number; 
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();