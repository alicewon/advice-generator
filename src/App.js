import logo from './logo.svg';
import './App.css';
import Card from './components/Card';


function App() {
  let advice = "Some of life's best lessons are learnt at the worst times."
  let id = 164;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Advice #{id}
        </p>
        <p>
          {advice}
        </p>
        <Card/>
      </header>
    </div>
  );
}

export default App;
