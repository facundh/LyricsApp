import React from "react";
import useLetras from "../hooks/useLetras";
import Alerta from "./Alerta";
import Formulario from "./Formulario";

const AppLyrics = () => {
  const {alerta} = useLetras();
  return (
    <>
      <header>Song lyrics search</header>
        <Formulario />
      <main>
        
        
             {alerta && <Alerta>{alerta}</Alerta>}
         
        
      </main>
    </>
  );
};

export default AppLyrics;
