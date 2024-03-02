const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password =document.getElementById('password')
const conformPassword = document.getElementById('conformpassword')

form.addEventListener('submit',(e)=>{
    if(validateInputs()){
        e.preventDefault();

    }
})
function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal=password.value.trim();
    const conformPasswordVal = conformPassword.value.trim();
    if (!usernameVal) {
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }
    if (!emailVal) {
        setError(email,'Email is required') 
    }
    else if(!validateEmail(emailVal)){
        setError(email,'please enter a valid email')
    }
    else{
        setError(email)
    }
    if(!passwordVal){
        setError(password,'passwort is required')
    }
    else if (password.length<8) {
        setError(password ,'password must be atleast 8 characters')

    }
    else{
        setSuccess(password)
    }
    if (!conformPasswordVal) {
        setError(conformPassword,'conform passwort is required')
    }
    else if(conformPassword!==passwordVal){
    setError(password,'paswort does not match')
}
else{
    setSuccess(conformPassword)
}
}

function setError(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('error')
    errorElement.innerText= message;
    inputGroup.classList.add('error')
    inputGroup.classlist.remove('success')

    
}
function setSuccess(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('error')
    errorElement.innerText= '';
    inputGroup.classList.add('success')
    inputGroup.classlist.remove('error')
}
const validateEmail = (email)=>{
    return string(email)
    .toLowercase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
};


