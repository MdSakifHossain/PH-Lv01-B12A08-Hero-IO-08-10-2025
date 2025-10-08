import React from "react";
import { Outlet } from "react-router";
import { IconChecks, IconPoo } from "@tabler/icons-react";
import { Toaster, toast } from "sonner";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <div>
        <h1 className="text-6xl">App.jsx</h1>
        <IconPoo stroke={2} className="size-16" />
        <Outlet />
        <button
          className="btn btn-outline btn-success"
          onClick={() => {
            toast(() => (
              <div className="font-poppins flex items-center justify-between gap-4">
                <IconChecks className="size-10 text-rose-500" />
                <h1 className="text-base">It works bro.</h1>
              </div>
            ));
          }}
        >
          Give me a toast
        </button>
      </div>
    </>
  );
};

export default App;
