import React from "react";
import { Drawer } from "@mui/material";
import SidebarContent from "./SidebarContent";
import ComposeMail from "./ComposeMail";

export default function SiderBar({ openDrawer }) {
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      hideBackdrop={true}
      ModalProps={{ keepMounted: true }}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: 250,
          background: "#f5f5f5",
          borderRight: "none",
          height: "calc(100vh-64px)",
        },
      }}
    >
      <SidebarContent />
      <ComposeMail />
    </Drawer>
  );
}
