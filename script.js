const botao = document.querySelector('.botao')


botao.addEventListener('click',CalcularoBoletim)


function CalcularoBoletim(){

let Nota1= document.querySelector('.Nota1').value

let Nota2=document.querySelector('.Nota2').value

let Nota3= document.querySelector('.Nota3').value

let Nota4= document.querySelector('.Nota4').value

const resultado = document.querySelector('.resultado')
console.log(Nota1)

if(Nota1 != ''&& Nota2 != ''&& Nota3 != ''&& Nota4!=''){

    Nota1 = parseFloat(Nota1)
    Nota2 = parseFloat(Nota2)
    Nota3 = parseFloat(Nota3)
    Nota4 = parseFloat(Nota4)
    
const soma= Nota1+Nota2+Nota3+Nota4
const media = (soma/4)
resultado.innerHTML=`A sua média é ${media.toFixed(1)}`

}else{
    resultado.innerHTML='Por favor preencha todos os campos'
}
}
