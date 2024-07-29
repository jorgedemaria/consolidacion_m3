document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".chat-list__item");
    const chatRight = document.querySelector(".chat-right");


    items.forEach(item => {
        const itemName = item.querySelector(".chat-list__name h5").textContent;

        item.addEventListener("click", () => {
            if (itemName === "Emma") {
                chatRight.style.display = 'flex'; 
            } else {
                chatRight.style.display = 'none';
            }
            if (!item.classList.contains("clicked")) {
                item.classList.add("clicked");
            }
        });
    });

});
