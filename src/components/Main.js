import React from "react";
import pic from "../images/IMG_9450_small.png";

export const Main = () => {
  return (
    <div className="intro_container">
      <section className="intro_img_container">
        <img src={pic} alt="display" />
        <span className="caption">Grand Canyon AZ from Plateau Point</span>
      </section>
      <section className="intro_content_container">
        <section className="banner">
          <h1>Welcome to my World Wide Web space</h1>
        </section>
        <section className="content">
          <p>
            My name is Terry Partridge. I am a Software Engineer based in
            Mission Viejo, California. This is my space, I hope you find it
            useful.
          </p>
        </section>
      </section>
    </div>
  );
};
