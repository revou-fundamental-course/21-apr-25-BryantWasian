const convert = document.getElementById("convert");
const reset = document.getElementById("reset");
const reverse = document.getElementById("reverse");
const result_input = document.getElementById("result_input");
let buttonConvert = false;
let buttonReset = false;
let buttonReverse = false;
let celcius;
let fahrenheit;
let rumus1 = "* 9/5 + 32 = ";
let rumus2 = "* 5/9 - 32 = ";

/*convert.addEventListener("click", function(){
    //checks if convert is pressed or not
    buttonConvert = !buttonConvert; //change boolean value

    if(buttonConvert){
        document.getElementById("convert").onclick = function(){
            celcius = document.getElementById("konversi_input1").value;
            celcius = parseFloat(celcius);
            fahrenheit = (celcius * 9 / 5) + 32;
            console.log(celcius);
            document.getElementById("result_input").textContent= fahrenheit;
            document.getElementById("Calculate_detail").textContent=celcius + rumus1 + fahrenheit + "°F";
         }
    }
});*/
document.getElementById("convert").onclick = function(){
    celcius = document.getElementById("konversi_input1").value;
    celcius = parseFloat(celcius);
    fahrenheit = (celcius * 9 / 5) + 32;
    console.log(fahrenheit);
    document.getElementById("result_input").textContent= fahrenheit;
    document.getElementById("Calculate_detail").textContent=celcius + rumus1 + fahrenheit + "°F";
};

/*reset.addEventListener("click", function(){
    buttonReset = !buttonReset;
    if(buttonReset){
        document.getElementById("reset").onclick = function(){
            document.getElementById("konversi_input1").value = "";
            document.getElementById("result_input").textContent = "";
        }
    };
});*/
document.getElementById("reset").onclick = function(){
    document.getElementById("konversi_input1").value = "";
    document.getElementById("result_input").textContent = "";
}

/*reverse.addEventListener("click", function(){
    buttonReverse = !buttonReverse;
    if(buttonReverse){
        document.getElementById("reverse").onclick = function(){
            fahrenheit = document.getElementById("konversi_input1").value;
            fahrenheit = parseInt(fahrenheit);
            document.getElementById("myLabel1").textContent = "Fahrenheit (°F)";
            document.getElementById("myLabel2").textContent = "Celcius (°C)";
            celcius = (fahrenheit * 5 / 9) -32;
            document.getElementById("result_input").textContent= fahrenheit;
            document.getElementById("Calculate_detail").textContent=celcius + rumus1 + fahrenheit + "°C";
        }
    }
});*/
document.getElementById("reverse").onclick = function(){
    fahrenheit = document.getElementById("konversi_input1").value;
    fahrenheit = parseInt(fahrenheit);
    document.getElementById("myLabel1").textContent = "Fahrenheit (°F)";
    document.getElementById("myLabel2").textContent = "Celcius (°C)";
    celcius = (fahrenheit * 5 / 9) -32;
    document.getElementById("result_input").textContent= celcius;
    document.getElementById("Calculate_detail").textContent=fahrenheit + rumus1 + celcius + "°C";
};