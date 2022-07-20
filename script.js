function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.querySelector('input#nasc')
    var idade = ano - Number(nasc.value)
    var inputSex = document.getElementsByName('sexo')
    var genero = ''
    var img = document.createElement('img')

    // nascimento
    if (nasc.value.length < 4 || nasc.value > ano){
        alert('Verifique os dados e tente novamente')
    } else {
        // Masculino
        if (inputSex[0].checked){
            genero = 'masculino'
            // idade
            if (idade <= 3){
                //bebe
                img.setAttribute('src', 'bebe masc.png')
            } else if (idade > 3 && idade <= 12){
                //crianca
                img.setAttribute('src', 'menino.png')
            } else if (idade > 12 && idade <= 17){
                //adolescente
                img.setAttribute('src', 'adolescente.png')
            } else if (idade > 17 && idade <= 60){
                //adulto
                img.setAttribute('src', 'homem.png')
            } else if (idade > 60){
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        // Feminino
        } else if (inputSex[1].checked){
            genero = 'feminino'
            // idade
            if (idade <= 3){
                //bebe
                img.setAttribute('src', 'bebe fem.png')
            } else if (idade > 3 && idade <= 12){
                //crianca
                img.setAttribute('src', 'menina.png')
            } else if (idade > 12 && idade <= 17){
                //adolescente
                img.setAttribute('src', 'adolescente fem.png')
            } else if (idade > 17 && idade <= 60){
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else if (idade > 60){
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        
        resultado.style.lineHeight = 2
        resultado.innerHTML = `Detectado ${idade} anos de idade e gênero ${genero}.`
        resultado.appendChild(img)
    }
}