import Header from "./components/Header"
import Result from "./components/Result"
import "./css/global.css"
import "./css/style.css"
import { useState, useEffect } from "react"

function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [result, setResult] = useState(0)
  const [mostrarResultado, setMostrarResultado] = useState(false)

  const calcularIMC = () => {
    const imc = peso / (altura * altura)
    return setResult(imc.toFixed(2))
  }
  useEffect(() => {
    result > 0 ? setMostrarResultado(true) : setMostrarResultado(false)
  },[result])

  return (
    <div className="container">
      <div className="box">
        <Header/>
        <form>
          <div>
            <label htmlFor="altura"><span className="span">(exemplo: 1.80)</span></label>
            <input type="number" id="altura" placeholder="Digite a sua altura" onBlur={({target}) => setAltura(parseFloat(target.value))}></input>
          </div>

          <div>
            <label htmlFor="peso"><span className="span">(exemplo: 80)</span></label>
            <input type="number" id="peso" placeholder="Digite seu peso" onBlur={({target}) => setPeso(parseFloat(target.value))}></input>
          </div>

          <button onClick={calcularIMC}>Calcular</button>
        </form>
      </div>
      {mostrarResultado && (
        <Result result={result}/>
      )}
    </div>
  )
}

export default App