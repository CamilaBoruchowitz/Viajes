import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navegar = useNavigate();
  const [formData, setFormData] = useState({
    usuario: "",
    contrasena: "",
  });
  //   manejador de evento o acciones, los ...spredoperator es para traeme todo lo anterior(formData) el nombre con el valor
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  //   fun para q busque los existentes
  const usuarioExistente = JSON.parse(localStorage.getItem(formData.usuario));

  const handleRegistro = (e) => {
    e.preventDefault();
    if (formData.usuario.length > 0 && formData.contrasena.length > 0) {
      localStorage.setItem(formData.usuario, JSON.stringify(formData));
      navegar("/viajes");
    } else {
      alert("Debes ingresar un usuario y/o contraseña válida");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      usuarioExistente.usuario === formData.usuario &&
      usuarioExistente.contrasena === formData.contrasena
    ) {
      navegar("/viajes");
    } else {
      alert(
        "Debes estar registrado para ingresar o has puesto usuario y/o contraseña inválida"
      );
    }
  };

  return (
    <>
      <form
        className="bg-slate-900 text-amber-400 text-3xl text-center rounded-sm border-8 border-double border-amber-300 mx-auto max-w-3xl mb-3 p-1 mt-10%"
        onSubmit={(e) => handleSubmit(e)}
      >
        <fieldset>
          <legend className="p-8">
            ¡ Registrate para obtener descuentos !
          </legend>
          <label htmlFor="usuario">Usuario: </label>
          <input
            className="w-full sm:w-auto sm:ml-1 mb-7 text-2xl sm:text-3xl"
            type="text"
            name="usuario"
            placeholder="Escriba su usuario"
            // onchange es para cada cambio de ese input
            onChange={handleChange}
            value={formData.usuario}
          />
          <br />
          <label htmlFor="contrasena">Contraseña: </label>
          <input
            className="mb-16 w-full sm:w-auto sm:ml-1 text-2xl sm:text-3xl"
            type="password"
            name="contrasena"
            placeholder="Escriba su contraseña"
            onChange={handleChange}
            value={formData.contrasena}
          />
          <br />
          <div className="flex justify-around ">
            <button
              className="border rounded p-3 bg-blue-800 text-white text-2xl sm:text-3xl"
              type="submit"
            >
              Ingresar
            </button>
            <button
              className="border rounded p-3 bg-green-700 text-white text-2xl sm:text-3xl"
              type="button"
              onClick={(e) => handleRegistro(e)}
            >
              Registrarse
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default Login;
