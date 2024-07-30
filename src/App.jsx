import React from 'react';
import Mensagem from './components/Mensagem';
import Frase from './components/Frase';
import Calculadora from './components/Calculadora';
import './App.css'

function App() {
 
function Saudacao(){
  return <h1>Hello Word 2</h1>
}

  return (
    <>
    <Saudacao/>
    <Mensagem texto="minha cal"/>
    <Frase/>
    <Calculadora/>
    </>
  )
}

export default App
