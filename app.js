"use strict";

/*const form = document.getElementById('form');
const Name = document.getElementById('Name');
const email = document.getElementById('Email');
const password = document.getElementById('form');
const cpassword = document.getElementById('cPassword');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const NameValue = Name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    if(NameValue === '') {
        setError(Name, 'Name is required');
    }else{
        setSuccess(Name);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required.')
    }else if(passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.')
    }else{
        setSuccess(password);
    }

};*/
