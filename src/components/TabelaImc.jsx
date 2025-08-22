const TabelaIMC = (result) => {
    if(result < 18){
        return(
            <>
            <td>Abaixo do peso</td>
            <td>Abaixo de 18</td>
            </>
        )
    }else if(result > 18 && result < 25){
        return(
            <>
            <td>Peso normal</td>
            <td>18 - 24.9</td>
            </>
        )
    }else if(result > 25 && result < 30){
        return(
            <>
            <td>Sobre peso</td>
            <td>25 - 29</td>
            </>
        )
    }else if(result > 29 && result < 35){
        return(
            <>
            <td>Obesidade grau 1</td>
            <td>30 - 34.9</td>
            </>
        )
    }else{
        return(
            <>
            <td>Obesidade Mórbida</td>
            <td>Maior que 34.9</td>
            </>
        )
    }
}

export default TabelaIMC