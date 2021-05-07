let firstName, lastName, email, subject, message, submitGroup

function checkForm() {
    if (firstName.value != "" && lastName.value != "" && email.value != "" && message.value != "") {
        submitGroup.classList.remove("is-hidden-custom")
    }
}

function clearForm() {
    let toClear = [firstName, lastName, email, subject, message]
    submitGroup.classList.add("is-hidden-custom")
    for (i in toClear) {
        toClear[i].value = "";
    }
}
document.addEventListener('DOMContentLoaded', () => {
    //form events
    firstName = getElement("#firstName"), lastName = getElement("#lastName"), email = getElement("#email"), subject = getElement("#subject"), message = getElement("#message"), submitGroup = getElement("#submitGroup");
    let idsToCheck = [firstName, lastName, email, subject, message]
    for (i in idsToCheck) {
        idsToCheck[i].addEventListener("input", a => checkForm())
    }
    getElement("#reset").addEventListener("click", a => clearForm())
});