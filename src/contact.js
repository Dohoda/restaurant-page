function loadContact(){

    const content = document.querySelector("#content");

    const contactContent = document.createElement("div");
    contactContent.classList.add("contact-content");

    content.appendChild(contactContent);

    contactContent.innerHTML = `
    <h1>Contact Us</h1>
    Description bla bla bla goes right here <br>
    Address maybe? goes here <br>
    Contact Number goes here <br>
    Too lazy to add forms here bla bla bla
    `
}

export default loadContact;