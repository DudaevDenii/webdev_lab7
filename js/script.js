function init(){
    const entryButton = document.getElementById("entrybutton")
    entryButton.addEventListener("click", function() {
        const inputText = document.getElementById("entryinput").value
        alert("Deni Dudaev: " + inputText)
        const h2Text = document.getElementById("textoutput")
        h2Text.textContent = inputText
    })
}

window.addEventListener('load', init);
