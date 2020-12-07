const ip = 'http://localhost:8000';

//MOBILE SCRIPT
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');
let page4 = document.getElementById('page4');
let page5 = document.getElementById('page5');
let page6 = document.getElementById('page6');
let page7 = document.getElementById('page7');
let select = document.getElementById('selectValue');
class Element{constructor(name,active){this.name=name;this.active=active}}
let sel = document.getElementById('select');
let chec = true;
let arr = ['btn1','btn2','btn3','btn4','btn5','btn6','btn7','btn8'];
let arrSelect = ['On/Off PC','On/Off Projec.','Screen Up','Screen Down','Mic +','Mic -','Vol -', 'Vol +']
let arrSelect0 = [];
arrSelect.forEach((elem)=>{
  arrSelect0.push(new Element(elem,false))
})
function switcher(){
  document.addEventListener('click', function (e) {
   if (e.target.id.includes('btn') == true) {
     for(let i = 0; i< arr.length; i++){
        if(document.getElementById(arr[i]).textContent == document.getElementById(e.target.id).textContent){
          document.getElementById(arr[i]).textContent = '';
          document.getElementById(e.target.id).textContent = select.value
        }   
      }
    }
  })
}  
function showSelect(){   
  switch(chec){
    case true:    
       sel.style.display = 'block'; 
       chec = false;
     break;

    case false:    
      sel.style.display = 'none';
      chec = true;
     break;
  }
}
function checkMic() {
	if (micMin.value !== 0) {
		micStep.value = micMax.value - micMin.value;
  } 
  if (micStep.value > micMax.value && micMin.value === 0) {
		micStep.value = micMax.value;
  }
  if (micMin.value > micMax.value) {
    if(micMin.value !== 0 ){
    micMin.value = micMax.value - 1;
  }
    micStep.value = 1;
  }
  if (micStep.value < 0) {
    micStep.value = 0;
    micMin.value = micMax.value;
  }
}
function checkVol() {
	if (volMin.value !== 0) {
		volStep.value = volMax.value - volMin.value;
  } 
  if (volStep.value > volMax.value && volMin.value === 0) {
		volStep.value = volMax.value;
  }
  if (volMin.value > volMax.value) {
    if(volMin.value !== 0 ){
      volMin.value = volMax.value - 1;
  }
  volStep.value = 1;
  }
  if (volStep.value < 0) {
    volStep.value = 0;
    volMin.value = volMax.value;
  }
}
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
let timeWork = document.getElementById('timeWork'); // время работы
let turnOn = document.getElementById('turnOn'); // включение/выключение проектора
let turnOff = document.getElementById('turnOff'); // включение/выключение проектора
let speed = document.getElementById('speed'); // скорость vom
let timeOpen = document.getElementById('timeOpen'); // время открытия экрана
let timeClose  = document.getElementById('timeClose'); // время закрытия экрана
let micStep = document.getElementById('micStep'); // шаг микрофона
let micMax = document.getElementById('micMax'); //если неккоректно высставить мин значение(если пришло неверные значения от контроллерра то на мин поставить)
let micMin = document.getElementById('micMin'); // мин. значение микро
let volStep = document.getElementById('volStep'); // шаг звука
let volMin = document.getElementById('volMin'); // минимальная громкость
let volMax = document.getElementById('volMax'); // макс громкость
window.onload = function () {
  getJson();
}
function getJson() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', ip, true);
    xhr.onload = function () {
        let str = JSON.parse(xhr.response);
        timeWork.value = str.timeWork;
        turn.value = str.turn;
        speed.value = str.speed;
        timeOpen.value = str.timeOpen;
        timeClose.value = str.timeClose;
        micStep.value = str.micStep;
        micMax.value = str.micMax;
        micMin.value = str.micMin;
        volStep.value = str.volStep;
        volMax.value = str.volMax;
        volMin.value = str.volMin;
    }
    xhr.send();
}
function Sending () {
  let settingObj = {
    timeWork: timeWork.value,
    speed:  speed.value,
    turnOn:  turnOn.value,
    turnOff:  turnOff.value,
    timeClose:   timeClose.value,
    timeOpen:  timeOpen.value,
    micStep:  micStep.value,
    micMin:  micMin.value,
    micMax:  micMax.value,
    volStep: volStep.value,
    volMin: volMin.value,
    volMax: volMax.value,
    btn1: 0,
    btn2: 0,
    btn3: 0,
    btn4: 0,
    btn5: 0,
    btn6: 0,
    btn7: 0,
    btn8: 0
  }
    for (let i = 0; i < arr.length; i++) {
      if(document.getElementById(arr[i]).textContent !== ""){
      for (var key in settingObj) {
        if(key.includes('btn')){
          if(key == arr[i]){
          settingObj[key] = document.getElementById(arr[i]).textContent;
            }
          }
        }
      }
    }         
    //отправка
    let xhr = new XMLHttpRequest();
    xhr.open('POST', ip, true);
        console.log(settingObj)
    xhr.send(JSON.stringify(settingObj));
    //обновление инпутов
    getJson();
} 
