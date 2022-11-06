import React, {useState} from 'react';

function App() {
  const [cont, setcont] = useState(0);
  return (
  <div>
    <button onClick={() => setCont (cont+1)}>Clique Aqui</button> 
    <p> Você Clicou {cont} vezes!</p>
  </div>
  )
}


export default App;
