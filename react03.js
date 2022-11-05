import './App.css';

function Welcome (props) {
  return <h1> Olá, {props.name}  </h1>
}

function App () {
  return (
    <div>
      <Welcome name="Sarah"/>
      <Welcome name="Juliana"/>
      <Welcome name="Paulo"/>
    </div>
  )
}

export default App;
