import React from "react";

const TituloRojo = () => {
  const name = "Rafael";
  return (
    <h1 className="titulo" style={{ color: "red" }}>
      Hola {name}
    </h1>
  );
};

const TituloVerde = () => {
    const name = "Rafael";
    return (
      <h1 className="titulo" style={{ color: "green" }}>
        Hola {name}
      </h1>
    );
  };

// export default Titulo;
export {TituloRojo, TituloVerde};
