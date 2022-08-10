/* ----- Senha do Login ----- */
let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

/* ----- Senha do Login ----- 
let btn = document.querySelector('#senhaLogin')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
}) */

/* ------------------------------------------------- 

let btnSenha = document.querySelector('#versenha')

btnSenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})*/

/* ------------------------------------------------- 

let btnConf = document.querySelector('#verconfsenha')

btnConf.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#conf_senha')

    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})
*/
