import logo from './logo.svg';
import './App.css';
import AddProduct from './Component/AddProduct';
import Product from './Component/Products';


function App() {
  return (
    <div className="App">
      <h1>Yashika's Store</h1>
      <AddProduct/>
      <Product/>
    </div>
  );
}

export default App;
