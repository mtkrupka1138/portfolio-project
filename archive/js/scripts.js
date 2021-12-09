// import { EmojiButton } from '@joeattardi/emoji-button';

// window.addEventListener('DOMContentLoaded', () => {
//     const button = document.querySelector('#emoji-button');
//     const picker = new EmojiButton();
  
//     picker.on('emoji', emoji => {
//       document.querySelector('#test-input').value += emoji;
//     });
  
//     button.addEventListener('click', () => {
//       picker.pickerVisible ? picker.hidePicker() : picker.showPicker(button);
//     });
//   });

  

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})





let squareInputs = document.getElementsByClassName("form-check-input");

sessionStorage.setItem("squareInputs", JSON.stringify(squareInputs));


let squareInputsChecked = [];
for (i=0; i< squareInputs.length; i++) {
    if (squareInputs[i].type="radio") { 
        if (squareInputs[i].checked) 
        store.push(squareInputs[i])
    }
}






