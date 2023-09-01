// Commom Css Start
let toggleBtn = document.getElementById("eye_button");
let password = document.getElementById("password");
let validation_msg = document.getElementById("validation_msg");
// Commom Css End
// Pass Start
toggleBtn.addEventListener("click", function(){
    if(password.type == "text"){
        password.type = "password";
        toggleBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }else{
        password.type = "text";
        toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
});
// Pass End
// Validation Start
password.addEventListener("keyup", function(){
    let passLength = password.value.length;
    if(passLength < 8){
        validation_msg.innerText = "Weak Password";
        validation_msg.style.color = 'red';
        validation_msg.style.fontSize = '20px'
    }else{
        validation_msg.innerText = "Strong Password";
        validation_msg.style.color = 'green';
        validation_msg.style.fontSize = '20px'
    }
});
// Validation End
// Mode Change Start
let mode_toggler = document.getElementById('mode_toggler');
let root = document.documentElement;
mode_toggler.addEventListener('click', function(){
    if(root.classList.contains('dark')){
        root.classList.remove('dark')
        mode_toggler.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.removeItem('mode')
    }else{
        root.classList.add('dark')
        localStorage.setItem('mode', 'dark')
        mode_toggler.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
})
if(localStorage.getItem('mode') == 'dark'){
    root.classList.add('dark')
}
// Mode Change End