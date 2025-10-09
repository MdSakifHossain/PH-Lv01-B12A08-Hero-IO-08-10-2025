import React from "react";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

const AppCard = ({ app }) => {
  return (
    <div key={app.id} className="bg-white p-4 rounded flex flex-col gap-4">
      <img src={app.image} alt={app.title} className="rounded-lg" />
      <h4 className="font-medium line-clamp-1 text-ellipsis">{app.title}</h4>
      <div className="font-medium flex items-center justify-between">
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
  );
};

export default AppCard;
