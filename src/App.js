import logo from './logo.svg';
import './App.css';
import { C01componente } from './components/C01componente';
import Contador1 from './components/C02componente';
import Contador2 from './components/C03componente';
import Contador3 from './components/C04componente';

function App() {
  return (
    <div>
      <C01componente/>  
      <hr/>   
      <Contador1/>
      <hr/>
      <Contador2/>
      <hr/>
      <Contador3/>
    </div>
  );
}

export default App;
