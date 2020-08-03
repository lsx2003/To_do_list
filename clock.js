const clockContaiiner = document.querySelector(".js-clock");

const clockTitle = clockContaiiner.querySelector("h1");

function gettime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = 
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;       
         
    // ternary operrator(삼항연산자) <'?'는 if처럼 작용> seconds가 10 보다 '작을경우 0 + seconds' 아닐경우, 'seconds' //
}

function init() {
    gettime();
    setInterval(gettime, 1000); // setinerval(작동하려는 함수, 시간. 1000이 1초)//
}

init();