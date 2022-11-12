let calculoInteres = function (monto, cuotas){
    let interesAPagar 
    let cuotasUna = 15
    let cuotasTres = 30
    let cuotasSeis = 45
    let cuotasNueve = 60
    let cuotasDoce = 100
   let montoSolicitado = prompt ("Ingrese el monto que desea que le prestemos: ")
   let cuotasSolicitadas = prompt ("Ingrese el numero de cuotas en el que desea devolverlo")
   
    switch (cuotas) {
        case "1":
            interesAPagar = (monto*cuotasUna)/100
            return alert ("su interes es de: " ,interesAPagar)
        break;
        case "3":
            interesAPagar = (monto*cuotasTres)/100
            return alert("su interes es de: " ,interesAPagar)
        break;
        case "6":
            interesAPagar = (monto*cuotasSeis)/100
            return alert("su interes es de: " ,interesAPagar)
        break;
        case "9":
            interesAPagar = (monto*cuotasNueve)/100
            return alert("su interes es de: " ,interesAPagar)
        break;
        case "12":
            interesAPagar = (monto*cuotasDoce)/100
            return alert("su interes es de: " ,interesAPagar)
        break;
        default:
                return alert("Ingrese numero de cuotas validas")
        break;
                    }  
                    
         }  