import { useState } from 'react'
import './App.css'

function App() {
  const [primeiroValor, setPrimeiroValor] = useState()
  const [segundoValor, setSegundoValor] = useState()
  const [resultado,setResultado] = useState()

  const  CapturarValor = (item) => {
    setPrimeiroValor(Number(item.target.value))
  }
  const CapturarSegundoValor = (item) =>{
    setSegundoValor(Number(item.target.value))
  }
  const Soma = () =>{
    setResultado(primeiroValor + segundoValor)
  }

  

  return (
    <>
  <h1>Calculadora</h1>
  <input type="number" onChange={CapturarValor} />
  <input type="number" onChange={CapturarSegundoValor} />
  <button onClick={Soma}>+</button>
  <h1>{resultado}</h1>
    </>
  )
}

export default App
