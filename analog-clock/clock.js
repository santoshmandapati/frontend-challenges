(
    function() {
        let secondDial = document.querySelector('.second-dial');
        let minuteDial = document.querySelector('.minute-dial');
        let hourDial = document.querySelector('.hour-dial');
        setInterval(() => {
            const date = new Date();
            const seconds = date.getSeconds() * 6;
            const minutes = date.getMinutes() * 6;
            const hours = (date.getHours() * 30) + date.getMinutes() / 2;
    
            secondDial.style.transform = `rotate(${seconds}deg)`;
            minuteDial.style.transform = `rotate(${minutes}deg)`;
            hourDial.style.transform = `rotate(${hours}deg)`;
        }, 1000);
    }
)();
