import React from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCloud,
  FaPaintBrush,
  FaPython,
  FaChartLine,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className=" py-12 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center  mb-12">About Us</h1>

        <p className="text-lg  mb-8">
          Welcome to{" "}
          <span className="font-semibold text-accent">Placeline</span>, where
          innovation meets education. We are a leading learning hub dedicated to
          empowering individuals with the skills and knowledge necessary to
          excel in today’s dynamic tech landscape. Our mission is to deliver
          top-tier education in a range of cutting-edge fields including:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className=" p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4">
            <FaGraduationCap className="text-blue-600 text-4xl md:text-5xl lg:text-6xl" />
            <div>
              <h2 className="text-xl font-semibold ">
                Comprehensive Curriculum
              </h2>
              <p className=" mt-2">
                Crafted by industry experts, our curriculum covers foundational
                workshops to advanced certifications.
              </p>
            </div>
          </div>

          <div className=" p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4">
            <FaLaptopCode className="text-green-600 text-4xl md:text-5xl lg:text-6xl" />
            <div>
              <h2 className="text-xl font-semibold ">MERN Stack Development</h2>
              <p className=" mt-2">
                Learn full-stack development with modern JavaScript technologies
                including MongoDB, Express.js, React, and Node.js.
              </p>
            </div>
          </div>

          <div className=" p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4">
            <FaCloud className="text-yellow-600 text-4xl md:text-5xl lg:text-6xl" />
            <div>
              <h2 className="text-xl font-semibold ">AWS Cloud Solutions</h2>
              <p className=" mt-2">
                Master cloud computing with AWS to build scalable and reliable
                applications.
              </p>
            </div>
          </div>

          <div className=" p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4">
            <FaPaintBrush className="text-purple-600 text-4xl md:text-5xl lg:text-6xl" />
            <div>
              <h2 className="text-xl font-semibold ">UI/UX Design</h2>
              <p className=" mt-2">
                Create stunning user interfaces and improve user experiences
                with our design courses.
              </p>
            </div>
          </div>

          <div className=" p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4">
            <FaPython className="text-red-600 text-4xl md:text-5xl lg:text-6xl" />
            <div>
              <h2 className="text-xl font-semibold ">Python Programming</h2>
              <p className=" mt-2">
                Gain proficiency in Python, one of the most versatile and widely
                used programming languages.
              </p>
            </div>
          </div>

          <div className=" p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4">
            <FaChartLine className="text-teal-600 text-4xl md:text-5xl lg:text-6xl" />
            <div>
              <h2 className="text-xl font-semibold ">Data Science</h2>
              <p className=" mt-2">
                Unlock insights from data with our comprehensive data science
                courses.
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg  mb-8">
          At <span className="font-semibold text-accent">Placeline</span>, we
          offer both offline and online learning options. Our offline classes
          provide a hands-on, immersive experience in a state-of-the-art
          environment, while our online courses offer flexibility and
          convenience.
        </p>

        <p className="text-lg  mb-8">
          Our educators are committed to guiding you through every step of your
          educational journey. With personalized instruction, you will gain
          practical skills applicable in the workplace. Our diverse range of
          programs includes everything from foundational workshops to advanced
          certifications.
        </p>

        <p className="text-lg ">
          We also provide robust support services, including career counseling
          and job placement assistance, to help you transition smoothly into
          your chosen field. Join us and take the next step in your career with
          confidence.
        </p>

        <p className="text-lg ">
          Together, let’s build a future where technology and talent drive
          innovation and success.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
