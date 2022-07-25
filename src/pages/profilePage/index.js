import Header from "../../components/Header";
import style from "./profile-style.module.css";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import FancyBackground from "../../components/FancyBackground";
import MentorProfileMenu from "../../components/MentorProfileMenu";
import MenteeProfileMenu from "../../components/MenteeProfileMenu";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { userStatus } = useContext(UserContext);
  useEffect(() => {
    sessionStorage.accessToken
      ? navigate("/userprofile/myprofile")
      : navigate("/");
  }, []);
  return (
    <div className={style.ProfilePage}>
      <FancyBackground />
      <Header className={style.ProfilePageHeader} />
      <div className={style.ProfilePageContentDiv}>
        <>
          {userStatus === "ROLE_MENTOR" ? (
            <MentorProfileMenu />
          ) : (
            <MenteeProfileMenu />
          )}
        </>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
