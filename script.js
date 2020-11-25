    let timeWork = document.getElementById('timeWork'); // время работы 
    
    let turn = document.getElementById('turn'); // включение/выключение проектора

    let speed = document.getElementById('speed'); // скорость vom
    let timeOpen = document.getElementById('timeOpen'); // время открытия экрана
    let timeClose  = document.getElementById('timeClose'); // время закрытия экрана
    

    let mcrStep = document.getElementById('mcrStep'); // шаг микрофона 
    let mcrMax = document.getElementById('mcrMax'); //если неккоректно высставить мин значение(если пришло неверные значения от контроллерра то на мин поставить)
    let mcrMin = document.getElementById('mcrMin'); // мин. значение микро

    let volStep = document.getElementById('volStep'); // шаг звука
    let volMin = document.getElementById('volMin'); // минимальная громкость 
    let volMax = document.getElementById('volMax'); // макс громкость 

    let settingObj = {};  // объект с данными

    document.body.onload = function () {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '', true);

        xhr.onload = function () {
            let SFT = JSON.parse(xhr.response);
            
        }
        xhr.send();
    }

    function check (x,y) {
        if(typeof(x) === 'number'){ 
            settingObj[y] = x;
        }        
        else {
            alert("Ошибка в поле ввода!")
        }
    }

    function Sending () {
        check(timeWork,'timeWork');
        check(speed, 'speed');
        check(turn, 'turn');     
        check(timeClose, 'timeClose');
        check(timeOpen, 'timeOpen');
        check(mcrStep,'mcrStep');
        check(mcrMin, 'mcrMin');
        check(mcrMax, 'mcrMax');
        check(volStep, 'volumeStep');
        check(volMin, 'volumeMin');
        check(volMax, 'volumeMax');

        console.log(settingObj);

        let xhr = new XMLHttpRequest();

        xhr.open('POST', '', true);

        xhr.send(JSON.stringify(settingObj));
    }



