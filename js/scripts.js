let squareInputs = document.getElementsByClassName("form-check-input");

sessionStorage.setItem("squareInputs", JSON.stringify(squareInputs));


let squareInputsChecked = [];
for (i=0; i< squareInputs.length; i++) {
    if (squareInputs[i].type="radio") { 
        if (squareInputs[i].checked) 
        store.push(squareInputs[i])
    }
}






