import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

import { getItemsFromLS } from "./utilities";
import { OurContext } from "./OurContext";
import { ToastContainer } from "react-toastify";

const Root = () => {
  const [installedAppList, setInstalledAppList] = useState([]);

  useEffect(() => {
    const ins = getItemsFromLS();
    setInstalledAppList(ins);
  }, []);

  return (
    <div id="root1">
      <Header />

      <OurContext value={[installedAppList, setInstalledAppList]}>
        <div className="main-content">
          <Outlet />
        </div>
      </OurContext>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
