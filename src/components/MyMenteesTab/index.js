import style from "./mymentees-style.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { getMyMentees, deleteMyMentee } from "../../services";

const MyMenteeTab = () => {
  const [myMenteesList, setMyMenteesList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMyMentees();
      setMyMenteesList(data);
    };
    fetchData();
  }, []);

  const handleProfileClick = () => {};

  return (
    <div className={style.myMenteeTab}>
      <div className={style.myMenteeTabContent}>
        <h2 className={style.heading}>Mentees List</h2>
        <List sx={{ width: "80%", bgcolor: "background.paper" }}>
          {!myMenteesList || myMenteesList.length === 0 ? (
            <h3>No Subscribers Yet...</h3>
          ) : (
            myMenteesList.map((mentee, index) => {
              const userImg = `data:${mentee?.user?.image?.fileType};base64, ${mentee?.user?.image?.data}`;
              return (
                <ListItem key={index}>
                  <ListItemAvatar
                    className={style.mentee}
                    onClick={handleProfileClick}
                  >
                    <Avatar>
                      {mentee?.user?.image ? userImg : <PersonIcon />}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${mentee?.user?.firstname} ${mentee?.user?.lastname}`}
                    secondary={`Grade - ${mentee?.grade} `}
                  />
                  <Button variant="text" sx={{ color: "#0bda51" }}>
                    Contact
                  </Button>
                  <Button
                    sx={{ color: "tomato", border: "1px solid tomato" }}
                    variant="outlined"
                    onClick={async () => {
                      await deleteMyMentee(mentee?.id);
                    }}
                  >
                    Delete
                  </Button>
                </ListItem>
              );
            })
          )}
        </List>
      </div>
    </div>
  );
};

export default MyMenteeTab;
