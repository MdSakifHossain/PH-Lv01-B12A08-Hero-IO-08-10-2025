import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <Toaster position="top-right" /> */}
      <div className="min-h-svh bg-bg font-inter flex flex-col items-start">
        <Header />
        <main className="flex-1 w-full flex flex-col items-start">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
