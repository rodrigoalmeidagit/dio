function clicou() {
    document.getElementById('agradecimento').innerHTML = '<b>Obrigado por clicar!</b>'    
}

/*function redirecionar() {
    window.location.href = 'https://globo.com'
}
*/
function trocar(element){
    element.innerHTML = 'Obrigado por passar o mouse!'
}

function voltar(element){
    element.innerHTML = 'Passe o mouse aqui!'
}

function load(){
    alert('Pagina Carregada')
}

function funcaoChance(elemento){
    console.log(elemento.value)
}