import React, { useState } from "react";

const FormularioLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUser = (e) => {
    console.log(e);
    setUser(e.target.value);
  };

  /* const onChange = (e) => {
    if (e.target.name === "user") {
      setUser(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }; */

  return (
    <form action="">
      <p>Usuario: {user}</p>
      <p>Contraseña: {password}</p>
      <div>
        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          name="usuario"
          id="usuario"
          value={user}
          onChange={onChangeUser}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" />
      </div>
      <button>Iniciar sesión</button>
    </form>
  );
};

export default FormularioLogin;
