 //capcha function

 function capchaGenerate() {
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var capchaValue = ""
    var capcha = document.getElementById("capcha")

    for (var count = 1; count <= 5; count++) {
        var randomValue = Math.floor(Math.random() * characters.length)
        capchaValue += characters[randomValue]
    }

    capcha.textContent = capchaValue;
}

//verifying capcha value

var submit = document.getElementById("submit")
var capchaInput = document.getElementById("capchaInput")

submit.addEventListener("click", function () {
    event.preventDefault();
    var capchaTxt = document.getElementById("capcha").textContent;

    if (capchaTxt == capchaInput.value.trim()) {
        alert("Capcha Verfied Successfully")
    }
    else {
        alert("Please Enter the Correct Capcha")
    }

//reset value

    capchaGenerate();
    capchaInput.value = "";
})

//page refresh function call

document.addEventListener("DOMContentLoaded", function () {
    capchaGenerate();
});