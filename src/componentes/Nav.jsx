import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" flex justify-between w-full">
      <Link to="/">
        <div className="flex flex-row pr-20 ">
          <img
            className="w-20 h-20 -mt-8"
            src="https://st4.depositphotos.com/8499796/39471/v/600/depositphotos_394711436-stock-illustration-plane-travel-icon-air-travel.jpg"
          />
          <p className="sm:inline-block hidden">Disfruta cada momento</p>
        </div>
      </Link>
      <div className="flex flex-row ">
        <ul className="flex flex-row gap-5">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/viajes">Viajes</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/contactar">Contactar</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
