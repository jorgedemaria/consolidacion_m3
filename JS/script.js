document.addEventListener('DOMContentLoaded', function () {
    const chatEmma = document.getElementById('chat-info-emma');
    const chatRight = document.querySelector('.chat-right');
    const chatItems = document.querySelectorAll('.chat-list__item');

    function handleChatItemClick(event) {
        event.currentTarget.classList.add('clicked');

        if (event.currentTarget === chatEmma) {
            chatRight.classList.remove('d-none');
        } else {
            chatRight.classList.add('d-none');
        }
    }

    chatItems.forEach(item => {
        item.addEventListener('click', handleChatItemClick);
    });

    chatEmma.classList.add('clicked');
    chatRight.classList.remove('d-none');

    window.addEventListener('resize', function () {
        if (window.innerWidth < 992) {
            chatRight.classList.remove('d-none');
        } else {
            if (!chatEmma.classList.contains('clicked')) {
                chatRight.classList.add('d-none');
            }
        }
    });
});

const $time = document.querySelector('.time'),
      $date = document.querySelector('.date');

function Relojdigital() {
    let f = new Date(),
        day = f.getDate(),
        month = f.getMonth() + 1,
        year = f.getFullYear(),
        weekDay = f.getDay();

    day = ('0' + day).slice(-2);
    month = ('0' + month).slice(-2);

    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    };
    let timeString = f.toLocaleTimeString('es-ES', options); 
    $time.innerHTML = timeString;

    let week = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let showWeek = week[weekDay];
    $date.innerHTML = `${showWeek} ${day}.${month}.${year}`;
}

setInterval(() => {
    Relojdigital();
}, 1000);
