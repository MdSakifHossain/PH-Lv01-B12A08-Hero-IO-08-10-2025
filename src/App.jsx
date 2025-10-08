import React from "react";
import { Outlet } from "react-router";
import { Toaster, toast } from "sonner";
import { FaGithub } from "react-icons/fa";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <div>
        <h1 className="text-6xl">App.jsx</h1>
        <FaGithub className="size-9" />
        <FaGithub />
        <Outlet />
        <button
          className="btn btn-outline btn-success"
          onClick={() => {
            toast(() => (
              <div className="font-poppins flex items-center justify-between gap-4">
                ✅ <h1 className="text-base">It works bro.</h1>
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
