import style from "./header-style.module.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { UserProfileContext } from "../../contexts/UserProfileContext";
import { useContext } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { getUserData } from "../../services";

const Header = () => {
  const { userStatus, setUserStatus } = useContext(UserContext);

  const { setUserProfileData } = useContext(UserProfileContext);

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/registration");
  };

  const handleUserProfile = async () => {
    const userData = await getUserData();
    setUserProfileData(userData);
    navigate("/userprofile/myprofile");
  };

  const handleLogut = () => {
    sessionStorage.clear();
    setUserStatus(null);
    navigate("/");
  };

  return (
    <div className={style.header}>
      <div className={style.headerLogo}>
        <Link to='/' className={style.headerLink}>
          TALIM LOGO
        </Link>
      </div>
      <div className={style.btnSection}>
        <div className={style.btnSectionLink}>About</div>
        <div className={style.btnSectionLink}>
          <Link to='/mentors' className={style.headerLink}>
            Mentors
          </Link>
        </div>
        <div className={style.btnSectionLink}>FAQ</div>
      </div>
      <div className={style.btnSectionAuth}>
        {userStatus === null ? (
          <>
            <div className={style.btnSectionAuthBtn} onClick={handleSignIn}>
              Sign In
            </div>
            <div className={style.btnSectionAuthBtn} onClick={handleSignUp}>
              Sign Up
            </div>
          </>
        ) : (
          <>
            <div
              className={style.btnSectionProfileBtn}
              onClick={handleUserProfile}
            >
              User Profile
              <AccountCircleIcon
                fontSize='large'
                className={style.btnSectionProfileLogo}
              />
            </div>
            <div className={style.btnSectionLogoutBtn} onClick={handleLogut}>
              Logout
              <LogoutIcon
                fontSize='large'
                className={style.btnSectionLogoutLogo}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
