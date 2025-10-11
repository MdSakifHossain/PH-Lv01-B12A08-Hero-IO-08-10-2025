import React, { useContext } from "react";
import { useLoaderData } from "react-router";

import { InstalledContext } from "../../contexts/InstalledContext";
import InstalledAppCard from "../../components/InstalledAppCard";

const InstallationPage = () => {
  const { data: allApps } = useLoaderData();
  const [globalInstalledList, setGlobalInstalledList] =
    useContext(InstalledContext);

  return (
    <section className="w-full flex-1 p-20 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-bold text-5xl text-heading-color">
          Your Installed Apps
        </h2>
        <p className="text-xl leading-8 text-subheading-color">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-2xl leading-8 text-heading-color">
            {globalInstalledList.length} Apps Found
          </h3>

          <select defaultValue="Pick a color" className="select w-min">
            <option disabled={true}>Sort By Size</option>
            <option>Low-High</option>
            <option>High-Low</option>
          </select>
        </div>

        {/* cards constainer */}
        <div className="flex flex-col gap-4">
          {globalInstalledList.map((appId) => (
            <InstalledAppCard
              key={appId}
              app={allApps.find((app) => app.id === appId)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationPage;
