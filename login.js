document.getElementById('login-btn').addEventListener('click',()=>{
    const email = "bank@gmail.com";
    const pass = 1234;

    const inputEmail = document.getElementById('email-input').value;
    const inputPass = document.getElementById('pass-input').value;

    document.getElementById('email-input').value='';
    document.getElementById('pass-input').value='';

    if(email == inputEmail && pass == inputPass){
        window.location.href="./bank.html"
    }
})