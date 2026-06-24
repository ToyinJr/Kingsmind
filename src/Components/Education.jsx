import React, { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const offerings = [
  {
    icon: "fa-person-chalkboard",
    label: "Seminars",
    desc: "Engaging group sessions on education and career planning.",
  },
  {
    icon: "fa-laptop",
    label: "Online Classes",
    desc: "Flexible virtual learning from wherever you are.",
  },
  {
    icon: "fa-chalkboard-user",
    label: "Private Teachings",
    desc: "Focused one-on-one instruction tailored to your needs.",
  },
  {
    icon: "fa-book-open",
    label: "Tutorials",
    desc: "Step-by-step subject support for students at every level.",
  },
  {
    icon: "fa-pen-to-square",
    label: "Adult Literacy",
    desc: "Empowering adults with foundational reading and writing skills.",
  },
];

const pillars = [
  { icon: "fa-graduation-cap", text: "Academic Planning" },
  {
    icon: "fa-compass",
    label: "Career Development",
    text: "Career Development",
  },
  { icon: "fa-building-columns", text: "College Admissions" },
  { icon: "fa-people-arrows", text: "Curriculum Support" },
];

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>KingsMind Education</title>
      </Helmet>

      <div className="min-h-screen">
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

        {/* ── Hero banner ── */}
        <div
          className="relative mt-3 w-full overflow-hidden"
          style={{ minHeight: "clamp(160px, 30svh, 320px)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#006ca7] via-[#1a3e8f] to-[#2a166f]" />

          {/* decorative book-page shapes */}
          <div className="absolute -left-12 bottom-0 w-56 h-56 rounded-full border-[30px] border-white/10" />
          <div className="absolute left-10 bottom-8 w-32 h-32 rounded-full border-[18px] border-white/10" />

          <div className="relative z-10 flex flex-col justify-end h-full px-6 sm:px-10 pb-8 pt-12">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-4xl text-white/80">
                <i className="fa-solid fa-graduation-cap" aria-hidden="true" />
              </span>
              <h1 className="font-extrabold text-3xl sm:text-4xl text-white">
                KingsMind Educators
              </h1>
            </div>
            <p className="text-white/70 text-sm sm:text-base max-w-lg mt-1">
              Guiding students, parents, and schools toward brighter futures.
            </p>
          </div>
        </div>

        {/* ── Four pillars ── */}
        <div className="px-5 sm:px-8 lg:px-16 pt-6 pb-2 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {pillars.map((p, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                               bg-gradient-to-r from-[#eaf4fb] to-[#ece9f9] text-[#1a3e8f]"
              >
                <i
                  className={`fa-solid ${p.icon} text-[#006ca7]`}
                  aria-hidden="true"
                />
                {p.text}
              </span>
            ))}
          </div>
        </div>

        {/* ── About text ── */}
        <div className="px-5 sm:px-8 lg:px-16 py-6 max-w-4xl mx-auto">
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#006ca7] to-[#2a166f] mb-5" />
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
            We provide guidance and support to students, parents, and schools on
            academic planning, college admissions, career development, and
            curriculum improvement. Working alongside educational institutions,
            we help navigate complex educational structures and career
            opportunities.
          </p>
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg mt-4">
            From reviewing new educational tools to working closely with parents
            on college preparation — our clients receive personalised advice
            across a wide range of educational needs.
          </p>
        </div>

        {/* ── Offerings grid ── */}
        <div className="px-5 sm:px-8 lg:px-16 pb-12 max-w-4xl mx-auto">
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
      </div>
    </>
  );
};

export default Education;
