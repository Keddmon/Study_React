import './App.css';
import JsFirstChild from './components/JsFirstChild';
import JsSecondChild from './components/JsSecontChild';

import TsFirstChild from './components/TsFirstChild.tsx';
import TsSecondChild from './components/TsSecondChild.tsx';

function App() {
  return (
    <div className="App">
      <div className="zustand-test">
        <header className="App-header">
          <JsFirstChild />
          <JsSecondChild />
        </header>
        <header className="App-header">
          <TsFirstChild />
          <TsSecondChild />
        </header>
      </div>
    </div>
  );
}

export default App;