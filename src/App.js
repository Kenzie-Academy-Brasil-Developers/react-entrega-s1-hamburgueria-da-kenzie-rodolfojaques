import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Cart from './components/Cart/styles';

function App() {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  console.log(filteredProducts);

  const Url = "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
  useEffect(()=> {

    fetch(Url)
    .then(resp => resp.json())
    .then(resp => setProducts(resp))
    .catch(err => err)
  }, [])

  return (
    <div className="App">
      <Main>
        <Header
        products={products}
        setFilteredProducts={setFilteredProducts}
        />
        <ProductList 
        setCurrentSale={setCurrentSale}
        products={products}
        currentSale={currentSale}
        filteredProducts={filteredProducts}
        />
        <Cart 
        currentSale={currentSale} 
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        />
      </Main>      
    </div>
  );
}

export default App;
