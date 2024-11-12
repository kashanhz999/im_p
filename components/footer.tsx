import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "../lib/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <>
    <footer className="w-full pt-20 " id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-6 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
  Building <span className="text-purple-400">Connections</span> for a{" "}
  <span className="text-purple">Smarter </span> Aviation Future ?
</h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how we can team up for a
          better future!
        </p>
        <a href="mailto:kashan.hz@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mohammad Imran
        </p>

      </div>
    </footer></>
  );
};

export default Footer;
