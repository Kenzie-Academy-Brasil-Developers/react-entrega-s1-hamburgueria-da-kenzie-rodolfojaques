import React from "react"
import styled from "styled-components"

const Card = styled.li`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;

min-width: 13rem;

list-style: none;
border: solid #E0E0E0;
border-radius: .4rem;

    &:hover{
        box-shadow: 0px 0px .2rem .1px;
    }


    div{
        width: 100%;
        background: #F5F5F5;
    
        img{

            width: 50%;
            height: 7rem;
        }
    }

    h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;

        color: #333333;

        margin-left: .7rem;
        
    }

    .category{

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: .8rem;

        color: #828282;

        margin-left: .7rem;
    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        color: #27AE60;

        margin-left: .7rem;
    }

    button{

        background: #27AE60;
        border: 2px solid #27AE60;
        border-radius: .5rem;
        padding: .1rem .2rem

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: .8rem;
        color: #ffffff;

        min-width: 5rem;
        min-height: 1.8rem;
        margin-left: .7rem;
        margin-bottom: .7rem;
    }

`

function Products({prod,handleClick}){

    return(
        <>
            <Card id={prod.id}>
                <div>
                    <img src={prod.img} alt="" />
                </div>                
                <h3>{prod.name}</h3>
                <span className="category">{prod.category}</span>
                <p>R$ <span>{(prod.price).toFixed(2)}</span></p>
                <button onClick={handleClick}>Adicionar</button>
            </Card>        
        </>

    )
}

export default Products