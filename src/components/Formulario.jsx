import React, { useState } from "react";
import useLetras from "../hooks/useLetras";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });
  const { setAlerta, busquedaLetra } = useLetras();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta('Coloca nombre de artista o canción')
      return
    }
    busquedaLetra(busqueda);
   
  };
  return (
    <form onSubmit={handleSubmit}>
      <legend> Busca por Artistas o Canción </legend>
      <div className="form-grid">
        <div>
          <label htmlFor="">Artista</label>
          <input
            type="text"
            name="artista"
            placeholder="Busca tu artista"
            value={busqueda.artista}
            onChange={(e) =>
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="">Canción</label>
          <input
            type="text"
            name="cancion"
            placeholder="Busca tu canción"
            value={busqueda.cancion}
            onChange={(e) =>
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <input type="submit" value="Buscar" />
      </div>
    </form>
  );
};

export default Formulario;
