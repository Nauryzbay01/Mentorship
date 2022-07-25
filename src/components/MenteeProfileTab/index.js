import style from "./menteeprofile.module.css";
import emptyPhoto from "../../img/avatar-pacleholder.png";
import UploadIcon from "@mui/icons-material/Upload";
import { UserProfileContext } from "../../contexts/UserProfileContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadPhotoForm from "../UploadPhotoForm";

const handleUploadPhotoFormStyle = (isHidden) => ({
  display: `${isHidden}`,
});

const MenteeProfileTab = () => {
  const [uploadPhotoDisplay, setUploadPhotoDisplay] = useState("none");
  const { userProfileData } = useContext(UserProfileContext);

  const userImg = `data:${userProfileData?.user?.image?.fileType};base64, ${userProfileData?.user?.image?.data}`;

  const navigate = useNavigate();

  const handlePhotoIconClick = () => {
    setUploadPhotoDisplay("flex");
  };

  const handleEditClick = () => {
    navigate("editprofile");
  };

  return (
    <div className={style.menteeProfileTab}>
      <div className={`${style.personalInfoVisual} ${style.flexbox}`}>
        <img
          src={userProfileData?.user?.image ? userImg : emptyPhoto}
          alt="User Avatar"
          className={style.personalMenteeAvatar}
        />
        <UploadIcon
          className={style.addPhotoBtn}
          onClick={handlePhotoIconClick}
        />
        <div
          className={`${style.personalInfoVisualTextContainer} ${style.flexbox}`}
        >
          <div
            className={`${style.menteeStatusNameAndMajorSection} ${style.flexbox}`}
          >
            <div className={`${style.menteeStatus} ${style.flexbox}`}>
              Mentee
            </div>
            <div className={`${style.menteeNameAndMajor} ${style.flexbox}`}>
              <div
                className={style.flexbox}
              >{`${userProfileData?.user.firstname} ${userProfileData?.user.lastname}`}</div>
            </div>
          </div>
          <div className={`${style.menteeEmailSection} ${style.flexbox}`}>
            <div className={`${style.label} ${style.flexbox}`}>Email</div>
            <div>{userProfileData?.user.email}</div>
          </div>

          <button className={style.profileEditBtn} onClick={handleEditClick}>
            Edit
          </button>
        </div>
      </div>
      <div className={`${style.secondRow} ${style.flexbox}`}>
        <div className={`${style.personalInfoText} ${style.flexbox}`}>
          <h2>Personal Information</h2>
          <div className={`${style.phoneSection} ${style.flexbox}`}>
            <div className={`${style.label} ${style.flexbox}`}>
              Phone Number
            </div>
            <div className={style.text}>{userProfileData?.number}</div>
          </div>
          <div className={`${style.gradeSection} ${style.flexbox}`}>
            <div className={`${style.label} ${style.flexbox}`}>Grade</div>
            <div className={style.text}>{userProfileData?.grade}</div>
          </div>
          <div className={style.schoolSection}>
            <div className={`${style.label} ${style.flexbox}`}>School</div>
            <p className={style.aboutParagraph}>{userProfileData?.school}</p>
          </div>
          <div className={`${style.label} ${style.flexbox}`}>About Mentee</div>
          <p className={style.aboutParagraph}>
            {userProfileData?.achievements}
          </p>
        </div>
      </div>
      <div style={handleUploadPhotoFormStyle(uploadPhotoDisplay)}>
        <UploadPhotoForm setUploadPhotoDisplay={setUploadPhotoDisplay} />
      </div>
    </div>
  );
};

export default MenteeProfileTab;
