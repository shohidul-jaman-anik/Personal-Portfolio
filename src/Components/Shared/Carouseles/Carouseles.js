import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const Carouseles = ({ images, className }) => {
  return (
    <Container className={`p-0 ${className ?? ""}`}>
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        style={{ width: "100%", height: "100%" }}
      >
        {images.map((src, i) => (
          <SwiperSlide
            key={i}
            className="d-flex align-items-center justify-content-center bg-light"
            style={{ height: "400px" }} // Set default height, adjust as needed
          >
            <img
              src={src}
              alt={`carousel-img-${i}`}
              className="img-fluid mx-auto"
              style={{ maxHeight: "100%", objectFit: "contain" }}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carouseles;
