import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  return (
    <>
      <h1 className="bg-slate-900 text-amber-400 text-3xl text-center rounded-sm border-8 border-double border-amber-300 mb-3 ">
        Bienvenidos a Exploramundo
      </h1>
      <h2 className="text-amber-600 text-2xl text-center mb-9">
        Descubre el mundo, descúbrete a ti mismo
      </h2>

      <Swiper
        spaceBetween={0}
        loop
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            className="w-full h-96"
            src="https://images.unsplash.com/photo-1636469804970-33183abae494?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-96"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-96"
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-96"
            src="https://images.unsplash.com/photo-1589891685377-61b580ab692a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1273&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-96"
            src="https://plus.unsplash.com/premium_photo-1675711751410-4f980017b3ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-96"
            src="https://images.unsplash.com/photo-1506995292672-416a03419575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1051&q=80"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-96"
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1096&q=80"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-96"
            src="https://images.unsplash.com/photo-1534360682754-fb2d73fd4e56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-96"
            src="https://images.unsplash.com/photo-1586066931534-1b2ff64450b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-96"
            src="https://images.unsplash.com/photo-1583217214659-8c2195525e25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1041&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-96"
            src="https://images.unsplash.com/photo-1596627116790-af6f46dddbda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-96"
            src="https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
        </SwiperSlide>
      </Swiper>

      <p className="text-amber-600 text-center mb-3 pt-9">
        Exploramundo es más que un portal de viajes, es tu compañero para
        descubrir el mundo.
        <br />
        Ofrecemos una gama variada de destinos, servicios personalizados,
        <br />
        consejos de expertos, y experiencias únicas para cada tipo de viajero.
        <br />
        Nuestro compromiso es convertir cada viaje en una historia inolvidable.
        <br />
        Explora, sueña, y descubre con nosotros. Tu aventura comienza acá.
        <br />
      </p>
    </>
  );
};

export default Home;
