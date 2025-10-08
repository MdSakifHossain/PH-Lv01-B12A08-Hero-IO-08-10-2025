import React from "react";
import { Outlet } from "react-router";
import { IconPoo } from "@tabler/icons-react";

const App = () => {
  return (
    <div>
      <h1 class="text-6xl">App.jsx</h1>
      <IconPoo stroke={2} className="size-16" />
      <Outlet />
    </div>
  );
};

export default App;
