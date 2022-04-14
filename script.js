//Entrega S03-10 - Funções e Arrays

//Estratégia:
//Rafael, Manoel e Daniel = Lista de competidores
//Daniel tem vantagem (1 lugar)
//Desenvolver a função para criar o podium


//Se firstPlace = Daniel - Nada acontece;
//Se secondPlace = Daniel - Inverte com o firstPlace
//Se lastPlace = Daniel - Inverte com o secondPlace, mantém o firstPlace


function positions(firstPlace, secondPlace, lastPlace){
    let positionsArray = [firstPlace, secondPlace, lastPlace]

    if (firstPlace === "Daniel"){
        podium = firstPlace
    }
    else if(secondPlace === "Daniel"){
        podium = secondPlace
    }
    else if(lastPlace === "Daniel"){
        podium = firstPlace
    }   

console.log('1o colocado:' + podium)
}

//Possibilidades de PODIUM:
positions("Daniel", "Manoel", "Rafael")
positions("Daniel", "Rafael", "Manoel")
positions("Rafael", "Manoel", "Daniel")
positions("Rafael", "Daniel", "Manoel")
positions("Manoel", "Daniel", "Rafael")
positions("Manoel", "Rafael", "Daniel")















