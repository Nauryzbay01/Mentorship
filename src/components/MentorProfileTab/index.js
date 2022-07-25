import style from "./mentorProfileTab.module.css";
import emptyPhoto from "../../img/avatar-pacleholder.png";
import { Rating } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import { UserProfileContext } from "../../contexts/UserProfileContext";
import { useContext, useState } from "react";
import UploadPhotoForm from "../UploadPhotoForm";
import { useNavigate } from "react-router-dom";

const handleUploadPhotoFormStyle = (isHidden) => ({
  display: `${isHidden}`,
});

const MentorProfileTab = () => {
  const navigate = useNavigate();
  const { userProfileData } = useContext(UserProfileContext);
  const [uploadPhotoDisplay, setUploadPhotoDisplay] = useState("none");
  const userImg = `data:${userProfileData?.user?.image?.fileType};base64, ${userProfileData?.user?.image?.data}`;

  const handlePhotoIconClick = () => {
    setUploadPhotoDisplay("flex");
  };

  const handleEditClick = () => {
    navigate("editprofile");
  };

  return (
    <div className={style.mentorProfileTab}>
      <div className={`${style.personalInfoVisual} ${style.flexbox}`}>
        <img
          src={userProfileData?.user?.image ? userImg : emptyPhoto}
          alt="User Avatar"
          className={style.personalMentorAvatar}
        />
        <UploadIcon
          className={style.addPhotoBtn}
          onClick={handlePhotoIconClick}
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
              >{`${userProfileData?.user.firstname} ${userProfileData?.user.lastname}`}</div>
              <div className={style.flexbox}>{userProfileData?.major}</div>
            </div>
          </div>
          <div className={`${style.mentorEmailPhoneSection} ${style.flexbox}`}>
            <div>{userProfileData?.user.email}</div>
            <div>{userProfileData?.number}</div>
          </div>
          <div className={`${style.mentorRatingSection} ${style.flexbox}`}>
            Mentor Rating
            <div className={style.flexbox}>
              <Rating
                name="mentorRating"
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
          <button className={style.profileEditBtn} onClick={handleEditClick}>
            Edit
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
            <div className={`${style.label} ${style.flexbox}`}>University</div>
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
          <div className={`${style.label} ${style.flexbox}`}>About Mentor</div>
          <p className={style.aboutParagraph}>{userProfileData?.userInfo}</p>
          <div className={`${style.label} ${style.flexbox}`}>School</div>
          <p className={style.aboutParagraph}>{userProfileData?.school}</p>
        </div>
      </div>
      <div style={handleUploadPhotoFormStyle(uploadPhotoDisplay)}>
        <UploadPhotoForm setUploadPhotoDisplay={setUploadPhotoDisplay} />
      </div>
    </div>
  );
};

export default MentorProfileTab;
