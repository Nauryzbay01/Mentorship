import style from "./menteeProfileMenu.module.css";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

export default function MenteeProfileMenu() {
  return (
    <div className={style.profileMenu}>
      <Link to="myprofile" className={style.link}>
        <div>
          <PersonIcon className={style.profileMenuIcon} /> My Profile
        </div>
      </Link>
      <Link to="mymentors" className={style.link}>
        <div>
          <SchoolIcon className={style.profileMenuIcon} /> My Mentors
        </div>
      </Link>
    </div>
  );
}
