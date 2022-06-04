import React,{useState} from 'react'
import { ContainerMenu,BarsMenu,ListaMenu,ContLista } from './MenuStyled'
import { FaAlignJustify } from 'react-icons/fa';
const Menu = () => {
     const Toggle = () =>{
        const [isToggle, setIsToggle] = useState();
    }

    const handleClick = () => {

    }



  return (
      <>
      <BarsMenu onClick={handleClick}>
          <FaAlignJustify style={{color:"#f0ffff"}}/>
      </BarsMenu>
   <ContainerMenu>
       <ListaMenu>
           <ContLista>Inicio</ContLista>
           <ContLista>Contacto</ContLista>
           <ContLista>Nosotros</ContLista>
           <ContLista>Login</ContLista>
           <ContLista>Carrito</ContLista>
       </ListaMenu>
   </ContainerMenu>
      </>
  )
}

export default Menu