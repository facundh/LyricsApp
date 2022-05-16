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
      setAlerta('Enter the name of the artist or song')
      return
    }
    busquedaLetra(busqueda);
   
  };
  return (
    <form onSubmit={handleSubmit}>
      <legend> Search by Artists or Song </legend>
      <div className="form-grid">
        <div>
          <label htmlFor="">Artist</label>
          <input
            type="text"
            name="artista"
            placeholder="Artist"
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
          <label htmlFor="">Song</label>
          <input
            type="text"
            name="cancion"
            placeholder="Song"
            value={busqueda.cancion}
            onChange={(e) =>
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <input type="submit" value="Search" />
      </div>
    </form>
  );
};

export default Formulario;
