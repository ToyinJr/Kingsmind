import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Media = () => {
  return (
    <div className="min-h-screen">
      <div className="w-fit">
        <Link to={"/"}>
          <ChevronLeft size={"2rem"} />
        </Link>
      </div>

      <div className="p-4">
        <p className="font-bold text-center text-4xl mt-4">J5 Media & Events</p>
        <p className="text-justify my-4">
          We create and share educational, informative, and entertaining media
          that highlights learning, personal development, community impact, and
          the achievements of individuals and organizations. Through digital
          storytelling, interviews, features, and multimedia content, we provide
          a platform for knowledge sharing and positive conversations. At Kings
          Mind Media, we believe that media is a powerful tool for education,
          awareness, and transformation. We are committed to producing content
          that informs, inspires, and empowers people to learn, grow, and make a
          positive difference in their communities. Our mission is to use media
          as a vehicle for promoting education, creativity, innovation, and
          social development, helping individuals and organizations amplify
          their voices and reach wider audiences.
        </p>
        <div>
          <p className="font-semibold">We offer:</p>
          <ul className="list-disc mx-6">
            <li>Video content and editing</li>
            <li>Media production and planning</li>
            <li>photography </li>
            <li>Event planning, branding and advertisement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Media;
