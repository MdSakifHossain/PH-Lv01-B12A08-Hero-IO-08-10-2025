import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const InstalledAppCard = ({ app }) => {
  return (
    <div className="bg-white p-4 rounded flex items-center justify-center gap-4">
      <img className="size-20 rounded-lg" src={app.image} alt={app.title} />

      <div className="flex-1">
        <h4 className="font-medium text-xl text-heading-color">{app.title}</h4>

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
  );
};

export default InstalledAppCard;
