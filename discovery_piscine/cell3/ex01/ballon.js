function BallonTamCol() {
    var element = document.getElementById("ballonID");

    const compStyles = getComputedStyle(element);
    let glHeight = compStyles.getPropertyValue("height").replace("px","");
    let glWidth = compStyles.getPropertyValue("width").replace("px","");
    let glRadius = compStyles.getPropertyValue("border-radius").replace("px","");
    let glColor = compStyles.getPropertyValue("background-color");
    /*let glHeight = element.getAttribute.height;
    let glWidth = element.style.width;
    let glRadius = element.style.borderRadius;
    /*let glColor = element.style.background-color;*/

    /*var contenido = document.getElementById("miDIV").innerText = glColor;*/

    if (parseInt(glHeight) > 420)
    {
        element.style.height = "200px";
        element.style.width = "200px";
        element.style.borderRadius = "100px";
        element.style.backgroundColor = "rgb(0, 128, 0)";
    }else{
        element.style.height = parseInt(glHeight) + 10 + "px";
        element.style.width = parseInt(glWidth) + 10  + "px";
        element.style.borderRadius = parseInt(glRadius) + 10  + "px";
    }

    switch(glColor) {
        case "rgb(255, 0, 0)":      /*Rojo*/
            element.style.backgroundColor = "rgb(0, 128, 0)";      /*Verde*/
        break;
        case "rgb(0, 128, 0)":      /*Verde*/
            element.style.backgroundColor = "rgb(0, 0, 255)";      /*Azul*/
        break;
        case "rgb(0, 0, 255)":      /*Azul*/
            element.style.backgroundColor = "rgb(255, 0, 0)";      /*Rojo*/
        break;
    }
}

function BallonRatonOut() {
    var element = document.getElementById("ballonID");

    const compStyles = getComputedStyle(element);
    let glHeight = compStyles.getPropertyValue("height").replace("px","")
    let glWidth = compStyles.getPropertyValue("width").replace("px","");
    let glRadius = compStyles.getPropertyValue("border-radius").replace("px","");
    let glColor = compStyles.getPropertyValue("background-color");

    if (parseInt(glHeight) > 200)
    {
        element.style.height = parseInt(glHeight) - 5 + "px";
        element.style.width = parseInt(glWidth) - 5  + "px";
        element.style.borderRadius = parseInt(glRadius) - 5  + "px";
    }

    switch(glColor) {
        case "rgb(255, 0, 0)":      /*Rojo*/
            element.style.backgroundColor = "rgb(0, 0, 255)";      /*Azul*/
        break;
        case "rgb(0, 0, 255)":      /*Azul*/
            element.style.backgroundColor = "rgb(0, 128, 0)";      /*Verde*/
        break;
        case "rgb(0, 128, 0)":      /*Verde*/
            element.style.backgroundColor = "rgb(255, 0, 0)";      /*Rojo*/
        break;
    }
}
