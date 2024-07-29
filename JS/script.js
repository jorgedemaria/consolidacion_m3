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