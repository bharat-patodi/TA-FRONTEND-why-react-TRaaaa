import logo from './logo.svg';
import './App.css';
import countries from './countries.json';



function App() {
  console.log(countries);

  function handleClick(emoji) {
    alert(emoji);
  }

  return (
    <div className="App">
      {countries.map(country => {
        return <button onClick={() => handleClick(country.emoji)} key={country.code}>{country.name}</button>
      })}
    </div>
  );
}

export default App;
