import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="  py-12 px-8   ">
      <div className="container mx-auto  border-t   border-opacity-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div>
            <div
              onClick={() => navigate("/")}
              className="flex items-center cursor-pointer space-x-2"
              title="PlaceLine"
            >
              <img
                src="/logo.jpeg"
                alt="PlaceLine Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span>
                <span className="text-xl font-bold">PlaceLine</span>
                <p className="text-xs mt-0.5">JOB ORIENTED TRAINING</p>
              </span>
            </div>

            <p className="text-sm mt-4">
              © {new Date().getFullYear()} Placeline Education. All rights
              reserved.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" title="Home" className=" hover:border-b ">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  title="About Us"
                  className=" hover:border-b border-bottom"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  title="Courses"
                  className=" hover:border-b border-bottom"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  title="Contact Us"
                  className=" hover:border-b border-bottom"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="" />
              Brass Market, Rewari (Haryana)
            </p>
            <p className="text-sm mb-2">Email: omdeep@placeline.com</p>
            <p className="text-sm">Phone: +91-123-456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" "
                title="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                title="Twitter"
                rel="noopener noreferrer"
                className=" "
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className=" "
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className=" "
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
