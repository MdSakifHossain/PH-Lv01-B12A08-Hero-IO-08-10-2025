import React from "react";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <section className="bg-neutral-50 text-black p-10 rounded-b-4xl grid grid-cols-4 gap-6 *:min-h-60">
        <div className="rounded-3xl px-8 py-6 text-3xl font-medium leading-12 flex flex-col items-start justify-between gap-14 bg-neutral-300 transition-all duration-150 ease-in hover:bg-my-accent hover:text-white">
          <p>Let's start a Project.</p>
          <BsArrowUpRight className="stroke-[0.5]" />
        </div>

        <div className="rounded-3xl px-8 py-6 text-3xl font-semibold leading-12 flex flex-col items-start justify-between gap-14 bg-gradient-to-br from-my-accent2 to-50% to-my-accent col-span-2 text-white">
          <p>
            Subscribe to our Newsletter and learn about new <br />
            projects, launches and news.
          </p>
          <div className="border-0 border-b-3 w-full pb-4 flex items-center justify-between gap-2">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="text-2xl font-medium flex-1 focus-visible:outline-0"
            />
            <BsArrowRight className="stroke-[0.5] text-3xl" />
          </div>
        </div>

        <div className="rounded-3xl px-8 py-6 text-3xl font-medium leading-12 flex flex-col items-start justify-between gap-14 bg-neutral-300 transition-all duration-150 ease-in hover:bg-my-accent hover:text-white">
          <p>Let's talk.</p>
          <p className="text-2xl tracking-wide flex flex-col gap-2">
            <span>Github.com/MdSakifHossain</span>
            <span className="word-spacing tracking-wider">
              VG3V+35M Kohinur More, Road No -15, Khulna 9000
            </span>
          </p>
        </div>
      </section>
      <section className="px-20 py-8 flex items-center justify-between">
        <h2 className="text-3xl font-medium flex items-center gap-2">
          <img className="size-16" src="/images/logo.png" alt="Logo" />
          <span className="tracking-widest">HERO.IO</span>
        </h2>

        <div className="flex items-center justify-between gap-4">
          <Link
            to={"/"}
            className="px-10 py-3 bg-gradient-to-br from-dark-purple to-light-purple text-xl font-semibold rounded-full"
          >
            Hero.io
          </Link>
          <button className="px-10 py-3 bg-neutral-700 rounded-full text-xl font-medium">
            Apps
          </button>
        </div>

        <div className="flex items-center gap-8 *:text-gray-300">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
