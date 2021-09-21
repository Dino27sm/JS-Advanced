let registerFormElm = document.getElementById('form-register');
let loginFormElm = document.getElementById('form-login');

registerFormElm.addEventListener('submit', register);
loginFormElm.addEventListener('submit', login);

async function register(ev){
    ev.preventDefault();

    let urlRegister = 'http://localhost:3030/users/register/';
    let regForm = ev.target;
    let regFormData = new FormData(regForm);

    let getEmail = regFormData.get('email');
    let getPassword = regFormData.get('password');
    let getRepass = regFormData.get('rePass');

    if(getPassword != getRepass){
        console.error('Passwords must mutch !!!');
        return;
    }

    let regUser = {
        email: getEmail,
        password: getPassword,
    };
    
    let regResponse = await fetch(urlRegister, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(regUser),
    })
    let regResult = await regResponse.json();

    localStorage.setItem('regToken', regResult.accessToken);
    localStorage.setItem('userId', regResult._id);
    regForm.reset();
    window.location.replace('./index.html');
}

async function login(ev){
    ev.preventDefault();

    let urlLogin = 'http://localhost:3030/users/login/';
    let loginForm = ev.target;
    let loginFormData = new FormData(loginForm);

    let getEmail = loginFormData.get('email');
    let getPassword = loginFormData.get('password');

    let loginUser = {
        email: getEmail,
        password: getPassword,
    };
    
    let loginResponse = await fetch(urlLogin, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(loginUser),
    })
    let resultResponse = await loginResponse.json();

    localStorage.setItem('logToken', resultResponse.accessToken);
    loginForm.reset();
    window.location.replace('./index.html'); // To redirect to another page
}