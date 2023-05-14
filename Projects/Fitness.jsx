import React from "react";
import Tilt from "react-parallax-tilt";
import { LineText, CustomButton } from "../Components";

const BlogImages = [
  {
    image: "/images/projects/Fitness/1.png",
  },
  {
    image: "/images/projects/Fitness/2.png",
  },
  {
    image: "/images/projects/Fitness/3.png",
  },
  {
    image: "/images/projects/Fitness/4.png",
  },
];

const IconData = [
  {
    icon: "/images/skills/css.svg",
    iconSize: 50,
    text: "CSS",
  },
  {
    icon: "/images/skills/js.svg",
    iconSize: 60,
    text: "JavaScript",
  },
  {
    icon: "/images/skills/react.svg",
    iconSize: 120,
    text: "React JS",
  },
  {
    icon: "/images/skills/responsive-design.png",
    iconSize: 50,
    text: "Responsive",
  },
  {
    icon: "/images/skills/ux.png",
    iconSize: 50,
    text: "Design",
  },
];

const Fitness = () => {
  return (
    <section className="w-full font-poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 mb-48 mt-10 md:mt-0">
        {/* left Side */}
        <div className="flex flex-col gap-4 px-10 md:pl-10 md:pr-0 lg:px-0">
          <LineText text="What's all about it?" />
          <p className="text-white text-6xl lg:text-7xl font-extrabold w-[80%]">
            Fitness Landing
          </p>
          <p className="md:w-[90%] lg:w-[80%] text-violet text-base font-poppins mb-5">
            This is a landing page for a gym. It's fully responsive and has an
            incredible design, that's modern and cool, with nice looking
            animations, which attracts the users. <br />
            This is a single page landing, that was developed by React.js and
            CSS. Please feel free to check out this beautiful landing page.
          </p>

          <span className="flex flex-col md:flex-row gap-4 z-10">
            <CustomButton
              text="View the Project"
              href="https://meraj-fit-club.pages.dev/"
              target="_blank"
            />
            <CustomButton
              text="View On GitHub"
              href="https://github.com/Meraj-Mazidi/get-fit-gym-website"
              target="_blank"
            />
          </span>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center items-center z-10 px-6 lg:px-0 mt-20 md:mt-0">
          <a href="https://meraj-fit-club.pages.dev/" target="_blank">
            <Tilt
              scale="1.1"
              transitionSpeed={5000}
              className="lg:w-[90%] rounded-xl shadow-light-xl hover:shadow-light-3xl"
            >
              <img
                src={"/images/projects/FitClub.png"}
                alt="projectDemo"
                className="w-full rounded-xl"
              />
            </Tilt>
          </a>
        </div>
      </div>

      {/* Middle Content */}
      <div className="w-full my-5 flex flex-col items-center gap-8 font-poppins px-4 md:px-0 lg:-ml-10 relative">
        <p className="text-white text-5xl font-bold text-center">
          Let's talk about the project
        </p>

        <p className="md:w-[650px] text-center text-violet text-base">
          Various technologies, libraries and frameworks were used on this
          project. You can check out some of the most important ones right here.
        </p>

        <p className="text-white text-4xl font-bold text-center mt-10">
          What <span className="text-pink">Technologies</span> are used?
        </p>

        <div className="flex justify-center items-end gap-10 h-auto flex-wrap px-4 md:px-0">
          {IconData.map((icon, i) => (
            <span key={i} className="flex flex-col items-center gap-3">
              <img src={icon.icon} alt={icon.text} width={icon.iconSize} />
              <p className="text-center text-violet text-base">{icon.text}</p>
            </span>
          ))}
        </div>
        <img
          src={"/images/vectors/circle-spin.svg"}
          alt="vector"
          className="absolute bottom-5 blur-sm p-0 m-0 z-0"
        />
      </div>

      {/* Bottom Content */}
      <div className="mt-[100px]">
        <div className="flex flex-col items-center text-center px-4">
          <p className="text-white text-4xl font-bold text-center">
            What's it look like?
          </p>
          <p className="md:w-[650px] text-center text-violet text-base">
            Let's take a little sneak peek of some screenshots and pages of this
            project, you can also check out the project yourself. It's live and
            rocking!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 px-6 md:pr-5">
          {BlogImages.map((item, i) => (
            <Tilt key={i} scale="1.1" transitionSpeed={5000}>
              <a href="https://meraj-fit-club.pages.dev/" target="_blank">
                <img
                  src={item.image}
                  alt="Project-demo"
                  width="auto"
                  height="auto"
                  className="w-full rounded-2xl hover:shadow-light-3xl"
                />
              </a>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fitness;
