/*function sayhello(name, age){
  console.log('hello!', name, "you are", age, "years of age");
}

sayhello("Seulgi", 30);*/

// 사칙연산(함수) //
/*
const calculator = {
plus: function(a, b){
  return a + b;
},

minus: function(a, b){
  return a - b;
},

multi: function(a, b){
  return a * b;
},

div: function(a, b){
  return a / b;
}
}

const plus = calculator.plus(5, 5) 
const minus = calculator.minus(5, 5)
const multi = calculator.multi(5, 5)
const div = calculator.div(5, 5)

console.log(plus, minus, multi, div)
*/

/*
const title = document.getElementById("title")

title.innerHTML = "Hi from Js";
*/
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className;
     if(currentClass !== CLICKED_CLASS){
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }
}
function init() { 
  title.addEventListener("click", handleClick);
}
init();