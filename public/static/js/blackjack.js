const nameField = document.getElementById("name");
const blackjackGame = document.getElementById("blackjack-game");
const submitNameButton = document.getElementById("submit-name-button");
const nameForm = document.getElementById("name-form");
const formCard = document.getElementById("form-card");

function isSubmitButtonClickable() {
    if(nameField.value === "") {
        submitNameButton.className = "disabled";
    } else {
        submitNameButton.className = "enabled";
    }
}

function getContent() {
    console.log("TEST");
    if(nameField.value !== "") {
        formCard.className = nameForm.className = "hidden";
        blackjackGame.className = "visible";
    }
}

nameField.addEventListener("input", isSubmitButtonClickable);
nameForm.addEventListener("submit", getContent);