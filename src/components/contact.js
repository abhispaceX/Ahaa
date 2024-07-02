// src/components/ContactUs.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Contact Us</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Have any questions or feedback? We'd love to hear from you!
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faPhone} className="text-green-600 w-6 h-6" />
            <span className="text-gray-800">8688472999</span>
          </div>
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-red-600 w-6 h-6" />
            <span className="text-gray-800">support@fooddeliveryapp.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 w-6 h-6" />
            <span className="text-gray-800">123 LB Nagar, Hyderabad, Telangana</span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://facebook.com" className="text-gray-500 hover:text-blue-700">
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" className="text-gray-500 hover:text-blue-400">
            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" className="text-gray-500 hover:text-pink-600">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>
        </div>
        
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your Message" rows="4"></textarea>
            </div>
          </div>
          
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
