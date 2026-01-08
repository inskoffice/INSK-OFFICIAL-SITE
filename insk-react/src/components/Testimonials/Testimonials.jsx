import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    text: "Fast communication, excellent design quality, and reliable service. They understood our vision and turned it into something amazing.",
    name: "Tina Brown",
    role: "CEO, Nexella",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 4
  },
  {
    id: 2,
    text: "Outstanding service and communication! The team went above and beyond to deliver exceptional results for our business needs.",
    name: "David Silva",
    role: "Marketing Director",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5
  },
  {
    id: 3,
    text: "Professional, reliable, and creative. They transformed our vision into reality with amazing attention to detail and expertise.",
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 5
  },
  {
    id: 4,
    text: "Incredible work ethic and expertise. The results exceeded our expectations in every way possible. Highly recommended!",
    name: "Michael Chen",
    role: "Business Owner",
    avatar: "https://i.pravatar.cc/150?img=33",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__left">
          {/* <div className="testimonials__badge">
            <span className="testimonials__icon">⭐</span>
            Our Testimonials
          </div> */}
          
          <h2 className="testimonials__title">
            What <span class="gradient-text">Our Happy Clients</span>  Say About Us.
          </h2>
          
          <div className="testimonials__image-wrapper">
            <img 
              src="/images/insk-testimonial.jpg"  
              alt="Happy customers"
              className="testimonials__image"
            />
            <div className="testimonials__badge-overlay">
              <div className="testimonials__avatars">
                <img src="https://i.pravatar.cc/60?img=1" alt="Customer" />
                <img src="https://i.pravatar.cc/60?img=2" alt="Customer" />
                <img src="https://i.pravatar.cc/60?img=3" alt="Customer" />
                <img src="https://i.pravatar.cc/60?img=4" alt="Customer" />
                <div className="testimonials__avatar-more">+</div>
              </div>
              <p className="testimonials__customer-count">300+ Happy Customer</p>
            </div>
          </div>
          
          
        </div>

        <div className="testimonials__right">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: '.testimonials__nav-next',
              prevEl: '.testimonials__nav-prev',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonials__swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonials__card">
                  <div className="testimonials__quote-icon">"</div>
                  
                  <div className="testimonials__stars">
                    {[...Array(5)].map((_, index) => (
                      <span 
                        key={index}
                        className={index < testimonial.rating ? 'star-filled' : 'star-empty'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  
                  <p className="testimonials__text">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="testimonials__author">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="testimonials__avatar"
                    />
                    <div className="testimonials__author-info">
                      <h4 className="testimonials__author-name">{testimonial.name}</h4>
                      <p className="testimonials__author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonials__navigation">
            <button className="testimonials__nav-prev">←</button>
            <button className="testimonials__nav-next">→</button>
          </div>

          <div className="testimonials__rating">
            <div className="testimonials__rating-number"> <span className="gradient-text">4.8</span></div>
            <div className="testimonials__rating-text">(5k+) Customer reviews</div>
          </div>

          
        </div>
      </div>
    </section>
  );
}