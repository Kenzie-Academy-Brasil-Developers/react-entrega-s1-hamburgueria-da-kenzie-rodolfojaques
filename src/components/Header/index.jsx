import './style.css'

function Header({showProducts}){


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