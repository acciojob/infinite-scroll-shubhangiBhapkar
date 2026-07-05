//your code here!
const list = document.getElementById("infi-list");
list.addEventListener("scroll", ()=> {
	
	if(list.scrollTop + list.clientHeight >= list.scrollHeight){
		for(int i=0;i<2;i++){
			const ele = document.creatElement("li");
			ele.textContent = "item";
			list.appendChild(ele);
		}
		
	}
})
