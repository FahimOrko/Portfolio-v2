import React from "react";
import HeaderText from "../HeaderText";
import StaggeredText from "../StaggerdText";

const Contact = () => {
  return (
    <section id="contact" className="h-[160dvh] w-full relative">
      <div className="absolute inset-0 bg-midnight-dusk bg-cover bg-left-bottom bg-no-repeat z-0" />
      <div className="absolute inset-0 max-w-[80%] sm:max-w-[80%] h-[90%] mx-auto mt-10">
        <span className="uppercase ">
          <HeaderText type="cyan">
            <StaggeredText>Contact</StaggeredText>{" "}
          </HeaderText>
        </span>
      </div>
    </section>
  );
};

export default Contact;
