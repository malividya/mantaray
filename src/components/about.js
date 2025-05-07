import React from 'react';
import { motion } from 'framer-motion';
import  Button  from '../components/ui/button';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/three.jpg';
//import './App.css';
import {
    Building,
    Briefcase,
    Users,
    Mail,
    Phone,
    MapPin,
    ChevronRight,
} from 'lucide-react';
import { cn } from "./lib/utils"

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

// Data for team members s
const teamMembers = [
    {
        name: 'John Smith',
        title: 'CEO',
        image: {image3},
        bio: 'John is a visionary leader with over 20 years of experience in the real estate industry.',
    },
    {
        name: 'Jane Doe',
        title: 'Head of Marketing',
        image: {image1},
        bio: 'Jane is a marketing expert with a passion for creating engaging brand experiences.',
    },
    {
        name: 'David Lee',
        title: 'Sales Director',
        image: {image2},  
        bio: 'David leads our sales team with a focus on customer satisfaction and achieving results.',
    },
    {
        name: 'Sarah Williams',
        title: 'CFO',
        image: {image3},  
        bio: 'Sarah manages the financial health of the company, ensuring sustainable growth.',
    },
];

const AboutUsPage = () => {
    return (
        <div className="bg-gray-950 text-white">
            {/* Introduction Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 xl:px-32">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-300 mt-4 md:mt-6"
                    >
                        Welcome to The Hom, your trusted partner in finding the perfect property.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.5 }}
                        className="text-lg md:text-xl text-gray-300 mt-4 md:mt-6"
                    >
                        Welcome to the House of Mantaray (HOM), where cutting-edge technology meets storytelling.
Modern day advertising solutions are leveraged here to create and deliver immersive media experiences.
PRINT ADS
29
EVENTS
30
Happy
Our outcome led data-driven approach ensures tailored content that contextually captivates the audiences. It differentiate us in the world of sameness.
                    </motion.p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-900">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
                        >
                            Our Story
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-400"
                        >
                            The Hom was founded in [Year] with a vision to revolutionize the real estate experience.  [Add details about the company's founding, mission, and growth].
                            We started as a small team of passionate individuals and have grown into a leading real estate platform, connecting thousands of buyers, sellers, and renters.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.5 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-400 mt-4"
                        >
                            [Add information about key milestones, achievements, and the company's commitment to innovation and customer satisfaction.]
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        {/* Replace with an image representing the company's history or team */}
                        <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                            <span className="text-gray-400">Company History Image</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-pink-400 to-orange-500 text-transparent bg-clip-text">
                        Our Team
                    </h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="p-4 rounded-lg bg-gray-800 border border-gray-800 shadow-md"
                            >
                                <div className="flex justify-center mb-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full border-2 border-gray-700"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                                <p className="text-gray-400 text-center mb-2">{member.title}</p>
                                <p className="text-gray-300 text-sm">{member.bio}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 xl:px-32">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 rounded-xl border border-gray-800 shadow-lg transition-all duration-300 hover:border-gray-700 hover:shadow-xl hover:scale-[1.02] bg-gray-900/50 backdrop-blur-md">
                            <Building className="w-8 h-8 text-blue-400 mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Buying</h3>
                            <p className="text-gray-400 mb-4">
                                Find your dream home with our extensive listings and expert guidance.
                            </p>
                            <Button variant="outline" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 border-blue-500/30 transition-colors duration-200">
                                Explore Buying <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                        <div className="p-6 rounded-xl border border-gray-800 shadow-lg transition-all duration-300 hover:border-gray-700 hover:shadow-xl hover:scale-[1.02] bg-gray-900/50 backdrop-blur-md">
                            <Briefcase className="w-8 h-8 text-green-400 mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Selling</h3>
                            <p className="text-gray-400 mb-4">
                                Sell your property quickly and for the best price with our marketing strategies.
                            </p>
                            <Button variant="outline" className="text-green-400 hover:text-green-300 hover:bg-green-500/20 border-green-500/30 transition-colors duration-200">
                                Explore Selling <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                        <div className="p-6 rounded-xl border border-gray-800 shadow-lg transition-all duration-300 hover:border-gray-700 hover:shadow-xl hover:scale-[1.02] bg-gray-900/50 backdrop-blur-md">
                            <Users className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Renting</h3>
                            <p className="text-gray-400 mb-4">
                                Find the perfect rental property or list your property for rent with ease.
                            </p>
                            <Button variant="outline" className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 border-purple-500/30 transition-colors duration-200">
                                Explore Renting <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                        Contact Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-lg text-gray-400 mb-4">
                                Get in touch with us for any inquiries or to learn more about our services.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-red-400" />
                                    <span className="text-gray-300">Address: [Company Address]</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-5 h-5 text-orange-400" />
                                    <span className="text-gray-300">Phone: [Company Phone Number]</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-5 h-5 text-yellow-400" />
                                    <span className="text-gray-300">Email: [Company Email Address]</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* Contact Form Placeholder - Replace with actual form component */}
                            <div className="bg-gray-800 rounded-xl p-6 shadow-md">
                                <h3 className="text-2xl font-semibold mb-4">Send us a message</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Your Name"
                                            className="mt-1 p-2 w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Your Email"
                                            className="mt-1 p-2 w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
                                        <textarea
                                            id="message"
                                            placeholder="Your Message"
                                            className="mt-1 p-2 w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            rows={4}
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md transition-colors duration-300"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
