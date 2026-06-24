import "../style.css";
import { Team } from "../allData.js";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Company = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet><title>About – KingsMind</title></Helmet>

      <div className="min-h-screen flex flex-col">

        {/* ── Back button ── */}
        <div className="px-4 pt-4">
          <Link to="/" className="inline-flex items-center gap-1 text-[#006ca7] font-semibold hover:opacity-75 transition-opacity">
            <ChevronLeft size="1.25rem" />
            <span>Back</span>
          </Link>
        </div>

        {/* ── Hero banner ── */}
        <div className="relative mt-3 w-full overflow-hidden"
             style={{ minHeight: "clamp(160px, 28svh, 280px)" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#006ca7] via-[#1a3e8f] to-[#2a166f]" />

          {/* decorative rings */}
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full border-[30px] border-white/10" />
          <div className="absolute right-20 top-8 w-36 h-36 rounded-full border-[18px] border-white/10" />

          <div className="relative z-10 flex flex-col justify-end h-full px-6 sm:px-10 pb-8 pt-12">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-4xl text-white/80">
                <i className="fa-solid fa-crown" aria-hidden="true" />
              </span>
              <h1 className="font-extrabold text-3xl sm:text-4xl text-white">
                About KingsMind
              </h1>
            </div>
            <p className="text-white/70 text-sm sm:text-base max-w-lg mt-1">
              Born out of grace, passion, and the urge to impact lives.
            </p>
          </div>
        </div>

        {/* ── Story ── */}
        <div className="px-5 sm:px-8 lg:px-16 py-8 max-w-4xl mx-auto w-full">
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#006ca7] to-[#2a166f] mb-6" />

          <div className="space-y-4 text-gray-400 leading-relaxed text-base sm:text-lg">
            <p>
              King's Mind Educators was born out of grace, passion and the urge
              to impact the lives of children, youths and everyone that we have
              the privilege of meeting. Our CEO, Mr. Joseph Agoro has it all — a
              seasoned private tutor, classroom teacher, subject teacher,
              headmaster, school principal, school owner, and chess instructor.
              Decades of experience in mentoring and tutoring, not just
              academically but in managing the affairs of several hundreds of
              children at different levels — often from their kindergarten age to
              adulthood.
            </p>
            <p>
              Having engaged and still engaging in all these, we can say we have
              learnt from many experiences and, by virtue of hard work and
              perseverance, have gotten really far ahead in the business of
              mentoring and shaping lives.
            </p>
            <p>
              To our credit, we have produced hundreds of university graduates,
              within and outside the shores of Nigeria — many doing really well
              in life. We have produced many sound chess players, including a
              National Chess Champion. Presently, our educational consultancy
              firm is working with over 20 schools.
            </p>
          </div>
        </div>

        {/* ── Team section ── */}
        <div className="flex-1">
          <div className="px-5 sm:px-8 lg:px-16 pb-12 max-w-4xl mx-auto w-full">

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl text-[#006ca7]">
                <i className="fa-solid fa-people-group" aria-hidden="true" />
              </span>
              <h2 className="font-extrabold text-2xl sm:text-3xl text-gray-500">
                The Team
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Team.map((member, j) => (
                <div key={j}
                     className="flex flex-col rounded-2xl overflow-hidden shadow-md
                                bg-gradient-to-b from-[#006ca7] to-[#2a166f]
                                text-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">

                  {/* photo */}
                  <div className="w-full bg-white/10 overflow-hidden"
                       style={{ height: "220px" }}>
                    <img
                      src={member.picture}
                      alt={member.member}
                      className="w-full h-full object-cover object-[center_15%]"
                    />
                  </div>

                  {/* info */}
                  <div className="flex flex-col flex-1 p-4 text-center gap-1">
                    <p className="font-bold text-lg leading-tight">{member.member}</p>
                    <p className="text-white/80 text-sm font-medium">{member.title}</p>
                    {member.descriptipn && (
                      <p className="text-white/60 text-xs mt-1">{member.descriptipn}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Company;
