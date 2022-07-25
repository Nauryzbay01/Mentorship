import style from "./mentorsPage-style.module.css";
import Header from "../../components/Header";
import MentorListBoard from "../../components/MentorListBoard";
import FancyBackground from "../../components/FancyBackground";

const MentorsPage = () => {
  return (
    <div className={style.mentorsPage}>
      <FancyBackground />
      <Header />
      <MentorListBoard />
    </div>
  );
};

export default MentorsPage;
