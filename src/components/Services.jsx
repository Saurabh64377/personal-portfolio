import React from 'react';

const services = [
    {
        id: 1,
        title: "Web Design",
        description: "Creating visually appealing and user-friendly web designs."
    },
    {
        id: 2,
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces."
    },
    {
        id: 3,
        title: "Backend Development",
        description: "Developing robust server-side logic and databases."
    },
    {
        id: 4,
        title: "Full-Stack Development",
        description: "Combining front-end and back-end expertise for end-to-end solutions."
    },
    {
        id: 5,
        title: "Content Writing",
        description: "Writing professional content for your business and companies."
    }
];

const Services = () => {
    return (
        <div className="bg-black text-white py-16" id="services">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <article
                            className="bg-gray-800 px-6 pb-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
                            key={service.id}
                        >
                            <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                {service.id}
                            </div>
                            <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-gray-300">{service.description}</p>
                            <a
                                className="mt-4 inline-block text-green-400 hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                                href="#"
                            >
                                Read More
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
