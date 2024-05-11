import React, { useEffect } from "react";
import "./Home.css";
import sliderImage from "../../assets/Litigation-and-Dispute-Resolution.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import logo from "../../assets/logo.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <section id="home" className="home">
      <Swiper
        onSlideChange={AOS.refresh()}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="slide">
            <img
              data-aos="fade-right"
              className="slideimg"
              src={sliderImage}
              alt="sliderimage"
            ></img>
            <div className="slidecontent">
              <h data-aos="fade-down">
                Count on us for reliable legal support. Our goal is to achieve
                favorable outcomes for all our clients.
              </h>
              <button data-aos="fade-left" className="slideBtn">
                Get in Touch
              </button>
            </div>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img
              data-aos="fade-right"
              className="slideimg"
              src={logo}
              alt="sliderimage"
            ></img>
            <div className="slidecontent">
              <h data-aos="fade-down">
                Step into a world of legal excellence with G.M ORINA & Co.
                ADVOCATES.We stand as your trusted partner in navigating the
                legal landscape.
              </h>
              <button data-aos="fade-left" className="slideBtn">
                Contact Us
              </button>
            </div>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Home;
