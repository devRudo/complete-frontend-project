
let validateForm = () => {
    var firstname = document.getElementById('first_name').value;
    var firstname_error = document.getElementById('firstname_error');
    var lastname = document.getElementById('last_name').value;
    var lastname_error = document.getElementById('lastname_error');
    var email = document.getElementById('email').value;
    var email_error = document.getElementById('email_error');
    var password = document.getElementById('password').value;
    var password_error = document.getElementById('password_error');
    if (firstname == '') {
        firstname_error.innerText = "First Name cannot be empty";
        document.getElementById('first_name').style.border = "2px solid var(--primary-color-red)";
        document.getElementById('first_name').style.background = "url('/images/signup-form/icon-error.svg') right center no-repeat";
        document.getElementById('first_name').style.backgroundOrigin = "content-box";
        return false;
    }
    else {
        firstname_error.innerText = "";
        document.getElementById('first_name').style.border = "2px solid var(--primary-color-green)";
        document.getElementById('first_name').style.background = "url('/images/signup-form/tick.svg') right center no-repeat";
        document.getElementById('first_name').style.backgroundOrigin = "content-box";
    }

    if (lastname == '') {
        lastname_error.innerText = "Last Name cannot be empty";
        document.getElementById('last_name').style.border = "2px solid var(--primary-color-red)";
        document.getElementById('last_name').style.background = "url('/images/signup-form/icon-error.svg') right center no-repeat";
        document.getElementById('last_name').style.backgroundOrigin = "content-box";
        return false;
    }
    else {
        lastname_error.innerText = "";
        document.getElementById('last_name').style.border = "2px solid var(--primary-color-green)";
        document.getElementById('last_name').style.background = "url('/images/signup-form/tick.svg') right center no-repeat";
        document.getElementById('last_name').style.backgroundOrigin = "content-box";
    }

    if (email == '') {
        email_error.innerText = "Looks like this is not an email";
        document.getElementById('email').style.border = "2px solid var(--primary-color-red)";
        document.getElementById('email').style.background = "url('/images/signup-form/icon-error.svg') right center no-repeat";
        document.getElementById('email').style.backgroundOrigin = "content-box";
        return false;
    }
    else {
        email_error.innerText = "";
        document.getElementById('email').style.border = "2px solid var(--primary-color-green)";
        document.getElementById('email').style.background = "url('/images/signup-form/tick.svg') right center no-repeat";
        document.getElementById('email').style.backgroundOrigin = "content-box";
    }

    if (password == '') {
        password_error.innerText = "Password cannot be empty";
        document.getElementById('password').style.border = "2px solid var(--primary-color-red)";
        document.getElementById('password').style.background = "url('/images/signup-form/icon-error.svg') right center no-repeat";
        document.getElementById('password').style.backgroundOrigin = "content-box";
        return false;
    }
    else {
        password_error.innerText = "";
        document.getElementById('password').style.border = "2px solid var(--primary-color-green)";
        document.getElementById('password').style.background = "url('/images/signup-form/tick.svg') right center no-repeat";
        document.getElementById('password').style.backgroundOrigin = "content-box";
    }
    return true;
};

document.getElementById('submit').addEventListener('click', (event) => {
    if (!validateForm()) {
        event.preventDefault();
    }
});