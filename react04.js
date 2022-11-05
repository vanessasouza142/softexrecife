
function QualSeuNome (props) {
  return (
  <h1> Olá, {props.name}, tudo bem?  </h1>
  )
}

function App () {
  return (
    <div>
    <QualSeuNome name="Vanessa"/>
    </div>
  )
}

export default App;
