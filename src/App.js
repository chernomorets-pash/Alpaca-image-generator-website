import './App.css';
import Avatar from './components/Avatar-window/Avatar';
import Buttons from './components/Buttons/Buttons';

function App() {
  return (
    <div className="App">
    <div className="main">
      <h1 className='App__title'>alpaca generator</h1>
      <div className="main__wrapper">
        <div className="main__left">
          <Avatar />
        </div>
        <div className="main__right">
          <Buttons />
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
