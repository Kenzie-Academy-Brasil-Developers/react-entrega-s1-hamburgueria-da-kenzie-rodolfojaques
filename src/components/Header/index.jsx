import './style.css'

function Header({setFilteredProducts,products}){

    const showProducts = (e)=> {

        e.preventDefault()

        const input = e.target.parentNode.children[0].value

        const dataFilter = products.filter(item => item.name.toLowerCase().includes(input) || item.category.toLowerCase().includes(input))
    
        setFilteredProducts(dataFilter)
    }

    return (
        <header>
            <div className="logo">
                <h1>Burger</h1>
                <h3>Kenzie</h3>  
            </div>
            <div className='nav_bar'>
                <input type="text" placeholder='Digitar Pesquisa'/>
                <button onClick={showProducts}>Pesquisar</button>
            </div>
        </header>
    )
}

export default Header