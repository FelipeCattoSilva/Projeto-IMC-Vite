import "../css/global.css"
import "../css/result.css"
import TabelaIMC from "./TabelaImc"

function Result({result}){
    return(
        <div>
            <div className="result">
                <h2>Seu IMC é de: <span className="imcSpan">{result}</span></h2>
            </div>

            <table className="tabela">
                <thead className="tabelaHeader">
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                
                <tbody className="tabelaBody">
                    <tr>{TabelaIMC(result)}</tr>
                </tbody>
            </table>
        </div>
    )
}

export default Result