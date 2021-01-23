import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  function handleClick() { alert("Hello React Event") };
  function display3Messages() {
    alert("To learn React use https://reactjs.org");
    alert("React and ReactDOM works together");
    alert("Babel helps in writing JSX");
  };
  function displayName(name) { alert("Hello "+name) };
  function fruitName(name) { alert("Hello "+name) };

  // The Fruits game
  let fruits = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
];



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to.
        </p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={display3Messages}>How can I help you?</button>
      <button onClick={() => displayName("Arya")}>Arya</button>
      <button onClick={() => displayName("John")}>John</button>
      <button onClick={() => displayName("Bran")}>Bran</button>
      <Button name="Arya"/>
      <Button name="John"/>
      <Button name="Bran"/>
      {fruits.map(fruit => <Button name={fruit.value} onClick={() => fruitName(fruit.value)} key={fruits.id}/>
      )}
      </header>
    </div>);
}

export default App;
