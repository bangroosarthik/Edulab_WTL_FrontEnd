import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <div className="About">
        <div className="content">
          <h1>Welcome to Edulab</h1>
          <p>
            {" "}
            Your one-stop destination for comprehensive lab manuals and
            invaluable resources throughout your academic journey.
            <br />
            At Edulab, we are committed to empowering students from their first
            year to the fourth year with easy access to high-quality lab manuals
            and a wealth of educational materials.
            <br />
            Our mission is to enhance your learning experience by providing
            meticulously crafted lab manuals tailored to each academic year.{" "}
            <br />
            Whether you're a freshman exploring the wonders of science or a
            senior diving into advanced experiments, Edulab is here to guide you
            every step of the way.
            <br />
            Here, knowledge knows no bounds, and success is within reach. Edulab
            - where education meets innovation.
          </p>
        </div>
      </div>

    <div className="Objective" >
      <div>
        <h1>Objective</h1>
        <p className="contentpara">
          To create a user-friendly website that provides students with easy
          access to lab manuals over the internet, assignments, <br /> and video
          references, enhancing their learning experience and academic success.
          <br />
          To offer teachers the ability to seamlessly login and upload
          course-specific study materials for their <br />respective subjects,
          fostering efficient content management and enhancing the teaching
          process.
        </p> 
      </div> 
    </div>

    </>
  );
};

export default AboutUs;
