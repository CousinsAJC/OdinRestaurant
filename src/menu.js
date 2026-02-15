function loadMenu(){
    let contentDiv = document.getElementById('content');
    const holder = document.createElement('div');
    holder.id = "holder";

    const menuHeading = document.createElement('h1');
    menuHeading.textContent = "Menu";
    menuHeading.classList.add('heading');
    holder.append(menuHeading);

    contentDiv.replaceChildren(holder);
}



export { loadMenu };