import logo from './logo.svg';
import './App.css';
import Navbar from './navigation/Navbar.js';
import LandingPage from './LandingPage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <LandingPage />
      </body>
    </div>
  );
}

export default App;
