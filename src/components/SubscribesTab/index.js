import style from "./subscribes.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
// import { UserProfileContext } from "../../contexts/UserProfileContext";
import { useEffect, useState } from "react";
import {
  getSubscribers,
  approveSubscriber,
  rejectSubscriber,
} from "../../services";

const MySubscribesTab = () => {
  const [subscribersList, setSubscribersList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSubscribers();
      setSubscribersList(data);
    };
    fetchData();
  }, []);

  //   const userImg = `data:${mentor?.user?.image?.fileType};base64, ${mentor?.user?.image?.data}`;

  const handleProfileClick = () => {};

  return (
    <div className={style.mySubscribesTab}>
      <div className={style.mySubscribesTabContent}>
        <h2 className={style.heading}>Subscribers List</h2>
        <List sx={{ width: "80%", bgcolor: "background.paper" }}>
          {!subscribersList || subscribersList.length === 0 ? (
            <h3>No Subscribers Yet...</h3>
          ) : (
            subscribersList.map((subscriber, index) => {
              const userImg = `data:${subscriber?.user?.image?.fileType};base64, ${subscriber?.user?.image?.data}`;
              return (
                <ListItem key={index}>
                  <ListItemAvatar
                    className={style.subscriber}
                    onClick={handleProfileClick}
                  >
                    <Avatar>
                      {subscriber?.user?.image ? userImg : <PersonIcon />}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${subscriber?.user?.firstname} ${subscriber?.user?.lastname}`}
                    secondary={`Grade - ${subscriber?.grade} `}
                  />
                  <Button
                    variant="text"
                    sx={{ color: "#0bda51" }}
                    onClick={async () => {
                      await approveSubscriber(subscriber?.id);
                    }}
                  >
                    Approve
                  </Button>
                  <Button
                    sx={{ color: "tomato", border: "1px solid tomato" }}
                    variant="outlined"
                    onClick={async () => {
                      await rejectSubscriber(subscriber?.id);
                    }}
                  >
                    Remove
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

export default MySubscribesTab;
