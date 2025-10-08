import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-svh font-inter">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default App;
