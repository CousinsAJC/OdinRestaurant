function loadContact(){
    let contentDiv = document.getElementById('content');
    const holder = document.createElement('div');
    holder.id = "holder";

    const contactHeading = document.createElement('h1');
    contactHeading.textContent = 'Contact';
    contactHeading.classList.add('heading');
    holder.append(contactHeading);

    contentDiv.replaceChildren(holder);
}


export { loadContact };