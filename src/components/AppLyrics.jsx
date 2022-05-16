import React from "react";
import useLetras from "../hooks/useLetras";
import Alerta from "./Alerta";
import Formulario from "./Formulario";
import Letra from "./Letra";
import Spinner from "./Spinner";

const AppLyrics = () => {
  const {alerta, letra, cargando} = useLetras();
  return (
    <>
      <header>Song lyrics search</header>
        <Formulario />
      <main>
        
        
             {alerta ? 
             <Alerta>{alerta}</Alerta> 
             : letra ? <Letra /> 
             : cargando ? <Spinner />
             : <p className="text-center">Busca letras de tus artistas favoritos</p>}

        
      </main>
    </>
  );
};

export default AppLyrics;
