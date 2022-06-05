import React from "react";
import styled from "styled-components"
import { useEffect } from "react";


const Item = styled.li`

display: flex;
justify-content: space-between;
align-items: flex-start;

width: 100%;
height: 33%;




    .container{
        display:flex;
        gap: .3rem;
    }

    .div__img{
        border-radius: .4rem;

        background: #E0E0E0;
        width: 5rem;
        height: 5rem;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        max-width: 3.5rem;
    }

    .div__infos{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .div__infos h4{

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: .8rem;

        margin: .3rem 0;

        color: #333333;
    }

    .div__infos span{

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: .7rem;

        color: #828282;
    }

    span{
        margin-top: .3rem;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: .6rem;

        color: #BDBDBD
    }
`

function ItemCart({ prod,setCartTotal,currentSale }){

    useEffect(()=>{
        setCartTotal(currentSale.reduce((a,b) => (a + b.price),0))
    },[])


    return(
        <>
        <Item id={prod.id}>
            <div className="container">
                <div className="div__img">
                    <img src={prod.img}/>
                </div>
                <div className="div__infos">
                    <h4>{
                        prod.name.length > 14?
                        prod.name.slice(0,15) + "..."
                        :
                        prod.name
                    }</h4>
                    <span>{prod.category}</span>
                </div>
            </div>
            <span>Remover</span>
        </Item>
        </>
    )
}

export default ItemCart