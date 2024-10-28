function loadMenu(){
    const content = document.querySelector("#content");

    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");

    content.appendChild(menuContent);

    for(let i = 0; i < 3; i++){
        const menuLeft = document.createElement("div");
        menuLeft.classList.add("menu-left");
        menuLeft.textContent = "Picture here boom";

        const menuRight = document.createElement("div");
        menuRight.classList.add("menu-right");
        menuRight.innerHTML = `Description here boom <br> <br> <br> Price here boom` 
    
        menuContent.appendChild(menuLeft);
        menuContent.appendChild(menuRight);
    }
}

export default loadMenu;