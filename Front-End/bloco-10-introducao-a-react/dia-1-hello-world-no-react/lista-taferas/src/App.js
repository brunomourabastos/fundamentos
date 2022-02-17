import React from 'react';
import './App.css';

const compromissos = ['estudar', 'praticar', 'descansar', 'comer'];
console.log(compromissos.map((elemento) => elemento))

const Task = (value) => {
  return (
    <>
    <ol>Compromissos:
    {value.map((elemento) => <li>{elemento}</li>)}
    </ol>
    </>
  )
}
function App() {
  return (
    <div> {Task(compromissos)}</div>
    
  );
}

export default App;
