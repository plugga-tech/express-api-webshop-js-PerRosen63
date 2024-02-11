let productList = document.getElementById('productList');
let userForm = document.getElementById('userForm');

if (localStorage.getItem('user')) {
    printLogoutBtn();
} else {
    printLoginForm();
}

function printProducts() {
    fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(data => {
        //console.log('produkter', data);

        data.map(product => {
            let li = document.createElement('li');
            li.innerText = product.Artikel;

            productList.appendChild(li);
        })
    })
}
printProducts();

function printLoginForm() {
    userForm.innerHTML = '';

    let inputEmail = document.createElement('input');
    inputEmail.placeholder = 'Epost';
    let inputPassword = document.createElement('input');
    inputPassword.placeholder = 'Lösenord';
    inputPassword.type = 'password';

    let loginBtn = document.createElement('button');
    loginBtn.innerText = 'Logga in';

    loginBtn.addEventListener('click', () => {
        let sendUser = {mejl: inputEmail.value, pw: inputPassword.value};

        fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log('post user', data);
        })

    })

    userForm.append(inputEmail, inputPassword, loginBtn);

}

function printLogoutBtn() {
}