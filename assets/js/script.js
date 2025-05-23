//DOM - Informa os objetos do html que serão Manipulados

const dcidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const icone = document.querySelector('#incone')
const previsao = document.querySelector('.texto-previsao')
const key = '5d9fef7547334ec8f99ccbe6fd8e8a32'

//eventos


botao.addEventListener('click',buscar_cidade)


//função

async function buscar_cidade(){
    
    procura_cidade = dcidade.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${procura_cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    console.log(dados)

    cidade.textContent = `Tempo em ${dados.name}`
    temperatura.textContent = `${(dados.main.temp).toFixed(0)}°C`
    previsao.textContent = `${dados.weather[0].description}`
    icone.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}