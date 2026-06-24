import "../style.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";
import { cards } from "../allData.js";

const Content = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageModules = import.meta.glob(
      "/public/images/chess/*.{png,jpg,jpeg,svg}",
    );

    const loadImages = async () => {
      const loadedImages = await Promise.all(
        Object.keys(imageModules).map(async (path) => {
          const mod = await imageModules[path]();
          return mod.default;
        }),
      );
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const swiper = new Swiper(".swiper", {
      loop: true,
      slidesPerView: 1,
      autoHeight: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });

    return () => swiper.destroy();
  }, [images]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chessIcons = [
    "fa-chess-king",
    "fa-chess-queen",
    "fa-chess-bishop",
    "fa-chess-knight",
    "fa-chess-rook",
    "fa-chess-pawn",
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* ── Swiper Slideshow ── */}
      <div
        className="swiper w-full"
        style={{ height: "clamp(260px, 70svh, 850px)" }}
      >
        <div className="swiper-wrapper">
          {images.map((src, index) => (
            <div className="swiper-slide" key={index}>
              <img
                src={src}
                alt={`Chess slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              {/* subtle dark gradient at bottom so pagination dots are visible */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
        <div className="swiper-pagination" />
      </div>

      {/* ── Marquee Banner ── */}
      <Marquee
        play
        speed={120}
        gradient={false}
        className="py-3 bg-gradient-to-r from-[#006ca7] via-[#1a3e8f] to-[#2a166f]"
      >
        <div className="flex items-center gap-10 px-6">
          {chessIcons.map((icon, i) => (
            <span
              key={i}
              className="text-white drop-shadow"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              <i className={`fa-solid ${icon}`} aria-hidden="true" />
            </span>
          ))}
          {/* spacer so the marquee doesn't look empty at the seam */}
          <span className="w-10" />
        </div>
      </Marquee>

      {/* ── Cards Grid ── */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((card, j) => (
            <div
              key={j}
              className="flex flex-col rounded-2xl overflow-hidden shadow-lg
                         bg-gradient-to-b from-[#006ca7] to-[#2a166f]
                         text-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Card image — fixed height so all cards align */}
              <div
                className="w-full flex items-center justify-center bg-white"
                style={{ height: "clamp(180px, 30vw, 320px)" }}
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-[75%] h-[75%] object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5 gap-4">
                <h2
                  className="font-bold text-center leading-tight"
                  style={{ fontSize: "clamp(1.2rem, 3vw, 1.75rem)" }}
                >
                  {card.title}
                </h2>

                <div className="mt-auto flex justify-center pt-2">
                  <Link to={card.link}>
                    <button className={card.buttonStyle}>{card.button}</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
