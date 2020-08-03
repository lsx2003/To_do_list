const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");


const User_LS = "currentUser"
    SHOWIUNG_CN = "showing"
//<5> input에 들어간 값을 localstorage에 저장(setItem)
function saveName(text){
    localStorage.setItem(User_LS, text);
}

//<3>
function handlesubmit(event){
    event.preventDefault();
    // 제출 시 새로고침 제거
    const currentValue = input.value; // input에 들어간 값
    console.log(currentValue); 
    paintiGreeting(currentValue);  // paintGreeting 함수 실행
    saveName(currentValue);  // 이름 저장
}
//<2>
    function askForName(){
    form.classList.add(SHOWIUNG_CN);    //.showing = "block";   즉, currentUser가 비어있으므로 What's your name?(block) 표출
    form.addEventListener("submit", handlesubmit) // 제출시 handlesubmit 실행
}
//<4>
function paintiGreeting(text){
    form.classList.remove(SHOWIUNG_CN);   // <2>에서 추가했던 class(showing) 제거하여 화면에 미표출  
    greeting.classList.add(SHOWIUNG_CN);  // greeting('Hello + "currentUser"') 표출하도록 class 추가 
    greeting.innerText = `Hello!! ${text}`;
}
//<1> loadname 함수 실행 -> 조건문, currentUser가 비어있으면 askforName 함수 실행, 아닐경우 paintGreeting 함수 실행
function loadname(){
    const currentUser = localStorage.getItem(User_LS);
    if(currentUser === null){
        askForName();
       // she is not
    } else {
        paintiGreeting(currentUser);
       // she is 
    }

}

function init(){
        loadname();
}

init()