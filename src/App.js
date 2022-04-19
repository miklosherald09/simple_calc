import './App.css';
import Display from './components/dumb/Display'
import ButtonGroups from './components/smart/ButtonGroups'
import { CalcProvider } from "./CalcContext";

function App() {

  return (
    <CalcProvider>
      <div className="App">
        <div className="wrapper">
          <Display />
          <ButtonGroups />
        </div>
      </div>
    </CalcProvider>
  );
}

export default App;
