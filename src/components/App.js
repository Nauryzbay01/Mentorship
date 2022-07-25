import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import RegistrationPage from "../pages/registrationNavPage";
import MentorRegistrationPage from "../pages/mentorRegistrationPage";
import MenteeRegistrationPage from "../pages/menteeRegistrationPage";
import MentorEditForm from "./MentorEditForm";
import MenteeEditForm from "./MenteeEditForm";
import MainPage from "../pages/mainPage";
import ProfilePage from "../pages/profilePage";
import MentorsPage from "../pages/mentorsPage";
import MyMenteeTab from "./MyMenteesTab";
import MentorProfileTab from "./MentorProfileTab";
import { useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { UserProfileContext } from "../contexts/UserProfileContext";
import { getUserRole, getUserData } from "../services";
import MenteeProfileTab from "./MenteeProfileTab";
import MyMentorsTab from "./MyMentorsTab";
import MentorProfileView from "./MentorProfileView";
import MySubscribesTab from "./SubscribesTab";

function App() {
  const [userStatus, setUserStatus] = useState(null);
  const [userProfileData, setUserProfileData] = useState(null);

  useEffect(() => {
    if (sessionStorage.accessToken) handleAppReload();
  }, []);

  const handleAppReload = async () => {
    const userRoleReload = await getUserRole();
    setUserStatus(userRoleReload[0].name);
    const userProfileDataReload = await getUserData();
    setUserProfileData(userProfileDataReload);
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ userStatus, setUserStatus }}>
        <UserProfileContext.Provider
          value={{ userProfileData, setUserProfileData }}
        >
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/mentors" element={<MentorsPage />} />
            <Route path="mentors/mentor/:id" element={<MentorProfileView />} />
            <Route path="userprofile" element={<ProfilePage />}>
              <Route path="mymentees" element={<MyMenteeTab />} />
              <Route path="mymentors" element={<MyMentorsTab />} />
              <Route path="subscribes" element={<MySubscribesTab />} />
              <Route
                path="myprofile"
                element={
                  userStatus === "ROLE_MENTEE" ? (
                    <MenteeProfileTab />
                  ) : (
                    <MentorProfileTab />
                  )
                }
              />
            </Route>
            <Route
              path="/userprofile/myprofile/editprofile"
              element={
                userStatus === "ROLE_MENTEE" ? (
                  <MenteeEditForm />
                ) : (
                  <MentorEditForm />
                )
              }
            />
            <Route
              path="/registration/mentee"
              element={<MenteeRegistrationPage />}
            />
            <Route
              path="/registration/mentor"
              element={<MentorRegistrationPage />}
            />
          </Routes>
        </UserProfileContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
