import React from "react";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

const TrendingSection = ({ mockData }) => {
  const trendingApps = mockData.slice(24, 32);
  console.log(trendingApps);

  return (
    <section className="p-10 md:p-20 flex flex-col gap-10 items-center">
      <div className="w-full text-center flex flex-col items-center gap-4">
        <h3 className="font-bold text-3xl md:text-5xl text-heading-color">
          Trending Apps
        </h3>
        <p className="text-lg leading-6 md:text-xl md:leading-8 text-subheading-color">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="w-full grid grid-cols-4 gap-4">
        {trendingApps.map((app) => (
          <div
            key={app.id}
            className="bg-white p-4 rounded flex flex-col gap-4"
          >
            <img src={app.image} alt={app.title} className="rounded-lg" />
            <h4 className="font-medium line-clamp-1 text-ellipsis">
              {app.title}
            </h4>
            <div className="flex items-center justify-between">
              <span className="text-base text-my-accent bg-my-accent-bg px-2.5 py-1.5 rounded flex items-center gap-1">
                <LuDownload className="size-4" />
                {app.downloads}
              </span>
              <span className="text-base text-my-accent2 bg-my-accent-bg2 px-2.5 py-1.5 rounded flex items-center gap-1">
                <FaStar />
                {app.ratingAvg}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="font-semibold text-white px-10 py-3.5 rounded bg-gradient-to-br from-dark-purple to-light-purple">
        Show All
      </button>
    </section>
  );
};

export default TrendingSection;
