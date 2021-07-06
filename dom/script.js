//DOM = DOCUMENT OBJECT MODEL

//ONE TYPE OF NESTED TREE FOR TRACING THE ENTIRE CODE

//SELCTING THE ELEMENT FROM THE DOM .

//first way - document.getElementByid('id name')


//const head = document.getElementById(h1);


//second way - document.getElementByTagname(tag name);

//third way - document.getElementByClassname('class name');

//fourth way - css selector =>document.querySelectorAll()



//elements properties and methods
const btn = document.querySelector('button');
//btn.addEventListener('click', () => {
//    alert('you clicked the button');
//})

//working with the classes

const menuClicked = (currEl) => {
    const menuItems = document.getElementsByClassName('menu-item');

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('active');
    }

    currEl.classList.add('active');
}