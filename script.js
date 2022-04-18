//Entrega S03-10 - Funções e Arrays

// Estratégia:
// Rafael, Manoel e Daniel = Lista de competidores
// Daniel tem vantagem (1 lugar)
// Desenvolver a função para criar o podium


// Se firstPlace = Daniel - Nada acontece;
// Se secondPlace = Daniel - Inverte com o firstPlace
// Se lastPlace = Daniel - Inverte com o secondPlace, mantém o firstPlace


function positions(firstPlace, secondPlace, lastPlace){
    let positionsArray = [firstPlace, secondPlace, lastPlace]
    
    if(positionsArray[1] == "Daniel"){
        positionsArray = [secondPlace, firstPlace, lastPlace]
    }
    else if(positionsArray[2] == "Daniel"){
        positionsArray = [firstPlace, lastPlace, secondPlace]
    }   
console.log('1º colocado: ' + positionsArray[0] + ' 2º colocado: ' + positionsArray[1] + ' 3º colocado: ' + positionsArray[2])

}

//Possibilidades de PODIUM:
positions("Daniel", "Manoel", "Rafael")
positions("Daniel", "Rafael", "Manoel")
positions("Rafael", "Manoel", "Daniel")
positions("Rafael", "Daniel", "Manoel")
positions("Manoel", "Daniel", "Rafael")
positions("Manoel", "Rafael", "Daniel")

