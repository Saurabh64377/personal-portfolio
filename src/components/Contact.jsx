import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <div  className="bg-black text-white py-12" id="contact">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                            Let&apos;s Talk
                        </h3>
                        <p>I&apos;m open to discussing web development projects or partnership opportunities.</p>
                        <div className="mb-4 mt-8">
                            <FaEnvelope className="inline-block text-green-400 mr-2" />
                            <a
                                className="hover:underline"
                                href="mailto:saurabh64377@gmail.com"
                                aria-label="Email"
                            >
                                saurabh64377@gmail.com
                            </a>
                        </div>
                        <div className="mb-4">
                            <FaPhone className="inline-block text-green-400 mr-2" />
                            <a
                                className="hover:underline"
                                href="tel:+8853953602"
                                aria-label="Phone"
                            >
                                +8853953602
                            </a>
                        </div>
                        <div className="mb-4">
                            <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
                            <span>Gorakhpur, Taramandal, India</span>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-2" htmlFor="name">
                                    Your Name:
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-2" htmlFor="email">
                                    Your Email:
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-2" htmlFor="message">
                                    Message:
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Enter your message"
                                    required
                                    className="w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
