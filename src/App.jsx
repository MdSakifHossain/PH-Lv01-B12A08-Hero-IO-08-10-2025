import React from "react";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <h1 class="text-6xl">App.jsx</h1>
      <Outlet />
    </div>
  );
};

export default App;
