(async function () {

    const nameField = document.getElementById("name");
    const blackjackGame = document.getElementById("blackjack-game");
    const submitNameButton = document.getElementById("submit-name-button");
    const nameForm = document.getElementById("name-form");
    const formCard = document.getElementById("form-card");
    const footer = document.getElementById("footer");
    const URL = "https://www.deckofcardsapi.com/api/deck/";

    function isSubmitButtonClickable() {
        if (nameField.value === "") {
            submitNameButton.className = "disabled";
        } else {
            submitNameButton.className = "enabled";
        }
    }

    function getContent() {
        if (nameField.value !== "") {
            formCard.className = nameForm.className = "hidden";
            blackjackGame.className = "visible";
            footer.className = "visible card";
            document.getElementById("player-name").innerText = nameField.value;
        }
    }

    async function getNewDeck() {
        try {
            return (await fetch(URL + "new/shuffle/?deck_count=4")).json();
        } catch (error) {
            console.log(error);
        }
    }

    async function draw(count) {
        try {
            let drawURL = URL + deck.deck_id + "/draw/?count=" + count;
            return (await fetch(drawURL)).json();
        } catch(error) {
            console.log(error);
        }
    }

    const deck = (await getNewDeck());
    const card = (await draw(1));
    console.log(card.cards[0].value);

    nameField.addEventListener("input", isSubmitButtonClickable);
    nameForm.addEventListener("submit", getContent);

})();