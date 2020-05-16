

// dislay none effect on laPhrase
function deletPhrase(){
    let laPhrase = document.getElementById("firstContenerPhrase")
    laPhrase.parentNode.removeChild(laPhrase)
}

window.setTimeout(deletPhrase, 6000);


// hover effect button Next

function onHover(elementHover){
    elementHover.classList.add("cercleOrangeHover");
}

function offHover(elementHover){
    elementHover.classList.remove("cercleOrangeHover");
}




