import "../style.css";
import { Link } from "react-router-dom";

let cards = [
  {
    image: "images/kme.png",
    link: '/education',
    alt: "kingsmind educators",
    title: "Educational Services",
    info: `We provide guidance and support to students, parents, and schools on various aspects of education, including academic planning, college admissions, career development as well as curriculum improvement.

We work with different educational institutions, helping to navigate complex educational structures and career opportunities.
Our clients enjoy different advice on a variety of educational needs and services. This could mean reviewing new educational tools or working closely with parents to ensure that they know how to support their students as they apply to and plan for college.
We provide guidance and support to students, parents, and schools related to education and career planning by engaging them in`,

    bullets: [
      "- Seminars ",
      "- Online Classes",
      "- Private teachings.",
      "- Tutorials to.",
      "- Adult Literacy",
    ],

    button: "Find Out More",
    buttonStyle:
      "bg-blue-400 p-4 rounded-full text-white cursor-pointer hover:bg-blue-400/90",
  },

  {
    image: "images/kmc.png",
    link: '/chess',
    alt: "kingsmind Chess",
    title: "Chess Services",
    info: `We provide structured training and resources to help individuals, particularly children and young people, improve their chess skills.We offer practical lessons in chess theory, strategy, and tactics, we help players develop critical thinking, logical reasoning, and decision-making skills.
At Kings Mind Chess Academy, chess is fun, we focus on building cognitive abilities and enhancing concentration.
We use chess as a tool to make the lives of people better by letting them see the immense benefits that learning and playing the game of chess offers.`,

    bullets: [
      "We offer:",
      "- Chess in schools programs.",
      "- Chess clubs",
      "-  Private home chess tutoring",
      "- Online chess training",
      "-  Chess Competitions: scholarstic chess competitions as well as chess for recreational activities.",
    ],

    button: "Find Out More",
    buttonStyle:
      "bg-orange-400 p-4 rounded-full text-white  cursor-pointer hover:bg-orange-400/90",
  },

  {
    image: "images/j5m.png",
    alt: "J5MEDIA",
    link: '/media',
    title: "Media Services",
    info: `We create and share educational, informative, and entertaining media that highlights learning, personal development, community impact, and the achievements of individuals and organizations. Through digital storytelling, interviews, features, and multimedia content, we provide a platform for knowledge sharing and positive conversations.

At Kings Mind Media, we believe that media is a powerful tool for education, awareness, and transformation. We are committed to producing content that informs, inspires, and empowers people to learn, grow, and make a positive difference in their communities.

Our mission is to use media as a vehicle for promoting education, creativity, innovation, and social development, helping individuals and organizations amplify their voices and reach wider audiences.`,

    bullets: [
      "We produce, distribute and manage media content, we specialise in creating",
      "- video content and editing,",
      "- media production and planning",
      "- photography ",
      "- event planning, branding and advertisement",
    ],

    button: "Find Out More",
    buttonStyle:
      "bg-black p-4 rounded-full text-white  cursor-pointer hover:bg-blac/90",
  },
];

const Content = () => {
  window.scrollTo(0, 0);
  return (
    <div className=" p-2 pt-10 ">

      <div className="text-black min-h-screen">
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
                  <Link to={card.link}>  <button className={card.buttonStyle}>{card.button}</button></Link>
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
