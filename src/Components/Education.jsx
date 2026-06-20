import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Education = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
        <title>Education</title>
      </Helmet>

      <div className="min-h-screen">
        <div className="w-fit">
          <Link to={"/"}>
            <ChevronLeft size={"2rem"} />
          </Link>
        </div>

        <div className="p-4">
          <p className="font-bold text-center text-4xl mt-4">
            KingsMind Educators
          </p>
          <p className="text-justify my-4">
            We provide guidance and support to students, parents, and schools on
            various aspects of education, including academic planning, college
            admissions, career development as well as curriculum improvement. We
            work with different educational institutions, helping to navigate
            complex educational structures and career opportunities. Our clients
            enjoy different advice on a variety of educational needs and
            services. This could mean reviewing new educational tools or working
            closely with parents to ensure that they know how to support their
            students as they apply to and plan for college. We provide guidance
            and support to students, parents, and schools related to education
            and career planning by engaging them.
          </p>
          <div>
            <p className="font-semibold">We offer:</p>
            <ul className="list-disc mx-6">
              <li>Seminars</li>
              <li>Online Classes</li>
              <li>Private teachings.</li>
              <li>Tutorials</li>
              <li>Adult Literacy</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
