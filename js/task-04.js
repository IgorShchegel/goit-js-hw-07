const form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const element = e.target.elements
    const data = {
        email: element.email.value.trim(),
        password: element.password.value.trim(),
    }
    if(element.email.value===""||element.password.value==="" ){
        alert(`All form fields must be filled in`)
    }else{
        console.log(data)
    }
    form.reset();
    
})

