import React, { useContext } from "react";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";

import { InstalledContext } from "../../contexts/InstalledContext";

const InstallationPage = () => {
  const { data } = useLoaderData();
  const [globalInstalledList, setGlobalInstalledList] =
    useContext(InstalledContext);
  const app = data[23];

  console.log(globalInstalledList);

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
            1 Apps Found
          </h3>

          <select defaultValue="Pick a color" className="select w-min">
            <option disabled={true}>Sort By Size</option>
            <option>Low-High</option>
            <option>High-Low</option>
          </select>
        </div>

        {/* cards constainer */}
        <div className="flex flex-col gap-4">
          {/* individual card */}
          <div className="bg-white p-4 rounded flex items-center justify-center gap-4">
            <img className="size-20 rounded-lg" src={app.image} alt="" />
            <div className="flex-1">
              <h4 className="font-medium text-xl text-heading-color">
                {app.title}
              </h4>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-my-accent">
                  <FiDownload />
                  {app.downloads}
                </div>
                <div className="flex items-center gap-1 text-my-accent2">
                  <FaStar /> {app.ratingAvg}
                </div>
                <div className="text-subheading-color">{app.size} MB</div>
              </div>
            </div>
            <button className="bg-my-accent px-4 py-3 rounded font-semibold text-white">
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationPage;
