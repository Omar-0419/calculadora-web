let resultado = document.getElementById("resultado")
let buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        
        
        if (button.textContent == "AC"){
            resultado.textContent = ""

        } else if (button.textContent == "+/-") {
            if (resultado.textContent.startsWith("-")){
                resultado.textContent = resultado.textContent.slice(1)

            } else {
                resultado.textContent = "-" + resultado.textContent
            }

        } else if (button.textContent == "%"){
            resultado.textContent = Number(resultado.textContent) / 100

        } else if (button.textContent == "=" ){
            resultado.textContent = resultado.textContent.replace("÷", "/")
            resultado.textContent = eval(resultado.textContent) //cambiar más adelante
       
        } else{
            resultado.textContent += button.textContent
        }
        
    })
    
})

// else {
//       resultado.textContent += button.textContent
//         }
