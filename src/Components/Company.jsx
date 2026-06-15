import '../style.css';
import {Team} from '../allData.js'


const Company = () => {
  window.scrollTo(0, 0);
  return (
    <div className="">
      <div className="p-4">
      <div className="space-y-4 md:p-14 md:text-xl">
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

      <div className=" p-3 pb-8">
        <p className="font-bold text-4xl text-center">THE TEAM</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {
                    Team.map((member,j) => {
                        return (
                            <div className="bg-[#006ca7]/30 shadow-lg rounded-lg p-2 text-black" key={j}>
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
