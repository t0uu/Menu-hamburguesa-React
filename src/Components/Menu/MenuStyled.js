import styled from "styled-components"


export const BarsMenu = styled.span`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
margin: 1rem;
width: 2rem;
margin: 1rem auto;
font-size: 2rem;
:hover{
cursor: pointer;
}
`




export const ContainerMenu = styled.div`
width: 300px;
height: 300px;
border: 1px solid white;
margin: auto;
`


export const ListaMenu = styled.ul`
font-size: 1.5rem;
color: white;
list-style: none;
align-items: center;
text-align: center;
width: 220px;
`

export const ContLista = styled.li`
margin: 1rem;
:hover{
    cursor: pointer;
    color: #d4a373;
    transition: 200ms;
}
`