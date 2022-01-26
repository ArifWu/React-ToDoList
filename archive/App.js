import logo from './logo.svg';
import './App.css';


// 雖然看起來我們在裡面寫HTML，但實際上是一個叫jsx的東西
// 也就是讓我們用寫js的方法去寫HTML
// 因為HTML已經有class了，react這邊命名為className
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
