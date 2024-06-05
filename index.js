const signUpButton = document.getElementById('signup-form__button')
const emailInput = document.getElementById('email')
const subscriptionForm = document.getElementById('form')
const dissmissButton = document.getElementById('dismiss-message')
const successMessageDiv = document.getElementById('success')
const userEmail = document.getElementById('user-email')
const errorMessage = document.getElementById('error-message')

signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (ValidateEmail(emailInput.value)) {
        // appliquer la classe hidden au container
        e.preventDefault();
        subscriptionForm.classList.add('hidden')
        subscriptionForm.classList.remove('container');
        userEmail.textContent = emailInput.value;
        successMessageDiv.classList.remove('hidden')
        successMessageDiv.classList.add('success')
        //  appliquer la class success to the success message 
    } else {
        errorMessage.classList.remove('hidden')
        emailInput.classList.add('error')
    }

})


dissmissButton.addEventListener('click', (e) => {
    e.preventDefault();
    emailInput.value = '';
    subscriptionForm.classList.remove('hidden');
    successMessageDiv.classList.remove('success')
    errorMessage.classList.add('hidden')
    emailInput.classList.remove('error')
    successMessageDiv.classList.add('hidden')
    subscriptionForm.classList.add('container');
})

function ValidateEmail(email) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
        return true;

    } else {



        //   document.form1.text1.focus();

        return false;

    }

}