
const timer = (timerSelector, deadline)=>{

    function getTimeRemainig(endtime){

        let t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((t / 1000 / 60 / 60 / 24)),
            hours = Math.floor((t / 1000 / 60 / 60) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000 % 60));

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes':minutes,
                'seconds':seconds
            }

    };

    

    function setClock(timerSelector, deadline){

        let timerId = document.querySelector(timerSelector),
            days = timerId.querySelector('#days'),
            hours = timerId.querySelector('#hours'),
            minutes = timerId.querySelector('#minutes'),
            seconds = timerId.querySelector('#seconds');


        

        function updateClock(){
         let  t = getTimeRemainig(deadline);
         days.textContent = addZero(t.days);
         hours.textContent = addZero(t.hours);
         minutes.textContent = addZero(t.minutes);
         seconds.textContent = addZero(t.seconds);
        };

        setInterval(updateClock, 1000);

    };

    function addZero(num){

        if(num < 9){

            return '0' + num;

        } else {

            return num;
        }



    };

    setClock(timerSelector, deadline);

   



};

export default timer;