import Products from "../Product/styles"
import './style.css'
import { useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



function ProductList({ products,setCurrentSale,currentSale,filteredProducts }){

    const handleClick = (e)=> {

        e.preventDefault()

        const test = currentSale.some((item) => item.id === Number(e.target.parentNode.id))

        if(!test){
            const prodCart = products.filter((item)=> item.id === Number(e.target.parentNode.id))
            setCurrentSale([...currentSale,...prodCart])             
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

    return(
        <ul>
            <ToastContainer/>
            {
            
                !filteredProducts[0]?
                products.map((produto)=> <Products 
                key={produto.id} 
                prod={produto}
                handleClick={handleClick}
                />) 
                :
                filteredProducts.map((produto)=> <Products 
                key={produto.id} 
                prod={produto}
                handleClick={handleClick}
                />)
                                   
            }
        </ul>
    )
}

export default ProductList
