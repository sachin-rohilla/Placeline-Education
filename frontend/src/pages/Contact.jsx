import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const Contact = () => {
  const { isDark } = useAppContext();

  return (
    <div className=" py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center  mb-12">Contact Us</h1>

        <div
          className={`p-6 rounded-lg shadow-lg mb-12 ${
            isDark ? "bg-neutral" : ""
          }`}
        >
          <h2 className="text-2xl font-semibold  mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-info text-3xl" />
              <div>
                <h3 className="text-xl font-semibold ">Our Address</h3>
                <p className=" mt-1">Brass Market, Rewari (Haryana)</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-green-600 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold ">Phone Number</h3>
                <p className=" mt-1">+91-123-456-7890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-error text-3xl" />
              <div>
                <h3 className="text-xl font-semibold ">Email Address</h3>
                <p className=" mt-1">omdeep@placeline.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold  mb-6">Find Us</h2>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.437584536119!2d-122.0842496850891!3d37.42206597982568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7d69c51c013%3A0xb04e90ae30e2b591!2sGoogleplex!5e0!3m2!1sen!2sus!4v1648775085902!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
