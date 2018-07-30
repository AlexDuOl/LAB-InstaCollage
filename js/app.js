let dragImg = document.getElementsByClassName("collection");
let dropBox = document.getElementsByClassName("collageImg");
let dragged = null;

//Entrando al array de imagenes
Array.from(dragImg).forEach((img) => {
    img.ondragstart = function (e) {
        dragged = e.target;
        console.log("Esta drageando");
    }
});

//Entrando al array del div para colocar las imagenes
Array.from(dropBox).forEach((box) => {
    box.ondragover = function (e) {
        e.preventDefault();
        console.log("drag");       
    }
    box.ondrop = function (e) {
        e.preventDefault();
        box.appendChild(dragged);
        console.log(dragged);
    }

});

//.setAttribute("x", e);

