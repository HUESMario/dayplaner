import './App.scss';
import { Nav } from './Nav';
import { Start } from "./start";

function App() {
  return (
    <div className="App">
      <Nav currentPage="start"/>
      <Start/>
    </div>
  );
}

export default App;
