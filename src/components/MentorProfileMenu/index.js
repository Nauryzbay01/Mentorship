import style from "./mentorProfileMenu-style.module.css";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Link } from "react-router-dom";

export default function MentorProfileMenu() {
  return (
    <div className={style.profileMenu}>
      <Link to="myprofile" className={style.link}>
        <div>
          <PersonIcon className={style.profileMenuIcon} /> My Profile
        </div>
      </Link>
      <Link to="mymentees" className={style.link}>
        <div>
          <SchoolIcon className={style.profileMenuIcon} /> My Mentees
        </div>
      </Link>
      <Link to="subscribes" className={style.link}>
        <div>
          <NotificationsIcon className={style.profileMenuIcon} /> My Subscribers
        </div>
      </Link>
      <div>
        <BorderColorIcon className={style.profileMenuIcon} /> My Posts
      </div>
    </div>
  );
}
