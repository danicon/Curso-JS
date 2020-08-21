function carregar() {
    var sdc = document.getElementById('sdc')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var dia = 'BOM DIA!'
    var tarde = 'BOA TARDE!'
    var noite = 'BOA NOITE!'
    var data = new Date()
    var hora = data.getHours()
    sdc.innerHTML = `${dia}`
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        sdc.innerHTML = `${dia}`
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        sdc.innerHTML = `${tarde}`
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        sdc.innerHTML = `${noite}`
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}

