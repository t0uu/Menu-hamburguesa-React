import React,{useState,useRef} from 'react'
import { ContainerMenu,BarsMenu,ListaMenu,ContLista } from './MenuStyled'
import { FaAlignJustify } from 'react-icons/fa';
import { gsap } from "gsap";
const Menu = () => {


    // La idea de hoy es realizar un menú de hamburguesa (con estilos, animaciones y transiciones a gusto).
// Donde buscaremos implementar el evento onClick al momento de manipular el menú, y useState para verificar si está o no “Open”. 
// También se debe implementar el useRef, para activar la animación del menú (tanto de apertura, como de cierre).


    const refContainer = useRef();
    const [Open, setOpen] = useState('none');


    const handleClick = () => {
        if(Open == 'none'){
        setOpen('block')
        gsap.to(refContainer.current,{duration: 3.5, ease: "power3.out",opacity:1});
       }else{
        setOpen('none')
        gsap.to(refContainer.current,{duration: 2.5, ease: "power3.out",opacity:0});
       }
    }

         
    

  return (
      <>
      <BarsMenu onClick={handleClick} >
          <FaAlignJustify style={{color:"#f0ffff"}}/>
      </BarsMenu>

   <ContainerMenu ref={refContainer} style={{display:Open}}>
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