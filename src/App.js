import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Cart from './components/Cart/styles';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  const Url = "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
  useEffect(()=> {

    fetch(Url)
    .then(resp => resp.json())
    .then(resp => setProducts(resp))
    .catch(err => err)
  }, [])

  const eraseCart = (e)=>{
    
    e.preventDefault()

    setCurrentSale([])
  }

  const deleteItemCart = (e)=> {
    
    e.preventDefault()
    
    const itemDel = currentSale.filter((item)=> item.id !== Number(e.target.parentNode.id))
    setCurrentSale(itemDel)
  }

  const handleClick = (e)=> {

    e.preventDefault()

    const test = currentSale.some((item) => item.id === Number(e.target.parentNode.id))

    if(!test){
        const prodCart = products.find((item)=> item.id === Number(e.target.parentNode.id))
        setCurrentSale([...currentSale, prodCart])             
    }else{

        toast.error('Você já possui este item no carrinho!', {
            position:"bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }       
  }


  const showProducts = (e)=> {

    e.preventDefault()

    const input = e.target.parentNode.children[0].value

    const dataFilter = products.filter(item => item.name.toLowerCase().includes(input.toLowerCase()) || item.category.toLowerCase().includes(input.toLowerCase()))

    setFilteredProducts(dataFilter)
  }

  return (
    <div className="App">
      <Main>
      <ToastContainer/>
        <Header
        products={products}
        setFilteredProducts={setFilteredProducts}
        showProducts={showProducts}
        />
        <div className='Container'>
          <ProductList 
          handleClick={handleClick}
          products={products}
          filteredProducts={filteredProducts}
          />
          <Cart 
          currentSale={currentSale} 
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          eraseCart={eraseCart}
          deleteItemCart={deleteItemCart}
          />
        </div>

      </Main>      
    </div>
  );
}

export default App;
