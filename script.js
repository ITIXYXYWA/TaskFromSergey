//MOBILE SCRIPT
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');
let page4 = document.getElementById('page4');
let page5 = document.getElementById('page5');
let page6 = document.getElementById('page6');
let page7 = document.getElementById('page7');
function showPage(x){
let page = [
page1, page2, page3,page4, page5,page6,page7
]
for(let i = 0; i<page.length; i++){
page[i].style.display = 'none';
page[i].classList.remove('show');
}
x.style.display = 'block'
}
// ==================================================================

const ip = 'http://localhost:8000'
let timeWork = document.getElementById('timeWork'); // время работы
let turn = document.getElementById('turn'); // включение/выключение проектора
let speed = document.getElementById('speed'); // скорость vom
let timeOpen = document.getElementById('timeOpen'); // время открытия экрана
let timeClose = document.getElementById('timeClose'); // время закрытия экрана
let mcrStep = document.getElementById('mcrStep'); // шаг микрофона
let mcrMax = document.getElementById('mcrMax'); //если неккоректно высставить мин значение(если пришло неверные значения от контроллерра то на мин поставить)
let mcrMin = document.getElementById('mcrMin'); // мин. значение микро
let volStep = document.getElementById('volStep'); // шаг звука
let volMin = document.getElementById('volMin'); // минимальная громкость
let volMax = document.getElementById('volMax'); // макс громкость

let settingObj = {}; // объект с данными
window.onload = function () {
getJson();
}
function getJson() {
let xhr = new XMLHttpRequest();
xhr.open('POST', ip, true);

xhr.onload = function () {
let str = JSON.parse(xhr.response);
//заполнение инпутов
timeWork.value = str.timeWork;
turn.value = str.turn;
speed.value = str.speed;
timeOpen.value = str.timeOpen;
timeClose.value = str.timeClose;
mcrStep.value = str.mcrStep;
mcrMax.value = str.mcrMax;
mcrMin.value = str.mcrMin;
volStep.value = str.volStep;
volMax.value = str.volMax;
volMin.value = str.volMin;
}
xhr.send();
}

function check(x,y) {
if(typeof(parseInt(x)) === 'number' && y !== 'turn'){
settingObj[y] = x;
}
else if(y == 'turn'){
settingObj[y] = x;
}else if(x === ''){
settingObj[y] = x;
}else{
alert('error');
}
}

function Sending () {
//проверка
check(timeWork.value,'timeWork');
check(speed.value, 'speed');
check(turn.value, 'turn');
check(timeClose.value, 'timeClose');
check(timeOpen.value, 'timeOpen');
check(mcrStep.value,'mcrStep');
check(mcrMin.value, 'mcrMin');
check(mcrMax.value, 'mcrMax');
check(volStep.value, 'volumeStep');
check(volMin.value, 'volumeMin');
check(volMax.value, 'volumeMax');
//отправка
let xhr = new XMLHttpRequest();
xhr.open('POST', ip, true);
xhr.send(JSON.stringify(settingObj));
//обновление инпутов
getJson();
}

(function () {
    document.querySelector('#content').addEventListener('click', function (e) {
        var id = e.target.id;
        switch (id) {
            case 'btn1':
                alert(id);
                break;
            case 'btn2':
                alert(id);
                break;
            case 'btn3':
                alert(id);
                break;
            case 'btn4':
                alert(id);
                break;
            case 'btn5':
                alert(id );
                break;
            case 'btn6':
                alert(id);
              break;
            case 'btn7':
                alert(id);
                break;
            case 'btn8':
                alert(id);
                break;
        }
                
    })
})