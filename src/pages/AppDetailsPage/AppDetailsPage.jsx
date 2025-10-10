import React from "react";
import { useLoaderData } from "react-router";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppDetailsPage = () => {
  const app = useLoaderData();

  return (
    <section className="w-full flex-1 p-20 flex flex-col gap-10">
      <div className="flex items-start justify-start gap-10">
        <img src={app.image} alt={app.title} className="size-80" />
        <div className="flex-1 flex flex-col items-start gap-4">
          <div className="w-full border-b-2 border-gray-300 pb-4 mb-3.5">
            <h3 className="font-bold text-[2rem] text-heading-color">
              {app.title}
            </h3>
            <p className="text-xl leading-8 text-subheading-color">
              <span>Developed by</span>{" "}
              <span className="font-semibold bg-gradient-to-br from-dark-purple to-light-purple text-transparent bg-clip-text">
                {app.companyName}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-40 flex flex-col gap-2 items-start">
              <img
                className="size-10"
                src="/images/icon-downloads.png"
                alt="downloads"
              />
              <p className="leading-6 text-heading-color">Downloads</p>
              <p className="font-extrabold text-[2.5rem] leading-10 text-heading-color">
                {app.downloads}
              </p>
            </div>
            <div className="w-40 flex flex-col gap-2 items-start">
              <img
                className="size-10"
                src="/images/icon-ratings.png"
                alt="ratings"
              />
              <p className="leading-6 text-heading-color">Average Ratings</p>
              <p className="font-extrabold text-[2.5rem] leading-10 text-heading-color">
                {app.ratingAvg}
              </p>
            </div>
            <div className="w-40 flex flex-col gap-2 items-start">
              <img
                className="size-10"
                src="/images/icon-review.png"
                alt="reviews"
              />
              <p className="leading-6 text-heading-color">Total Reviews</p>
              <p className="font-extrabold text-[2.5rem] leading-10 text-heading-color">
                {app.reviews}
              </p>
            </div>
          </div>

          <button className="bg-my-accent px-5 py-3.5 rounded font-semibold text-xl text-white">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex flex-col gap-6">
        <h2 className="font-semibold text-2xl leading-8 text-heading-color">
          Ratings
        </h2>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <ComposedChart layout="vertical" data={app.ratings.toReversed()}>
              <XAxis type="number" dataKey="count" />
              <YAxis dataKey="name" type="category" scale="band" />
              <Tooltip />
              <Bar dataKey="count" barSize={30} className="fill-my-accent2" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex flex-col gap-6">
        <h2 className="font-semibold text-2xl leading-8 text-heading-color">
          Description
        </h2>
        <p className="text-xl leading-8 text-subheading-color">
          {app.description}
        </p>
      </div>
    </section>
  );
};

export default AppDetailsPage;
