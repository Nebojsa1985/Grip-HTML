const buttonIcon = document.querySelector('.fa-chevron-right')
const loginButton = document.querySelector('.login-button')
const loginFields = document.querySelector('.login-fields')


function loginFieldsToggle() {
    if(buttonIcon.classList.contains('fa-chevron-right')){
        loginFields.style.display = "flex"
        buttonIcon.classList.remove('fa-chevron-right')
        buttonIcon.classList.add('fa-chevron-left')
    }
   else{
        loginFields.style.display = "none"
        buttonIcon.classList.remove('fa-chevron-left')
        buttonIcon.classList.add('fa-chevron-right')
    }
}

loginButton.addEventListener('click', loginFieldsToggle)
