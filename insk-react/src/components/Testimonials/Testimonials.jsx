import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section id="client" className="feedback section">
      <div className="container">
        <h2 className="section-header">Happy Customers</h2>

        <Swiper modules={[Pagination, Autoplay]} autoplay loop>
          <SwiperSlide>
            <div className="feedback__card">
              <p>Outstanding service and communication!</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
