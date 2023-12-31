import React, { useState } from "react";
import { Box, Button, styled, List, ListItem } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";

const ComposedButton = styled(Button)({
  background: "#c3e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: 16,
  textTransform: "none",
  minWidth: 140,
});

const Contener = styled(Box)({
  padding: 8,
  "& > ul": {
    padding: "10px 0 0 5px",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
  },
  "& >ul > li > svg": {
    marginRight: 20,
  },
});

export default function SidebarContent() {
  const [toggleMail, setToggleMail] = useState(false);
  const toggleComposeMail = () => {
    console.log("sdasdsdas", toggleMail);
    setToggleMail((prev) => !prev);
  };

  return (
    <Contener>
      <ComposedButton variant="text" onClick={toggleComposeMail}>
        <CreateOutlined />
        composed
      </ComposedButton>
      <List>
        {SIDEBAR_DATA.map((item) => (
          <ListItem>
            <item.icon />
            {item.title}
          </ListItem>
        ))}
      </List>
      <ComposeMail toggleMail={toggleMail} setToggleMail={setToggleMail} />
    </Contener>
  );
}
