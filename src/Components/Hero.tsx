import React from "react";
import HeroContacts from "./HeroContacts";
import HeroDescription from "./HeroDescription";
import Home from "../img/home.png";

const Hero = () => {
  return (
    <div className="grid-container " data-aos="fade-down">
      <div className="col-start-2 col-end-3 md:flex justify-center items-center pt-8 md:pt-40 pb-0 md:pb-56">
        <HeroContacts />
        <div>
          <HeroDescription />
        </div>
        <img className="w-2/5 md:block hidden " src={Home} alt="homeImage" />

        <div className="md:block hidden">
          <div className="rotate-90 px-5 py-10 text-darkgreen">Follow us</div>
          <div>
            <h1
              className="text-darkgreen font-light
             text-6xl flex justify-center "
            >
              |
            </h1>
          </div>

          <div>
            <div className="flex justify-center py-2 hover:translate-x-2 hover:cursor-pointer">
              <box-icon color="#335648" name="facebook" type="logo"></box-icon>
            </div>
            <div className="flex justify-center py-2 hover:translate-x-2 hover:cursor-pointer">
              <box-icon color="#335648" name="instagram" type="logo"></box-icon>
            </div>
            <div className="flex justify-center py-2 hover:translate-x-2 hover:cursor-pointer">
              <box-icon color="#335648" name="twitter" type="logo"></box-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
