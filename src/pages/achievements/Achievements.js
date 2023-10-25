import React from "react";
import Header from "../../components/header/Header";
import "./Achievements.css";
import { Fade } from "react-reveal";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
const data = [
  {
    id: 1,
    title: "Winner at UST Decode'23",
    desc:
      "Among 11500+ participants my team were selected for the top 10 spot. Then after an interview we were in the top 5 and invited to UST's Thiruvananthapuram campus for the 24 hour hackathon. Here we created our project SoulSupport.ai which is a 3D conversational companion using Generative AI. My team won the hackathon and was awarded a cash prize of 7lakh rupees",
    logo_path: "decode_win.jpg",
  },
  {
    id: 2,
    title: "Winner at Unesco India Africa Hackathon'22",
    desc:
      "Everything, from online meetings, brainstorming sessions, traveling to Noida for the physical Hackathon, non-stop coding for 36 hours, mentoring sessions, to making it to the stage to get awarded as First Prize Winners, wearing the gold medal and holding the prize money cheque worth Rs. 3L in my hands from India's Vice President Mr. Jagdeep Dhankar was the best experience I have ever had. ",
    logo_path: "unesco_win.jpg",
  },
  {
    id: 3,
    title: "Smart India Hackathon'22",
    desc:
      "My team, Enemies Of Syntaxx was the winner of Smart India Hackathon (SIH) Senior Software Edition 2022 for the problem statement provided to us by the Ministry/Organization Name/Student Innovation: Startup India Section, Department for Promotion of Industry and Internal Trade (DPIT), Ministry of Commerce and Industry. We developed an application for the effective mentorship of entrepreneurial activities in the country. ",
    logo_path: "sih_win.jpg",
  },
  {
    id: 4,
    title: "Top 50 in Samsung Solve For Tomorrow",
    desc:
      "My team Team Enemies Of Syntax, got an opportunity to present our pitch to the grand Jury of Samsung Solve for Tomorrow by Samsung India at FITT IIT DELHI Incubator. It was indeed an unforgettable once-in-a-lifetime venture. We were one of the Top 50 teams shortlisted for phase 2 in the first edition of Samsung Solve for Tomorrow among 18,000+ registrations around the nation for a 3-day boot camp on Design thinking and professional lectures on the Business canvas model.",
    logo_path: "samsung_win.jpg",
  },
];
const Achievements = ({ theme }) => {
  return (
    <div className="achievements-main">
      <Header theme={theme} />
      <div className="achievement_inner">
        {data.map((d) => (
          <Fade bottom duration={1000} distance="40px">
            <div className="achievement_card" key={d.id}>
              <img
                className="achievement_img"
                src={require(`../../assests/images/${d.logo_path}`)}
              />
              <div className="achievement_card_2">
                <h2 className="achievement_title">{d.title}</h2>
                <span>{d.desc}</span>
              </div>
            </div>
          </Fade>
        ))}
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Achievements;
