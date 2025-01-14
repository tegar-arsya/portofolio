// Import React dan lainnya sesuai kebutuhan
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Metadata
export const metadata = {
  title: "Tegar Arsya",
  description: "Tegar Arsya",
};

// Komponen Home
export default function Home() {
  return (
    <div>
      <div className="flex h-[80vh] w-full flex-col justify-center px-0 pt-44 leading-relaxed md:h-screen md:pt-16 lg:px-[70px] lg:pt-12">
      <Slider
  dots
  infinite
  speed={500}
  slidesToShow={1}
  slidesToScroll={1}
  autoplay
  style={{
    position: 'absolute',
    top: 150,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  }}
>
  <div>
    <img src="/images/tg.jpg" alt="Image 1" />
  </div>
  <div>
    <img src="/images/tg.jpg" alt="Image 2" />
  </div>
  {/* Tambahkan gambar tambahan sesuai kebutuhan */}
</Slider>


        <p
          className="ml-1 hidden pb-3 text-sm text-white md:block md:pb-7 md:text-base"
          data-aos="fade-up"
        >
          Hi, my name is
        </p>
        <h1
          className="pb-1 text-4xl font-semibold text-white md:mt-0 md:pb-4 md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          PADUKUHAN 
        </h1>
        <h1
          className="pb-4 text-4xl font-semibold text-green-500 md:pb-8 md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          I build things for the web.
        </h1>
        <p
          className="w-full text-sm leading-relaxed text-white md:w-[540px] md:text-base"
          data-aos="zoom-in-up"
        >
          Saya seorang programmer web. Pengalaman saya membuat web dengan PHP dan JavaScript, tapi saya sedang belajar menggunakan React dan Laravel.
        </p>
        <div
          className="mt-10 text-sm md:mt-14"
          data-aos="flip-up"
          data-aos-duration="600"
        >
          {/* Konten tambahan jika diperlukan */}
        </div>
      </div>
      <div className="flex h-[650px] w-full flex-col items-center justify-center py-24 text-center">
        <div className="z-40 mb-0 md:mb-10">
          <h2
            className="pb-2 text-3xl font-bold leading-tight text-green-500 md:pb-0 md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-relaxed"
            data-aos="zoom-in-up"
            data-aos-duration="300"
            style={{ marginTop: '200px'}}
          >
            Delivering modern,
            <br />
            cohesive & intuitive web solution.
          </h2>
          <p
            className="text-sm text-black md:text-base"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            I enjoy designing meaningful experiences for brands & businesses to help them serve their target users.
          </p>
        </div>
      </div>
    </div>
  );
}
