import React from "react";
import logo from '../images/csmc-logo.png';
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              {/* Logo */}
              <img
                src={logo}
                alt="Logo"
                className="mx-auto md:mx-0 h-16"
              />
            </div>
            <p className="text-sm">
            The Causmic Club proudly presents its inaugural Model United Nations, 
            marking the beginning of a new legacy. With a vision to inspire global perspectives and meaningful dialogue, 
            our first-ever MUN promises an enriching experience for all participants.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-sm">
            Guru Gian Vihar Jawaddi, Ludhiana 141013.
            </p>
            <p className="mt-2 text-sm">Phone: +91 77194 50870</p>
            <p className="mt-2 text-sm">Email: ishmeetsinghxa@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Our Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Registrations
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm md:flex md:justify-between">
          <p className="text-sm">
            ©2024 Ishmeet Singh . All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:underline text-sm">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline text-sm">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
