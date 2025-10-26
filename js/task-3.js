const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`)

nameInput.addEventListener(`input`, (event) => {
    const input = event.currentTarget.value.trim();

    if (input !== "") {
        return nameOutput.textContent = input;
    } else {
        return nameOutput.textContent = "Anonymous"
    }
})