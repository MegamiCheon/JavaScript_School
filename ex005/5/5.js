function Convert() {

    var Celsius = window.prompt('Coloque o valor em celsius')

    var Kelvin = Celsius + 273
    var Farennheit = Celsius * 1.8 + 32

    var p1 = document.getElementById("p1")
    var p2 =document.getElementById("p2")

    p1.innerHTML = `<p>Resultado (Celsius para Kelivin): <strong>${Kelvin}ºK</strong></p>`
    p1.innerHTML = `<p>Resultado (Celsius para Farennheit): <strong>${Farennheit}ºK</strong></p>`

    
}