const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("Click", function(){
	menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelector(".submenu-btn");
for(let i=0; i < subMenuBtn.length; i++){
	subMenuBtn[i].addEventListener("Click", function(){
		if (window.innerWidth < 1024) {
			const subMenu = this.nextElementSibling;
			const height = subMenu.scrolHeight;

			if (subMenu.classList.constains("desplegar")){
				subMenu.classList.remove("desplegar");
				subMenu.removeAttribute("style");
			} else {
				subMenu.classList.add("desplegar")
				subMenu.style.height = height + "px";
			}
		}
	});
}