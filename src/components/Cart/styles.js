import React from 'react'
import styled from 'styled-components'
import ItemCart from '../ItemCart/styles'

const CartMain = styled.section`
box-sizing: border-box;
list-style: none;
margin: 0;
padding: 0;

background: #F5F5F5;

border-radius: .4rem;
min-height: 35vh;
max-height: 70vh;
width: inherit;
margin 0px .3rem;

display: flex;
flex-direction: column;
justify-content: space-between;

   .header__cart{
        background: #27AE60;
        border-radius: .4rem .4rem 0px 0px;
   } 

    .header__cart h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 1.1rem;

        color: #ffffff;
    }

   .msg__cart--vazio{

        margin: auto 0;

        h4{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 1rem;

            color: #333333;
        }

        span{

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: .8rem;

            color: #828282;
        }
   }

   ul{
       display: flex;
       flex-direction: column;
       gap: .7rem;
   }

   
   .div__total{
       height: 15vh;

       display: flex;
       flex-direction:column;
       justify-content: center;
       align-items: space-between;

       hr{
           width: 100%;
       }

       .total--valor{
           display: flex;
           justify-content: space-between;
           width: 100%;
       }

        h5{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 600;
            font-size: .7rem;

            color: #red;
        }  
        
        h4{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 600;
            font-size: .8rem;

            color: #828282;
        }

       button{

            margin-bottom: 1rem;
            border-style: none;
            background: #E0E0E0;
            border: solid #E0E0E0;
            border-radius: .3rem;
            padding: .5rem;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 600;
            font-size: .8rem;

            color: #828282;

       }
   }


`

function Cart({ currentSale,cartTotal,setCartTotal }){

    return (
        <CartMain>
            {
                currentSale[0]? 
                <>
                <div className='header__cart'>
                    <h3>Carrinho de compras</h3>
                </div>
                <ul>
                    {currentSale.map((produto)=> <ItemCart 
                    setCartTotal={setCartTotal}
                    currentSale={currentSale} 
                    key={produto.id} 
                    prod={produto}/>)}
                </ul>
                
                <div className='div__total'>
                    <hr/>
                    <div className='total--valor'>
                        <h5>Total</h5>
                        <h4>R$ <span>{cartTotal.toFixed(2)}</span></h4>                        
                    </div>
                    <button>Remover todos</button>
                </div>
                
                </>
                : 
                <>
                <div className='header__cart'>
                    <h3>Carrinho de compras</h3>
                </div>
                <div className='msg__cart--vazio'>
                    <h4>Sua sacola está vazia</h4>
                    <span>Adicione itens</span>
                </div>
                </>
                
            }
        </CartMain>
    )
}

export default Cart