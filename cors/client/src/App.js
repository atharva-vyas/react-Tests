import logo from './logo.svg';
import './App.css';

function postReq() {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' })
  }
  
  fetch('http://localhost:3001/test', requestOptions).then(async(result) => {
    let data = await result.json()
    alert(data.data)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={postReq}>
            Send POST Request
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
