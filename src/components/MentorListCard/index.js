import { Rating } from "@mui/material";
import style from "./mentorListCard.module.css";
import emptyPhoto from "../../img/avatar-pacleholder.png";
import { useNavigate } from "react-router-dom";

const MentorListCard = ({ mentor }) => {
  const navigate = useNavigate();
  const userImg = `data:${mentor?.user?.image?.fileType};base64, ${mentor?.user?.image?.data}`;

  const handleProfileClick = () => {
    navigate(`mentor/${mentor?.user.id}`);
  };
  return (
    <div className={style.card}>
      <div className={style.cardBanner}></div>
      <img
        src={mentor?.user?.image ? userImg : emptyPhoto}
        className={style.cardImg}
        alt="Mentor Placeholder"
      />
      <div className={style.cardContent}>
        <div className={style.mentorNameMajorCountrySection}>
          <h2
            className={style.mentorName}
          >{`${mentor.user.firstname} ${mentor.user.lastname}`}</h2>
          <div className={`${style.mentorMajor} ${style.fontSecondary}`}>
            {mentor.major}
          </div>
          <div className={`${style.mentorCountry} ${style.fontSecondary}`}>
            {mentor.country}
          </div>
          <div className={`${style.mentorUniversity} ${style.fontSecondary}`}>
            {mentor.university}
          </div>
        </div>
        <div className={style.mentorFollowersRating}>
          <div className={style.mentorFollowersSection}>
            <span className={style.mentorFollowers}>{mentor.menteesCount}</span>
            <span className={style.fontSecondary}>Mentees</span>
          </div>
          <div className={style.mentorRatingSection}>
            <Rating
              name="mentorRating"
              value={mentor.rating === null ? 0 : mentor.rating}
              readOnly
              className={style.rating}
            />
            <span className={style.fontSecondary}>Rating</span>
          </div>
        </div>
        <button className={style.mentorProfileBtn} onClick={handleProfileClick}>
          PROFILE
        </button>
      </div>
    </div>
  );
};

export default MentorListCard;
