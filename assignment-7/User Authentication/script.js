let signUpButton = document.getElementById('signUpButton');
let signInButton = document.getElementById('signInButton');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');

signInButton.onclick = function () {
    nameField.style.maxHeight = '0';

    title.innerHTML = 'Sign In';
    signUpButton.classList.add('disable');
    signInButton.classList.remove('disable');
}

signUpButton.onclick = function () {
    nameField.style.maxHeight = '60px';

    title.innerHTML = 'Sign Up';
    signInButton.classList.add('disable');
    signUpButton.classList.remove('disable');
}

/*
    I want to say that it's possible to do. But I think it's backend
    development when I save and working with saved data and so on.

    I can create design of a page, create a functions, but I really
    confused when I need to work with servers and data at
    frontend subject.

    Sorry if I say something wrong.
*/

