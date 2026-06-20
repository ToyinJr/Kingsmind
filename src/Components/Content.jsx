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
          return mod.default; // Returns the parsed URL string
        }),
      );
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      slidesPerView: 1,
      autoHeight: false,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        // pauseOnMouseEnter: true,
      },
    });

    return () => swiper.destroy();
  }, [images]);
  window.scrollTo(0, 0);
  return (
    <div className=" p-2 ">
      <div className="swiper w-full h-[78vh] lg:h-[80vh] max-sm:h-[65vh] object-center rounded-lg">
        <div className="swiper-wrapper">
          {images.map((src, index) => (
            <div className="swiper-slide" key={index}>
              {/* 2. Forced the image to fill the slide perfectly without stretching */}
              <img
                src={src}
                alt={`Loaded ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <Marquee
        play={true}
        speed={150}
        clones={3}
        className="my-4 p-4 bg-linear-to-b from-[#006ca7] from-50% to-[#2a166f] to-50% text-white text-4xl"
      >
        <div className="flex space-x-30">
          <div>
            <i class="fa-solid fa-chess-king"></i>
          </div>
          <div>
            <i class="fa-solid fa-chess-queen"></i>
          </div>
          <div>
            {" "}
            <i class="fa-solid fa-chess-bishop"></i>
          </div>
          <div>
            <i class="fa-solid fa-chess-knight"></i>
          </div>
          <div>
            <i class="fa-solid fa-chess-rook"></i>
          </div>
          <div>
            <i class="fa-solid fa-chess-pawn"></i>
          </div>

          <div className="hidden">
            <p>Lorem</p>
          </div>
        </div>
      </Marquee>

      <div className="text-black ">
        <div className="max-md:space-y-4 md:grid max-md:grid-cols-1 lg:grid-cols-3 gap-4">
          {cards.map((card, j) => {
            return (
              <div
                key={j}
                className="bg-linear-to-b from-[#006ca7] from-50% to-[#2a166f] to-50% shadow-lg p-3 rounded-lg flex flex-col h-full text-white"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-80 object-center"
                />

                <div className="flex flex-col flex-1 space-y-3">
                  <p className="font-bold text-4xl text-center">{card.title}</p>

                  {/* <p className="md:text-justify max-[700px]:text-xs">
                    {card.info}
                  </p>

                  <div className="pt-2">
                    {card.bullets.map((i, j) => (
                      <p key={j} className="max-[700px]:text-xs">
                        {i}
                      </p>
                    ))}
                  </div> */}

                  <div className="mt-auto flex justify-center pt-6">
                    <Link to={card.link}>
                      {" "}
                      <button className={card.buttonStyle}>
                        {card.button}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
