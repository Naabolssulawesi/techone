function checkTemperatureCategory(){
    var temperature = document.getElementById('temperatureinput').value;
    var resultText = '';

    if (temperature === ''){
        resultText = 'Please enter a temperature'
    } else {
        temperature = parseFloat(temperature);
        if(isNaN(temperature)){
            resultText = 'That is not a valid temperature'
        } else{
            if (temperature < 19){
                resultText = 'The temperature is cold'
            } else if (temperature > 18 && temperature <= 25){
                resultText = 'The temperature is warm';
            } else{
                resultText = 'The temperature is hot';
            }
        }
    }

    document.getElementById('result').innerHTML = resultText;
}
