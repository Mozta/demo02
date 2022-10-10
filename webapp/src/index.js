import React from "react";
import ReactDOM from "react-dom/client";
import Alumno from "./componentes/Usuario";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  let sesion = true;
  const cerrarSesion = () => {
    console.log("hola");
    sesion = false;
    console.log(sesion);
  };

  return (
    <>
      {sesion === true ? (
        <>
          <Alumno />
          <button onClick={cerrarSesion}>Cerrar sesion</button>
        </>
      ) : (
        <>
          <h2>No has iniciado sesión</h2>
          <button>Cerrar sesion</button>
        </>
      )}
    </>
  );
};

root.render(<App />);
