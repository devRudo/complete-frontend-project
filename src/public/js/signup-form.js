function validateFirstName() {
    var firstname = document.getElementById('first_name').value;
    var firstname_error = document.getElementById('firstname_error');

    if (firstname == '') {
        firstname_error.innerText = "First Name cannot be empty";
        document.getElementById('first_name').setAttribute('required');
        return false;
    }
}

function validateLastName() {
    var lastname = document.getElementById('last_name').value;
    var lastname_error = document.getElementById('lastname_error');
    if (lastname == '') {
        lastname_error.innerText = "Last Name cannot be empty";
        return false;
    }
}

function validateEmail() {
    var email = document.getElementById('email').value;
    var email_error = document.getElementById('email_error');
    if (email == '') {
        email_error.innerText = "Looks like this is not an email";
        return false;
    }
}

function validatePassword() {
    var password = document.getElementById('password').value;
    var password_error = document.getElementById('password_error');
    if (password == '') {
        password_error.innerText = "Password cannot be empty";
        return false;
    }
}