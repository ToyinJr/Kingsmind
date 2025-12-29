import '../style.css';
import Contact from './Contact';

const Team = [
    {
        member:"Mr. Joseph Agoro",
        title: "Chief Executive Officer",
        descriptipn: "He is an unrivalled private educator, manager, teacher, mentor, trainer, consultant and chess enthusiat.",
        picture: "/images/placeholder.jpg",
    },
        {
        member:"Mrs Folakemi",
        title: "Operation Officer",
        descriptipn: "Season educator, designer, Operations and planning.",
        picture: "/images/placeholder.jpg",
    },
        {
        member:"Mr. Joseph Obanor",
        title: "Placeholder",
        descriptipn: "Placeholder",
        picture: "/images/placeholder.jpg",
    },
            {
        member:"Mrs. Debby Bassey",
        title: "Human Relation, Secretary",
        descriptipn: "Placeholder",
        picture: "/images/debby.bassey.png",
    },
                {
        member:"Mr. Divine Obafemi",
        title: "Accounts",
        descriptipn: "Placeholder",
        picture: "/images/divine.jpg",
    },
                {
        member:"Mr. Moses Yahaya",
        title: "Educator and Facilitator",
        descriptipn: "Placeholder",
        picture: "/images/moses.yahaya.jpg",
    },
                {
        member:"Mr. Babatunde Ogunsiku",
        title: "Special adviser on Chess, Media and  Advertisemen",
        descriptipn: "Placeholder",
        picture: "/images/placeholder.jpg",
    },
                {
        member:"Mr. Peter Abidogun",
        title: "Special Consultant on Chess Related Training and other",
        descriptipn: "Placeholder",
        picture: "/images/placeholder.jpg",
    },
                {
        member:"Mrs. Kikelomo Olawale",
        title: "Events planning and Entertainment",
        descriptipn: "Placeholder",
        picture: "/images/placeholder.jpg",
    },
                {
        member:"Bar. Kunle Smith",
        title: "Legal Matters",
        descriptipn: "Placeholder",
        picture: "/images/barr.smith.jpg",
    },
                {
        member:"Mr. Ogbeyemi Sunday",
        title: "Prints, Studio and Designs",
        descriptipn: "Placeholder",
        picture: "/images/placeholder.jpg",
    },
        
]

const Company = () => {
  window.scrollTo(0, 0);
  return (
    <div className="">
        <Contact />
      <div className="p-4">
      <div className="space-y-4 md:p-14 bg-gray-400/10 md:text-xl">
          <p className="md:text-justify">
          King's Mind Educators was born out of grace, passion and the urge to
          impact the lives of children, youths and everyone that we have the
          priviledge of meeting. Our CEO, Mr. Joseph Agoro has it all. A
          seasoned private tutor, classroom teacher, subject teacher,
          headmaster, school principal, school owner, chess instructor, just
          named it. Decades of experience in mentoring, tutoring - not just
          academic but involvement in managing the affairs of several hundreds
          of children at different levels. Often from their kindergarten age to
          adulthood. Some of the members of our team enjoyed Mr. Joseph's
          tutelage. What a privilege.
        </p>

        <p className="md:text-justify">
          Having engaged and still engaging in all these, we can say we have
          learnt from many of the experiences and by the virtue of chance,
          hardwork, perseverance have gotten really better and far ahead of our
          mates in the business of mentoring and shaping lives.
        </p>

        <p className="md:text-justify">
          To our credits, we have produced hundreds of university graduates,
          within and outside the shores of Nigeria. Many married and doing
          really well in life in different quarters. We have many sound chess
          players, even a National Chess Champion. <br />
          Presently, our educational consultancy firm is working with over 20
          schools.
        </p>
      </div>
      </div>

      <div className="bg-gray-600/10 p-3 pb-8">
        <p className="font-bold text-4xl text-center">THE TEAM</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {
                    Team.map((member,j) => {
                        return (
                            <div className="bg-white shadow-lg rounded-lg p-2" key={j}>
                                <div><img className="h-50 w-50 mx-auto" src={member.picture} alt={member.member} /></div>
                                <div className="text-center">
                                    <p className="font-bold text-xl">{member.member}</p>
                                    <p>{member.title}</p>
                                    <p>{member.descriptipn}</p>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
      </div>
    </div>
  );
};

export default Company;
