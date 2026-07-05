const list = document.getElementById("infi-list");

list.addEventListener("scroll", () => {

    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {

        for (let i = 0; i < 2; i++) {
            const ele = document.createElement("li");
            ele.textContent = "New Item";
            list.appendChild(ele);
        }

    }

});