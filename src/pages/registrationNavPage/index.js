import style from "./regpage-style.module.css";
import mentorsImg from "../../img/mentors-cartoon.png";
import mentisImg from "../../img/mentis-cartoon.png";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <div className={style.registrationPage}>
      <div className={style.mentorsContainer}>
        <Link
          to="/registration/mentor"
          className={style.mentorsContentContainer}
        >
          <h2>Sign Up as a Mentor</h2>
          <img src={mentorsImg} alt="Carton Mentors" />
        </Link>
      </div>
      <div className={style.mentisContainer}>
        <Link
          to="/registration/mentee"
          className={style.mentisContentContainer}
        >
          <h2>Sign Up as a Mentee</h2>
          <img src={mentisImg} alt="Carton Mentees" />
        </Link>
      </div>
    </div>
  );
};

export default RegistrationPage;
