import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter} from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductItem from './components/ProductItem';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ProductList />
        <ProductItem />
      </BrowserRouter>
    </div>
  );
}

export default App;
