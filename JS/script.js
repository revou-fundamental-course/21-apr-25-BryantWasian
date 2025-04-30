let celcius;
let fahrenheit;
document.getElementById("convert").onclick = function(){
    celcius = document.getElementById("konversi_input1").value;
    celcius = parseFloat(celcius);
    fahrenheit = (celcius * 9 / 5) + 32;
    console.log(celcius);
    document.getElementById("result_input").textContent= fahrenheit;
}
document.getElementById("reset").onclick = function(){
    document.getElementById("konversi_input1").value = "";
    document.getElementById("result_input").textContent = "";
}
document.getElementById("reverse").onclick = function(){
    celcius = document.getElementById("konversi_input1").value;
    celcius = parseInt(celcius);
    document.getElementById("myLabel1").textContent = "Fahrenheit (&deg;F)";
    document.getElementById("myLabel2").textContent = "Celcius (&deg;C)";
    celcius = (celcius * 5 / 9) -32;
    document.getElementById("result_input").textContent= celcius;
}