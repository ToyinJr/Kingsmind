// 

import React, { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const offerings = [
  {
    icon: "fa-video",
    label: "Video Content & Editing",
    desc: "Professional video production from concept to finished cut.",
  },
  {
    icon: "fa-clapperboard",
    label: "Media Production & Planning",
    desc: "End-to-end planning and execution of media campaigns.",
  },
  {
    icon: "fa-camera",
    label: "Photography",
    desc: "High-quality photography for events, portraits, and branding.",
  },
  {
    icon: "fa-bullhorn",
    label: "Event Planning & Branding",
    desc: "Branding, advertisement, and full event coordination.",
  },
];

const stats = [
  { value: "Digital", label: "Storytelling" },
  { value: "Impact", label: "Focused" },
  { value: "Creative", label: "Content" },
];

const Media = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet><title>J5 Media & Events</title></Helmet>

      <div className="min-h-screen bg-white">

        {/* ── Back button ── */}
        <div className="px-4 pt-4">
          <Link to="/" className="inline-flex items-center gap-1 text-[#006ca7] font-semibold hover:opacity-75 transition-opacity">
            <ChevronLeft size="1.25rem" />
            <span>Back</span>
          </Link>
        </div>

        {/* ── Hero banner ── */}
        <div className="relative mt-3 w-full overflow-hidden"
             style={{ minHeight: "clamp(160px, 30svh, 320px)" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#006ca7] via-[#1a3e8f] to-[#2a166f]" />

          {/* decorative camera lens rings */}
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full border-[30px] border-white/10" />
          <div className="absolute -right-4 -top-4 w-48 h-48 rounded-full border-[20px] border-white/10" />

          <div className="relative z-10 flex flex-col justify-end h-full px-6 sm:px-10 pb-8 pt-12">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-4xl text-white/80">
                <i className="fa-solid fa-film" aria-hidden="true" />
              </span>
              <h1 className="font-extrabold text-3xl sm:text-4xl text-white">
                J5 Media & Events
              </h1>
            </div>
            <p className="text-white/70 text-sm sm:text-base max-w-lg mt-1">
              Amplifying voices through education, creativity, and storytelling.
            </p>
          </div>
        </div>

        {/* ── Stat pills ── */}
        <div className="flex flex-wrap gap-3 px-5 sm:px-8 lg:px-16 py-5 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <div key={i}
                 className="flex flex-col items-center px-6 py-3 rounded-2xl
                            bg-gradient-to-br from-[#eaf4fb] to-[#ece9f9] shadow-sm min-w-[90px]">
              <span className="font-extrabold text-[#006ca7] text-lg leading-tight">{s.value}</span>
              <span className="text-gray-500 text-xs mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── About text ── */}
        <div className="px-5 sm:px-8 lg:px-16 pb-8 max-w-4xl mx-auto">
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#006ca7] to-[#2a166f] mb-5" />
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            We create and share educational, informative, and entertaining media
            that highlights learning, personal development, community impact, and
            individual achievements. Through digital storytelling, interviews,
            features, and multimedia content, we provide a platform for knowledge
            sharing and positive conversations.
          </p>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg mt-4">
            At Kings Mind Media, we believe media is a powerful tool for
            education, awareness, and transformation — committed to producing
            content that informs, inspires, and empowers people to grow and make
            a positive difference in their communities.
          </p>
        </div>

        {/* ── Offerings grid ── */}
        <div className="px-5 sm:px-8 lg:px-16 pb-12 max-w-4xl mx-auto">
          <h2 className="font-bold text-xl text-gray-800 mb-4">What we offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {offerings.map((o, i) => (
              <div key={i}
                   className="flex gap-4 items-start p-4 rounded-2xl border border-gray-100
                              bg-gradient-to-br from-[#eaf4fb] to-[#ece9f9] shadow-sm">
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

      </div>
    </>
  );
};

export default Media;