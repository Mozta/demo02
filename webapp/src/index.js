import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const name = "Rafael";
const sesion = true;
const apellido = "";

const alumnos = ["Andrea", "Aldo", "Abraham"];
// fragments
const jsx = (
  <>
    {sesion === false ? (
      <>
        <h1 className="titulo" style={{ color: "red" }}>
          Hola {name}
        </h1>
        {apellido && <p>Tu apellido es: {apellido}</p>}

        <h3>Lista de alumnos</h3>
        <ul>
          {alumnos.map((nombre,i) => {
            return <li key={i}>{nombre}</li>;
          })}
        </ul>
      </>
    ) : (
      <h2>No has iniciado sesión</h2>
    )}
  </>
);

root.render(jsx);

/* const compruebaSesion = (sesion) => {
  if (sesion === true){
    return jsx;
  } else{
    return <h2>No has iniciado sesión</h2>
  }
}
root.render(compruebaSesion(sesion)); */
