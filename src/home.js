function loadHome(){
    //Create the div to hold everything
    let contentDiv = document.getElementById('content');
    const holder = document.createElement('div');
    holder.id = "holder";

    //Create the header
    const homeHeading = document.createElement('h1');
    homeHeading.textContent = "Home";
    homeHeading.classList.add('heading')
    holder.append(homeHeading);

    //Create the content
    let thisDiv = document.createElement('div');
    thisDiv.classList.add('about');
    const infoHead = document.createElement('h2');
    infoHead.textContent = 'About Us';
    thisDiv.append(infoHead);

    const infoP = document.createElement('p');
    infoP.textContent = 'Here at The Restaurant we believe blah blah de blah ze mo la de dah.';
    thisDiv.append(infoP);
    holder.append(thisDiv);

    //Replace Tab
    contentDiv.replaceChildren(holder);
}



export { loadHome };