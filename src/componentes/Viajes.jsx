import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Viajes = () => {
  const navegar = useNavigate();
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/72d6dca1-4d27-4932-b9dc-85d0374870c7")
      .then((res) => res.json())
      .then((data) => setViajes(data));
  }, []);

  return viajes.map((paquete) => {
    return (
      <div
        onClick={() => navegar("/contactar")}
        className="bg-slate-800 rounded-lg mb-4 p-3 text-lg text-center mx-auto max-w-3xl cursor-pointer"
        key={paquete.id}
      >
        <h1 className="text-xl text-amber-500">{paquete.name}</h1>
        <h2 className="text-amber-400">USD ${paquete.price}</h2>
        {/* no es necesario poner un return porque devuelve 1 solo elemento y no esta entre {} */}
        <div className="flex flex-col md:flex-row mx-auto max-w-md justify-center">
          {paquete.images.map((image, index) => (
            <img className="h-60 w-60 mx-auto" key={index} src={image} />
          ))}
        </div>

        {paquete.itinerary.map((day, index) => (
          <h3 className="text-amber-300 py-2" key={index}>
            {day}
          </h3>
        ))}
      </div>
    );
  });
};

export default Viajes;
