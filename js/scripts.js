/*LABEL*/
let nome = document.querySelector('#nome')
let lb_nome = document.querySelector('#lb_nome')
let validNome = false

let usuario = document.querySelector('#usuario')
let lb_usuario = document.querySelector('#lb_usuario')
let validUsuario = false

let senha = document.querySelector('#senhaCad')
let lb_senha = document.querySelector('#lb_senhaCad')
let validSenha = false

let conf_senha = document.querySelector('#conf_senha')
let lb_conf_senha = document.querySelector('#lb_conf_senha')
let validConf_senha = false

/*Mensagens do cadastro*/
let msgSucesso = document.querySelector('#msgSucesso')
let msgError = document.querySelector('#msgError')

/* Validação de Nome */
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2 ) {
        lb_nome.setAttribute('style', 'color: red')
        lb_nome.innerHTML = '<strong>Nome *Insira no minimo 3 caracteres</strong>'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        lb_nome.setAttribute('style', 'color: green')  
        lb_nome.innerHTML = 'Nome'  
        nome.setAttribute('style', 'border-color: green')
        validNome = true      
    }
})

/* Validação de Usuário */
usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 4 ) {
        lb_usuario.setAttribute('style', 'color: red')
        lb_usuario.innerHTML = '<strong>Usuário *Insira no minimo 5 caracteres</strong>'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else {
        lb_usuario.setAttribute('style', 'color: green')  
        lb_usuario.innerHTML = 'Usuário'  
        usuario.setAttribute('style', 'border-color: green')  
        validUsuario = true    
    }
})

/* Validação de Senha */
senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5 ) {
        lb_senha.setAttribute('style', 'color: red')
        lb_senha.innerHTML = '<strong>Senha *Insira no minimo 6 caracteres</strong>'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        lb_senha.setAttribute('style', 'color: green')  
        lb_senha.innerHTML = 'Senha'  
        senha.setAttribute('style', 'border-color: green')      
        validSenha = true
    }
})

/* Validação de Confirmação de Senha */
conf_senha.addEventListener('keyup', () => {
    if (senha.value != conf_senha.value) {
        lb_conf_senha.setAttribute('style', 'color: red')
        lb_conf_senha.innerHTML = '<strong>As senhas não conferem</strong>'
        conf_senha.setAttribute('style', 'border-color: red')
        validConf_senha = false
    } else {
        lb_conf_senha.setAttribute('style', 'color: green')  
        lb_conf_senha.innerHTML = 'Confirmar Senha'  
        conf_senha.setAttribute('style', 'border-color: green')      
        validConf_senha = true
    }
})

/* Validar Campos se estão todos preenchidos */
function cadastrar(){
    // alert('Botão cadastrar')
    if (validNome && validUsuario && validSenha && validConf_senha) {
        /*Adicionando no localStorage*/
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                usuarioCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        
        msgSucesso.setAttribute('style', 'display: block')
        msgSucesso.innerHTML = '<strong>Usuário cadastrado com sucesso !</strong>'
        msgError.setAttribute('style', 'display:none')
        msgError.innerHTML = ''  
        
        setTimeout(() => {
            window.location.href = 'login.html'
        },3000)
        
    } else { 
        msgError.setAttribute('style', 'display:block')       
        msgError.innerHTML = '<strong>Preencha o campos corretamente para continuar com o cadastro !</strong>'
        msgSucesso.innerHTML = ''
        msgSucesso.setAttribute('style', 'display:none')
    }     
 }

/* Mostrar a senha e esconder senha */

/* ----- Senha do Login ----- 
let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
}) */

/* ----- Senha do Cadastro ----- */
let btnSenha = document.querySelector('#versenha')

btnSenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senhaCad')

    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

/* ----- Senha do Confirmação de Cadastro ----- */
let btnConf_senha = document.querySelector('#verconfsenha')

btnConf_senha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#conf_senha')

    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

/* ----------------------------------------------- */

function entrar(){
    let usuario = document.querySelector('#usuario')
    let lb_usuario = document.querySelector('#user_label')

    let senha = document.querySelector('#senha')
    let lb_senha = document.querySelector('#senha_label')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome:'',
        user:'',
        senha:''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    /*console.log(listaUser)
     Login efetuado com sucesso !
    */

    listaUser.forEach((item)=> {
        if (usuario.value == item.usuarioCad && senha.value == item.senhaCad) {
            userValid= {
            nome:item.nomeCad,
            user: item.usuarioCad,
            senha: item.senhaCad
            }
        }
    })

    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        window.location.href = '/logado.html'
    } else {
        user_label.setAttribute('style','color:red')
        usuario.setAttribute('style','border-color:red')
        senha_label.setAttribute('style','color:red')
        senha.setAttribute('style','border-color:red')       
        msgError.setAttribute('style','display:block')
        msgError.innerHTML = 'Usuário e Senha incorretos !'
        usuario.value = ''
        senha.value = ''
        usuario.focus()

    }

}