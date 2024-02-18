import { Home, MailIcon, PhoneCall } from "lucide-react";
import React from "react";
// import { infoData } from "./About";
import { infoData } from "@/utils/constants";

const Contact = () => {
  return (
    <section
      className=" container mx-auto pb-5 max-h-[700px] "
      id="contact-section"
    >
      <div className="container mx-auto flex justify-center py-3">
        <div>
          <img
            src="/dots-light.svg"
            alt=""
            className="h-[22px] w-[22px] items-center justify-center justify-self-start"
          />
        </div>
        <h2 className="text-2xl">Contact info</h2>
      </div>
      <div>
        <h1 className="h2 flex justify-center mx-auto py-3">
          Let's Get in Touch
        </h1>
      </div>
      <div className="grid gap-y-5 mx-auto justify-center pt-6 text-lg">
        <div className="flex items-center gap-x-5">
          <MailIcon size={18} className="text-primary" />
          <div>{infoData[2].text}</div>
        </div>
        <div className="flex items-center gap-x-5">
          <PhoneCall size={18} className="text-primary" />
          <div>{infoData[1].text}</div>
        </div>
        <div className="flex items-center gap-x-5">
          <Home size={18} className="text-primary" />
          <div>{infoData[5].text}</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
