let altura = 0
let largura = 0
let vidas = 1
let tempo = 10
let nivel = window.location.search.replace('?', '')
let CriaMosquitoTempo = 1500
switch(nivel){
    case 'normal':
        CriaMosquitoTempo = 1500;
        break;
    case 'dificil':
        CriaMosquitoTempo = 1000;
        break;
    case 'chucknorris':
        CriaMosquitoTempo = 700;
        break;
}
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()
let cronometro = setInterval(function(){
    tempo -=1
    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'

    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

    
}, 1000)
function posicaoRandom(){

    //removendo o mosquito caso exista 
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if (vidas > 3){
            window.location.href = 'fim.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/imagens/coracao_vazio.png'
            vidas++
        }
        
        
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    // Verifica se a posição é negativo
    posicaoX = posicaoX < 0 ? 0: posicaoX
    posicaoY = posicaoY < 0 ? 0: posicaoY
    //Criando o elemento html

    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3 )

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 3 )

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
