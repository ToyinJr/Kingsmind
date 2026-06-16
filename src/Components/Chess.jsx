import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";

const Chess = () => {
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
    <div className="">
      <div>
        <div className="w-fit">
          <Link to={"/"}>
            <ChevronLeft size={"2rem"} />
          </Link>
        </div>
        <div>
          <div className="swiper w-full h-[78vh] lg:h-[70vh] max-sm:h-[65vh] object-center rounded-lg">
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
            className="my-4 p-4 bg-linear-to-b from-[#006ca7] from-50% to-[#2a166f] to-50% text-white text-6xl"
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, necessitatibus?</p>
            </div>
       </div>
          </Marquee>

          <div className="p-4">
            <p className="font-bold text-center text-4xl mt-4">
              KingsMind Chess
            </p>
            <p className="text-justify my-4">
              We provide structured training and resources to help individuals,
              particularly children and young people, improve their chess
              skills.We offer practical lessons in chess theory, strategy, and
              tactics, we help players develop critical thinking, logical
              reasoning, and decision-making skills. At Kings Mind Chess
              Academy, chess is fun, we focus on building cognitive abilities
              and enhancing concentration. We use chess as a tool to make the
              lives of people better by letting them see the immense benefits
              that learning and playing the game of chess offers.
            </p>
            <div>
              <p className="font-semibold">We offer:</p>
              <ul className="list-disc mx-6">
                <li>Chess in schools programs.</li>
                <li>Chess clubs</li>
                <li>Private home chess tutoring</li>
                <li>Online chess training</li>
                <li>
                  Chess Competitions: scholarstic chess competitions as well as
                  chess for recreational activities.
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <p className="font-bold text-2xl">
                To register for competitions, fun or training, contact Mr.
                Joseph Agoro
              </p>
              <div className="flex gap-4">
                <Link
                  to={"http://wa.me/+2348029726732"}
                  target="_blank"
                  className="hover:scale-105 transition-all duration-500"
                >
                  <i class="fa-brands fa-whatsapp text-6xl text-[#006ca7]"></i>
                </Link>
                <Link
                  to={"http://wa.me/+2348115087637"}
                  target="_blank"
                  className="hover:scale-105 transition-all duration-500"
                >
                  <i class="fa-brands fa-square-whatsapp text-6xl text-[#006ca7]"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chess;
