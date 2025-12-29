import "../style.css"
import Contact from './Contact'

let cards = [
  {
    image: "images/kingsmindeducators.png",
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
    buttonStyle: "bg-blue-400 p-4 rounded-full text-white cursor-pointer hover:bg-blue-400/90",
  },

  {
    image: "images/kingsmindchess.jpg",
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
    buttonStyle: "bg-orange-400 p-4 rounded-full text-white  cursor-pointer hover:bg-orange-400/90",
  },

  {
    image: "images/j5media.jpg",
    alt: "J5MEDIA",
    title: "Media Services",
    info: `This the media outlet of Kings Mind Educators.`,

    bullets: [
      "We produce, distribute and manage media content, we specialise in creating",
      "- video content and editing,",
      "- media production and planning",
      "- photography ",
      "- event planning, branding and advertisement",
    ],

    button: "Find Out More",
    buttonStyle: "bg-black p-4 rounded-full text-white  cursor-pointer hover:bg-blac/90",
  },
];



const Content = () => {
    window.scrollTo(0,0);
  return (
    <div className=" p-2 pt-10 bg-gray-600/50 ">
            <Contact />

      <div className="">
        <div className="max-md:space-y-4 md:grid grid-cols-3 gap-4">
          {cards.map((card, j) => {
            return (
              <div key={j} className="space-y-4 bg-white shadow-lg p-3 rounded-lg">
                <div className="">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="h-100 w-400"
                  />
                </div>
                <div className="space-y-3">
                  <div><p className="font-bold text-4xl text-center">{card.title}</p></div>
                  <div><p className="md:text-justify max-[700px]:text-xs">{card.info}</p></div>
                  <div className="pt-2">
                    {card.bullets.map((i,j) => {
                      return <p key={j} className="max-[700px]:text-xs">{i}</p>;
                    })}
                  </div>
                  <div className="place-self-center">
                  <button className={card.buttonStyle}>{card.button}</button>
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
