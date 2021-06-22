import React from "react";
//import displayImg from '../images/IMG_9450.JPG';
import pic from "../images/IMG_9450_small.png";

export const Main = () => {
  return (
    <div className="intro_container">
      <section className="display_img">
        <section className="display_img_image">
          <img src={pic} alt="display image" />
        </section>
        <section className="display_img_caption">
          <span className="caption">Grand Canyon AZ from Plateau Point</span>
        </section>
      </section>
      <section className="intro_content">
        <section className="banner">
          <h1>Welcome to my World Wide Web space</h1>
        </section>
        <article className="content">
          <p>
            My name is Terry Partridge. I am a Software Engineer based in
            Mission Viejo, California. This is my space, I hope you find it
            useful.
          </p>
        </article>
      </section>
    </div>
  );
};
