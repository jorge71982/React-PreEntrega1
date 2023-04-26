import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Conteiner from './components/layout/Conteiner';
import ItemListContainer from './components/itemListContainer/ItemListContainer';





function App() {
  return (
    <div className="App">
      <Conteiner>
        <ItemListContainer/>
      </Conteiner>
    </div>
  );
}

export default App;
