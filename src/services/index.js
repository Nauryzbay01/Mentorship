export const menteeSignupRequest = async (data) => {
  try {
    const menteeSignupResponse = await fetch(
      "https://aidateam.herokuapp.com/api/auth/mentee/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(data),
      }
    );
    if (menteeSignupResponse.status !== 200)
      throw new Error(menteeSignupResponse.status);
    const responseBody = await menteeSignupResponse.json();
    return [menteeSignupResponse, responseBody];
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const mentorSignupRequest = async (data) => {
  try {
    const mentorSignupResponse = await fetch(
      "https://aidateam.herokuapp.com/api/auth/mentor/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(data),
      }
    );
    if (mentorSignupResponse.status !== 200)
      throw new Error(mentorSignupResponse.status);
    const responseBody = await mentorSignupResponse.json();
    return [mentorSignupResponse, responseBody];
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const loginRequest = async (data) => {
  try {
    const loginResponse = await fetch(
      "https://aidateam.herokuapp.com/api/auth/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(data),
      }
    );
    if (loginResponse.status !== 200) throw new Error(loginResponse);
    const responseBody = await loginResponse.json();
    return [loginResponse, responseBody];
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const getUserData = async () => {
  try {
    const getUserDataResponse = await fetch(
      "https://aidateam.herokuapp.com/api/user/profile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    );
    if (getUserDataResponse.status !== 200)
      throw new Error(getUserDataResponse.status);
    const result = await getUserDataResponse.json();
    return result;
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const getUserRole = async () => {
  try {
    const getUserRoleResponse = await fetch(
      "https://aidateam.herokuapp.com/api/auth/user/role",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    );
    if (getUserRoleResponse.status !== 200)
      throw new Error(getUserRoleResponse.status);
    const result = await getUserRoleResponse.json();
    return result;
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const getMentorsList = async () => {
  try {
    const getMentorsListResponse = await fetch(
      "https://aidateam.herokuapp.com/api/mentors",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    );
    if (getMentorsListResponse.status !== 200)
      throw new Error(getMentorsListResponse.status);
    const result = await getMentorsListResponse.json();
    return result;
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const sendPhotoRequest = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const sendPhotoResponse = await fetch(
      "https://aidateam.herokuapp.com/api/upload",
      {
        method: "POST",
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        body: formData,
      }
    );
    if (sendPhotoResponse.status !== 200)
      throw new Error(sendPhotoResponse.status);
    alert("Success!");
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const mentorEditProfileRequest = async (data) => {
  try {
    const mentorEditProfileResponse = await fetch(
      "https://aidateam.herokuapp.com/api/mentor/profile/edit",
      {
        method: "PUT",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (mentorEditProfileResponse.status !== 200)
      throw new Error(mentorEditProfileResponse.status);
    return mentorEditProfileResponse;
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const menteeEditProfileRequest = async (data) => {
  try {
    const menteeEditProfileResponse = await fetch(
      "https://aidateam.herokuapp.com/api/mentee/profile/edit",
      {
        method: "PUT",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (menteeEditProfileResponse.status !== 200)
      throw new Error(menteeEditProfileResponse.status);
    return menteeEditProfileResponse;
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const getMentorById = async (id) => {
  try {
    const getMentorByIdResponse = await fetch(
      `https://aidateam.herokuapp.com/api/mentors/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (getMentorByIdResponse.status !== 200)
      throw new Error(getMentorByIdResponse.status);
    const result = await getMentorByIdResponse.json();
    return result;
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const subscribeRequest = async (id) => {
  try {
    const subscribeResponse = await fetch(
      `https://aidateam.herokuapp.com/api/mentor/${id}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    );
    if (subscribeResponse.status !== 200) throw new Error(subscribeResponse);
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const getSubscribers = async () => {
  try {
    const getSubscribersResponse = await fetch(
      `https://aidateam.herokuapp.com/api/mentor/subscribers`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    );
    if (getSubscribersResponse.status !== 200)
      throw new Error(getSubscribersResponse.status);
    const result = await getSubscribersResponse.json();
    return result;
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const approveSubscriber = async (id) => {
  try {
    const approveSubscriberResponse = await fetch(
      `https://aidateam.herokuapp.com/api/mentor/mentee/${id}/confirm`,
      {
        method: "PUT",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        // body: JSON.stringify(data),
      }
    );
    if (approveSubscriberResponse.status !== 200)
      throw new Error(approveSubscriberResponse.status);
    return approveSubscriberResponse;
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const deleteMyMentee = async (id) => {
  try {
    const deleteMyMenteeResponse = await fetch(
      `https://aidateam.herokuapp.com/api/mentor/mentees/${id}/delete`,
      {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        // body: JSON.stringify(data),
      }
    );
    if (deleteMyMenteeResponse.status !== 200)
      throw new Error(deleteMyMenteeResponse.status);
    return deleteMyMenteeResponse;
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const getMyMentees = async () => {
  try {
    const getMyMenteesResponse = await fetch(
      `https://aidateam.herokuapp.com/api/mentor/mentees`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    );
    if (getMyMenteesResponse.status !== 200)
      throw new Error(getMyMenteesResponse.status);
    const result = await getMyMenteesResponse.json();
    return result;
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const rejectSubscriber = async (id) => {
  try {
    const rejectSubscriberResponse = await fetch(
      `https://aidateam.herokuapp.com/api/mentor/mentee/${id}/reject`,
      {
        method: "PUT",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        // body: JSON.stringify(data),
      }
    );
    if (rejectSubscriberResponse.status !== 200)
      throw new Error(rejectSubscriberResponse.status);
    return rejectSubscriberResponse;
  } catch (err) {
    alert(err.message);
    return;
  }
};
