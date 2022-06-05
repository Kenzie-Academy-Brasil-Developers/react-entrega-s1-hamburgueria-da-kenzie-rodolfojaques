import Products from "../Product/styles"
import './style.css'

function ProductList({ products,filteredProducts,handleClick }){

    return(
        <ul className="ul">
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
