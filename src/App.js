import logo from './logo.svg';
import './App.css';
import {Axios} from "axios";

function App() {

  const handleLogin = () => {
    let typeLogin = data.psych && data.psych.length > 0 ? "psychologist" : "user";
    Axios.post('http://localhost:3100/productos').then(res => {
      const action = {
        type: data.psych && data.psych.length > 0 ? types.loginPsych : types.loginUser,
        payload: res.data
      }
    })
        .catch(error => {
          console.log(error.response.data.message)
        })
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
