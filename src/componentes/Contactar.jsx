import { useNavigate } from "react-router-dom";

const Contactar = () => {
  const navegar = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias, estamos en contacto ✈️");
    navegar("/");
  };
  return (
    <>
      <form
        className="bg-slate-900 text-amber-400 text-3xl text-center rounded-sm border-8 border-double border-amber-300 mx-auto max-w-3xl mb-3 p-1 mt-10%"
        onSubmit={(e) => handleSubmit(e)}
      >
        <fieldset className="p-8">
          Completá con los datos y pronto nos pondremos en contacto 😉⏲️
        </fieldset>
        <label htmlFor="nombre">Nombre:</label>
        <input
          className="mb-4 w-full sm:w-auto sm:ml-1"
          type="text"
          name="nombre"
        />
        <br />
        <label htmlFor="mail">E-mail:</label>
        <input
          className="mb-4 w-full sm:w-auto sm:ml-1"
          type="email"
          name="mail"
        />
        <br />
        <label className="pb-12" htmlFor="asunto">
          Asunto:
        </label>
        <input
          className="mb-12 w-full sm:w-auto sm:ml-1"
          type="email"
          name="correo"
        />
        <br />
        <button className="p-4 mb-4 border-2 border-amber-300" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};
export default Contactar;
