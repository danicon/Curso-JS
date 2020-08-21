function cont() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>' 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert("'Passo Inválido! Considerando PASSO 1")
            p = 1
        } 
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }
        
    }
}