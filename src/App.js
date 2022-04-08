import './App.css';

//      - components -      \\
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <div className="container">
        <div>
          <img className='imgCont' id='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/1200px-League_of_Legends_2019_vector.svg.png' alt='epic lol logo' />
        </div>
        <h1>Cringe lp Calc for ur hardstuck needs</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
