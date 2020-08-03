const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
//<4> 입력된 값을 string으로 바꾸어 localstorae에 저장 

let toDos = [];


function deleteToDo(event) {
    const btn = event.target; //버튼을 클릭했을 때, 그 버튼이 어떤 버튼인지 알 수 있도록 지정/
    const li = btn.parentNode;  // 선택한 버튼의 부모노드인 li 지정
    toDoList.removeChild(li);     //toDoList (ul)에 속해있는 li 제거
    const cleanToDos = toDos.filter(function(toDo){  
        return toDo.id !== parseInt(li.id);  // toDo.id 는 숫자, delli.id는 string 이므로 작동이 안됨, 따라서 parseInt를 이용하여 delli.id를 숫자로 변환
    });  // toDo.id 는 클릭한 버튼의 id를 의미한다, 즉 선택한 버튼외의 다른 id를 가진 아이템만 출력됨(선택한 아이템이 사라짐)
    toDos = cleanToDos;
    saveToDos();
    // filter 함수는 toDos (array)의 모든 아이템을 통해 함수를 실행하여 조건상 ture인 새로운 array를 생성
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));   //javascript는 local storage에 있는 모든 데이터를 string으로 저장하려고 함 따라서. JSON.stringify 사용(javascript object를 string으로 바꿔줌)
}

//<3> 리스트, 버튼, 스판 등을 만들고 'toDos'라는 array에 입력된 값을 추가하고 saveToDos 함수 실행
function paintToDo(text){
    const li = document.createElement("li"); 
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; 
    delBtn.innerText = "✔️";
    delBtn.addEventListener("click", deleteToDo) // delBtn 을 클릭하면 deleteToDo 함수 실행 (제거)
    span.innerText= text;  // span 안에 입력한 text 출력
    li.appendChild(span);  //<li> </li> 사이에 <span> </span> 을 넣는다는 의미
    li.appendChild(delBtn);
    li.id = newId
    toDoList.appendChild(li);  // toDoList(ur) 자식으로 <li> </li> 포함
    const toDoObj = {
        text: text,
        id: newId
    };   //text라는 key에 text라는 value, id라는 key에는 newID value
    toDos.push(toDoObj);
    saveToDos();
}
//<2> 이벤트 발생 시, 새로고침 방지, paintToDo 함수 실행
function handlesubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;  //Input에 들어가는 값
    paintToDo(currentValue);
    toDoInput.value="";  
}
//<5> localstorage에 저장된 값을 불러와서 조건문 실행
function loadToDos(){ 
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);   //JSON = Javascript Object Notation / parse -> string을 다시 object로 변환 
        parsedToDos.forEach(function(todo){        // forEach -> array 안에 있는 것들 각각에 함수를 실행시킴(array를 위해 사용)
          paintToDo(todo.text)   // "todos" 화면상에 출력
        });                                    
    } 
}
//<1> 저장된 자료를 불러오고 'submit' 이벤트 발생 시 handlesubnmit 함수 실행
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handlesubmit)
}

init()