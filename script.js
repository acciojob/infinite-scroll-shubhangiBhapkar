const list = document.getElementById("infi-list");
const count = list.children.length+1;
list.addEventListener("scroll", () => {

    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {

        for (let i = 0; i < 2; i++) {
            const ele = document.createElement("li");
            ele.textContent = `item${count++}`;
            list.appendChild(ele);
        }

    }

});