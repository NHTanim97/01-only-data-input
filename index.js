
// Constructor
function Book(uName, uAthor, uType){
    this.name = uName;
    this.athor = uAthor;
    this.type = uType
}


// Display Constructor
function Display(){

}


// Add methods to display prototype



// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){ // page reload নেয় output যখন তখন চলে যায় ।
    console.log('this is submit form');
    let name = document.getElementById('bookName').value;
    let athor = document.getElementById('author').value;


    // check box part start
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');


    let type;
    if(fiction.checked){
        type = fiction.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    else if(cooking.checked){
        type = cooking.value;
    }
    // check box part end

    // onject create
    let book =  new Book(name, athor, type);

    console.log(book);
    e.preventDefault(); //এটার জন্য পেজ reload নিবে না ।
}