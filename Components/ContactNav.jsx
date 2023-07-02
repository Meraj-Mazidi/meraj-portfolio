import React from "react";
import { BsTelegram } from "react-icons/bs";

const socialBarData = [
  {
    icon: "/images/icons/mail.svg",
    alt: "email",
    link: "mailto:merajmazidiwork@gmail.com",
  },
  {
    icon: "/images/icons/linkedin.svg",
    alt: "Linkedin",
    link: "https://ir.linkedin.com/in/meraj-mazidi-59290a155",
  },
  {
    icon: BsTelegram,
    alt: "telegram",
    link: "https://t.me/merajmazidi",
  },
  {
    icon: "/images/icons/github.svg",
    alt: "Github",
    link: "https://github.com/Meraj-Mazidi",
  },
  {
    icon: "/images/icons/instagram.svg",
    alt: "Instagram",
    link: "https://www.instagram.com/meraj_mazidii/",
  },
];

const ContactNav = () => {
  return (
    // <div className="bg-transparent w-20 fixed bottom-0 left-0 z-50 h-fit lg:h-full hidden lg:block">
    <div className="contact-nav">
      {/* <div className="absolute bottom-0"> */}
      <div className="contactNav-1">
        {/* <div className="w-full flex flex-col justify-center items-center pl-4 gap-4"> */}
        <div className="contactNav-2">
          {/* Social Icons */}
          {socialBarData.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              className="hover:scale-75 transition-all duration-500"
            >
              {item.alt === "telegram" ? (
                // <BsTelegram className="!text-[33px] text-violet" />
                <BsTelegram className="contactNav-3" />
              ) : (
                <img
                  src={item.icon}
                  alt={item.alt}
                  // className="!w-[32px]"
                  className="contactNav-4"
                />
              )}
            </a>
          ))}

          {/* Line */}
          {/* <span className="w-[3px] h-32 bg-violet border border-violet" /> */}
          <span className="contactNav-5" />
        </div>
      </div>
    </div>
  );
};

export default ContactNav;
