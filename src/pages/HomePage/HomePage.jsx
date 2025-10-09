import React from "react";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";

const HomePage = () => {
  return (
    <div className="w-full flex-1">
      {/* <h1 className="text-4xl">Homepage.jsx</h1> */}
      <Hero />
      <Banner></Banner>
    </div>
  );
};

export default HomePage;
