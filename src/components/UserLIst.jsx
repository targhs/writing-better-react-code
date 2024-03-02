import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import * as React from "react";
import User from "./User";

const UserList = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <User
        id={1}
        age={24}
        name="David Sharp"
        bio="At work"
        image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></User>
      <Divider variant="inset" component="li" />
      <User
        id={2}
        age={21}
        name="Cindy Baker"
        bio="Another boring session"
        image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZSUyMGZhY2UlMjBnaXJsfGVufDB8fDB8fHww"
      ></User>
      <Divider variant="inset" component="li" />
      <User
        id={3}
        age={17}
        name="Travis Howard"
        bio="Wish me luck"
        image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></User>
      <Divider variant="inset" component="li" />
      <User
        id={4}
        age={27}
        name="Almos Ferrero"
        bio="Might run away..."
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBlb3BsZSUyMGZhY2UlMjBnaXJsfGVufDB8fDB8fHww"
      ></User>
    </List>
  );
};

export default UserList;
