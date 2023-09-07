import React from "react";
import {
  Dialog,
  Box,
  Typography,
  styled,
  InputBase,
  Input,
} from "@mui/material";
import { Close } from "@mui/icons-material";

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
  '& > div':{
    fontSize:14,
    borderBottom:'1px solid #f5f5f5',
    marginTop:10
  }
});

export default function ComposeMail() {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>New Messgage</Typography>
        <Close fontSize="small" />
      </Header>
      <RecipientsWrapper>
        <InputBase placeholder="Recipients" />
        <InputBase placeholder="Subject" />
      </RecipientsWrapper>
      <Box>text area</Box>
      <Box></Box>
    </Dialog>
  );
}
