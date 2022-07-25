import style from "./mentorProfileView.module.css";
import emptyPhoto from "../../img/avatar-pacleholder.png";
import { Rating } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import FancyBackground from "../FancyBackground";
import { getMentorById, subscribeRequest } from "../../services";
import { UserContext } from "../../contexts/UserContext";

const MentorProfileView = () => {
  const { userStatus } = useContext(UserContext);

  const [userProfileData, setUserProfileData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMentorById(id);
      setUserProfileData(data);
    };
    fetchData();
  }, [id]);

  const userImg = `data:${userProfileData?.image?.fileType};base64, ${userProfileData?.image?.data}`;

  const handleSubscribeClick = async () => {
    await subscribeRequest(id);
  };

  return (
    <div className={style.mentorViewContainer}>
      <FancyBackground />
      <Header />
      <div className={style.mentorProfileTab}>
        <div className={`${style.personalInfoVisual} ${style.flexbox}`}>
          <img
            src={userProfileData?.image ? userImg : emptyPhoto}
            alt='User Avatar'
            className={style.personalMentorAvatar}
          />

          <div
            className={`${style.personalInfoVisualTextContainer} ${style.flexbox}`}
          >
            <div
              className={`${style.mentorStatusNameAndMajorSection} ${style.flexbox}`}
            >
              <div className={`${style.mentorStatus} ${style.flexbox}`}>
                Mentor
              </div>
              <div className={`${style.mentorNameAndMajor} ${style.flexbox}`}>
                <div
                  className={style.flexbox}
                >{`${userProfileData?.firstname} ${userProfileData?.lastname}`}</div>
                <div className={style.flexbox}>{userProfileData?.major}</div>
              </div>
            </div>

            <div className={`${style.mentorRatingSection} ${style.flexbox}`}>
              Mentor Rating
              <div className={style.flexbox}>
                <Rating
                  name='mentorRating'
                  value={
                    userProfileData?.rating === null || undefined
                      ? undefined
                      : userProfileData?.rating
                  }
                  readOnly
                  className={style.rating}
                />
                <span className={style.totalReviews}>Total Reviews</span>
              </div>
            </div>
            <button
              className={style.profileSubscribeBtn}
              onClick={handleSubscribeClick}
              disabled={userStatus === "ROLE_MENTEE" ? false : true}
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className={`${style.secondRow} ${style.flexbox}`}>
          <div className={`${style.personalInfoText} ${style.flexbox}`}>
            <h2>Personal Information</h2>
            <div className={`${style.ageSection} ${style.flexbox}`}>
              <div className={`${style.label} ${style.flexbox}`}>Age</div>
              <div className={style.text}>{userProfileData?.age}</div>
            </div>
            <div className={`${style.universitySection} ${style.flexbox}`}>
              <div className={`${style.label} ${style.flexbox}`}>
                University
              </div>
              <div className={style.text}>{userProfileData?.university}</div>
            </div>
            <div className={`${style.countrySection} ${style.flexbox}`}>
              <div className={`${style.label} ${style.flexbox}`}>
                Country of Education
              </div>
              <div className={style.text}>{userProfileData?.country}</div>
            </div>
            <div className={`${style.workSection} ${style.flexbox}`}>
              <div className={`${style.label} ${style.flexbox}`}>Work</div>
              <div className={style.text}>{userProfileData?.work}</div>
            </div>
          </div>
          <div className={style.aboutAndWorkSection}>
            <div className={`${style.label} ${style.flexbox}`}>
              About Mentor
            </div>
            <p className={style.aboutParagraph}>{userProfileData?.userInfo}</p>
            <div className={`${style.label} ${style.flexbox}`}>School</div>
            <p className={style.aboutParagraph}>{userProfileData?.school}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfileView;
