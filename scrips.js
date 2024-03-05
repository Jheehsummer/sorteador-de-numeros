function generateNumber(){
   
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const resultado = document.querySelector(".resultado")
    const result = min >= 0 & min < max

    
    if (result) { 
        
        resultado.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min

        
    } else { window.alert ("Verifique os números digitados (mínimo de 0)")}
  
    
}