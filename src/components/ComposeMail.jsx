import React from "react";
import {
  Dialog,
  Box,
  Typography,
  styled,
  InputBase,
  Button,
  TextField,
} from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";

const dialogStyle = {
  width: "80%",
  height: "90%",
  maxHeight: "100%",
  maxWidth: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
  "& > p": {
    fontSize: 14,
    fontWeight: 600,
  },
});

const RecipientsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    fontSize: 14,
    borderBottom: "1px solid #f5f5f5",
    marginTop: 10,
  },
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 15px",
});

const SendButton = styled(Button)({
  backgroundColor: "#0B57D0",
  color: "#fff",
  fontWeight: 500,
  textTransform: "none",
  borderRadius: 18,
  width: 100,
});

export default function ComposeMail({ toggleMail, setToggleMail }) {
  const closeMailBox = (e) => {
    setToggleMail(false);
  };

  const config = {
    Host: "smtp.elasticemail.com",
    Username: "hosi123@yopmail.com",
    Password: "65766240B54AB789BDBEE666DAEC0FBB537E",
    Port: 2525,
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: "vastanikeyur1711@gmail.com",
        From: "vastanikeyur1711@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body",
      })
        .then((message) => alert("==========", message))
        .catch((e) => {
          alert(e);
        });
    }
    setToggleMail(false);
  };
  return (
    <Dialog open={toggleMail} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>New Messgage</Typography>
        <Close
          fontSize="small"
          onClick={(e) => {
            closeMailBox(e);
          }}
        />
      </Header>
      <RecipientsWrapper>
        <InputBase placeholder="Recipients" />
        <InputBase placeholder="Subject" />
      </RecipientsWrapper>
      <TextField
        multiline
        rows={26}
        sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
      />
      <Footer>
        <SendButton
          onClick={(e) => {
            sendMail(e);
          }}
        >
          Send
        </SendButton>
        <DeleteOutline onClick={closeMailBox} />
      </Footer>
    </Dialog>
  );
}
