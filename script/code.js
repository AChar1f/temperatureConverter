function f2C() {
    let output = document.getElementById('output')
    let fahrenheit = document.querySelector('[fahrenheit]').value
    if(fahrenheit === '' || isNaN(fahrenheit) )  {
        alert('Please Insert a Valid Input.')
    } else {
        let celsius = (parseFloat(fahrenheit) -32) * 5 / 9
        output.value = (fahrenheit + ' fahrenheit converts to ' + celsius.toFixed(2) + ' celsius ')
    } 
         
}

function c2F() {
    let celsius = document.querySelector('[celsius]').value
    if(celsius === '' || isNaN(celsius) )  {
        alert('Please Insert a Valid Input.')
    } else {
        let fahrenheit = (parseFloat(celsius) * 9 / 5) + 32
        output.value = (celsius + ' celsius converts to ' + fahrenheit.toFixed(2) + ' fahrenheit ')
    } 
}

let convertButton1 = document.querySelector('[c2F]')
convertButton1.addEventListener('click', c2F)

let convertButton2 = document.querySelector('[f2C]')
convertButton2.addEventListener('click', f2C) 



//alert creates a message dialogue box stating a message XD.