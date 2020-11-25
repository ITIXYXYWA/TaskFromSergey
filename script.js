    document.body.onload = function () {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '', true);

        xhr.onload = function () {
            let settingFromController = JSON.stringify(xhr.response);
            let k;
            for (k in settingFromController) {
            }
        }
        xhr.send();
    }

    let timeWork = 1234312312; // время работы 
    let turn = 3; // включение/выключение ПК

    let speed = 13414; // скорость vom
    let timeClose  = 1242144; // время закрытия проектора
    let timeOpen = 3254235235; // время открытия проектора

    let mcrStep = 3143; // шаг микрофона 
    let mcrMin = 14124; // мин. значение микро
    let mcrMax = 250; //если неккоректно высставить мин значение(если пришло неверные значения от контроллерра то на мин поставить)

    let volumeStep = 12412; // шаг звука
    let volumeMin = 6541; // минимальная громкость 
    let volumeMax = 823823; // макс громкость 

    let settingObj = {};  // объект с данными

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
        check(volumeStep, 'volumeStep');
        check(volumeMin, 'volumeMin');
        check(volumeMax, 'volumeMax');

        console.log(settingObj);

        // let xhr = new XMLHttpRequest();

        // xhr.open('POST', '', true);

        // xhr.send(settingObj);
    }



