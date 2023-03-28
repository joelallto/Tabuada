
function tabuada(){
    var n1 = window.document.getElementById('num1') 
    var n2 = window.document.getElementById('num2')

    
    if (n1.value.length == 0 || n2.value.length == 0) {
        window.alert('[Erro]: Digite algum valor!')
    } else { 

    var n =  Number(n1.value)
    var e = Number(n2.value)

    var x = 0 
    var r = '' 
    var res = window.document.getElementById('resultado')

    var r = n*e

    res.innerHTML = `A tabuada de ${n} é: <br>`

    
    do {
        r = n*x 
        res.innerHTML += `${n} X ${x} = ${r} <br>`
        x++
    } while (x <= e)
    }
}