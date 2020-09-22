const weather = document.querySelector(".js-weather")
const API_KEY ="060e4f965453db8fcf7c75d5833ab636"
// https://openweathermap.org/ 의 API(다른 서버에서 쉽게 데이터를 가져오는 수단)
const COORDS = `coords`;

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        //  & 앞 부분은 lat, lng에 따른 날씨 데이터를 가져오는 API, & 뒷 부분 'units=metric'은 API를 제공하는 곳에서 날씨 단위를 Celsius로 변경
        // fetch를 이용해서 새로고침 하지 않아도 네트워크를 통해 데이터를 가져올 수 있음
        ).then(function(response){
            return response.json()  // fetch 작업이 왘료되면 response 값을 반환
        }).then(function(json){   // json이 준비(반환)가 끝나면 consol.log 실행  / 여기서 jasn은 가져온 날씨정보의 Object를 의미 ex) base, temp, humidity 등
            console.log(json)
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${place}, ${temperature}°C`;
        });
        
        // fetch 실행되고 데이터가 넘어오지 않은 상태에서 다음작업을 지시할 경우, fetch가 완료되지 않을 수 있기 때문에 완료까지 기다려주기 위해 then 함수 사용  

    }
function saveCoords(coordsOBj){
    localStorage.setItem(COORDS, JSON.stringify(coordsOBj))
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsOBj = {
        latitude: latitude,
        longitude: longitude,
    }
    saveCoords(coordsOBj);
    getWeather(latitude, longitude)
}


function handleGeoError(){
    console.log('cant accsess geo location')
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
        const loadedCoords = localStorage.getItem(COORDS);
        if(loadedCoords === null){
            askForCoords();
        } else {
        const parsedCoords = JSON.parse(loadedCoords);   // 이미 위취정보가 있는 경우 askForCoords 함수가 실행되지 않기 때문에 다음 조건을 부여, 데이터를 string으로 변환
        getWeather(parsedCoords.latitude, parsedCoords.longitude)
    }
    
}
        


function init() {
    loadCoords(); 
}

init();