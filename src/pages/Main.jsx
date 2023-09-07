import React, { useState } from "react";
import SiderBar from "../components/SiderBar";
import Header from "../components/Header";

export default function Main() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };
  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <SiderBar openDrawer={openDrawer}/>
    </div>
  );
}
