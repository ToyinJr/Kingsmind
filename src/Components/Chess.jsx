import React, { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";

const offerings = [
  {
    icon: "fa-school",
    label: "Chess in Schools",
    desc: "Structured programs bringing chess into classrooms.",
  },
  {
    icon: "fa-people-group",
    label: "Chess Clubs",
    desc: "Regular club sessions for all skill levels.",
  },
  {
    icon: "fa-house",
    label: "Private Home Tutoring",
    desc: "One-on-one coaching at your convenience.",
  },
  {
    icon: "fa-laptop",
    label: "Online Chess Training",
    desc: "Remote sessions from anywhere in the world.",
  },
  {
    icon: "fa-trophy",
    label: "Chess Competitions",
    desc: "Scholastic tournaments and recreational events.",
  },
];

const Chess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>KingsMind Chess</title>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        {/* ── Back button ── */}
        <div className="px-4 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-[#006ca7] font-semibold hover:opacity-75 transition-opacity"
          >
            <ChevronLeft size="1.25rem" />
            <span>Back</span>
          </Link>
        </div>

        {/* ── Title + intro ── */}
        <div className="px-5 sm:px-8 lg:px-16 py-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl text-[#006ca7]">
              <i className="fa-solid fa-chess-king" aria-hidden="true" />
            </span>
            <h1 className="font-extrabold text-3xl sm:text-4xl text-gray-500">
              KingsMind Chess
            </h1>
          </div>

          {/* coloured accent rule */}
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#006ca7] to-[#2a166f] mb-6" />

          <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
            We provide structured training and resources to help individuals —
            particularly children and young people — improve their chess skills.
            Through lessons in theory, strategy, and tactics we build critical
            thinking, logical reasoning, and decision-making. At KingsMind Chess
            Academy, chess is fun: we use it as a tool to make lives better.
          </p>
        </div>

        {/* ── Offerings grid ── */}
        <div className="px-5 sm:px-8 lg:px-16 pb-10 max-w-4xl mx-auto">
          <h2 className="font-bold text-xl text-gray-500 mb-4">
            What we offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {offerings.map((o, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-4 rounded-2xl border border-gray-100
                              bg-gradient-to-br from-[#eaf4fb] to-[#ece9f9] shadow-sm"
              >
                <span className="mt-0.5 text-2xl text-[#006ca7] shrink-0">
                  <i className={`fa-solid ${o.icon}`} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-gray-800">{o.label}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Contact CTA ── */}
        <div
          className="mx-5 sm:mx-8 lg:mx-16 mb-12 max-w-4xl lg:mx-auto rounded-2xl overflow-hidden
                        bg-gradient-to-r from-[#006ca7] to-[#2a166f] p-6 sm:p-8 text-white"
        >
          <h2 className="font-bold text-xl sm:text-2xl mb-1">
            Ready to register?
          </h2>
          <p className="text-white/80 mb-5 text-sm sm:text-base">
            For competitions, fun, or training — contact Mr. Joseph Agoro
            directly on WhatsApp.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="http://wa.me/+2348029726732"
              target="_blank"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25
                             transition-colors px-5 py-3 rounded-xl font-semibold text-sm"
            >
              <i
                className="fa-brands fa-whatsapp text-2xl"
                aria-hidden="true"
              />
              +234 802 972 6732
            </Link>
            <Link
              to="http://wa.me/+2348115087637"
              target="_blank"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25
                             transition-colors px-5 py-3 rounded-xl font-semibold text-sm"
            >
              <i
                className="fa-brands fa-whatsapp text-2xl"
                aria-hidden="true"
              />
              +234 811 508 7637
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chess;
