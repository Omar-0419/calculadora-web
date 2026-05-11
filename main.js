let resultado = document.getElementById("resultado")
let buttons = document.querySelectorAll("button")
let operation = document.getElementById("operation")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        
        
        if (button.textContent == "AC"){
            resultado.textContent = ""
            operation.textContent = ""
            

        } else if (button.textContent == "+/-") {
            if (resultado.textContent.startsWith("-")){
                resultado.textContent = resultado.textContent.slice(1)

            } else {
                resultado.textContent = "-" + resultado.textContent
            }

        } else if (button.textContent == "%"){
            resultado.textContent = Number(resultado.textContent) / 100

        } else if (button.textContent == "=" ){
            operation.textContent = resultado.textContent
            resultado.textContent = resultado.textContent.replaceAll("÷", "/")
            resultado.textContent = resultado.textContent.replaceAll("×", "*")
            resultado.textContent = eval(resultado.textContent) //cambiar más adelante
       
        } else if (button.textContent == "⌫"){
            resultado.textContent = resultado.textContent.slice(0, -1)

        } else{
            resultado.textContent += button.textContent
            let characters = resultado.textContent.length
            console.log(characters);
            

            if (characters >= 7){////////////////////////////
                
                resultado.textContent.style.color = "red"
            }
        }
        
    })
    
})

// else {
//       resultado.textContent += button.textContent
//         }
