import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import AllRoute from './Component/Pages/Routes/AllRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoute/>
    </div>
  );
}

export default App;
