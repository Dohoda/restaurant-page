function loadPage(){
    const content = document.querySelector("#content");

    const infograph = document.createElement("div");
    infograph.classList.add("infograph");
    infograph.innerHTML = `
    <h1>Where food meets with the horror of the Station.</h1>
    <h2>Experience enlightenment with chef's specials and feel yourself at home.</h2>`

    content.appendChild(infograph); 
}

export default loadPage;