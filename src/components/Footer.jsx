import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 h-screen pt-12 md:pt-20 pb-6">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h5 className="uppercase text-gray-600 mb-2">About Us</h5>
            <ul className="list-none mb-0">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h5 className="uppercase text-gray-600 mb-2">Services</h5>
            <ul className="list-none mb-0">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Medical Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Surgical Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Diagnostic Services
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h5 className="uppercase text-gray-600 mb-2">Resources</h5>
            <ul className="list-none mb-0">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Patient Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Medical Library
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Health Tips
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-600 text-center">
          © {currentYear} Hospital Management System. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;