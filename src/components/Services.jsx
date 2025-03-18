import React, { useEffect, useState } from "react";
import {
  FaComments,
  FaHospital,
  FaExclamationTriangle,
  FaUsers,
  FaCalendarAlt,
  FaBullhorn,
  FaGraduationCap,
  FaMicrophone,
} from "react-icons/fa";

// Data for Services Section
const servicesData = [
  {
    title: "Live Consultancy",
    description: "AI-powered chatbot for live consultations.",
    icon: <FaComments />,
    url: "/consultancy",
  },
  {
    title: "Rehabilitation Centers",
    description: "Contacts of rehabilitation centers and doctors.",
    icon: <FaHospital />,
    url: "/rehabilitation",
  },
  {
    title: "Emergency Report",
    description: "Direct contact with ANF for drug-related emergencies.",
    icon: <FaExclamationTriangle />,
    url: "/emergency",
  },
];

// Data for Awareness Section
const awarenessData = [
  {
    title: "Awareness Sessions",
    description: "Online sessions with timings, dates, and video links.",
    icon: <FaCalendarAlt />,
    url: "/awareness-session",
  },
  {
    title: "Awareness Campaigns",
    description: "Campaigns running against drugs.",
    icon: <FaBullhorn />,
    url: "/campaigns",
  },
  {
    title: "Student Societies",
    description: "Links to societies by area.",
    icon: <FaGraduationCap />,
    url: "/student",
  },
];

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section className="bg-gray-100 relative overflow-hidden min-h-screen px-8 py-20">
      {/* Services Section */}
      <div className="mb-32">
        <h2 className="text-6xl font-bold text-center text-black mb-16">
          <i> Our Services </i>
        </h2>
        <div className="relative overflow-visible">
          <div
            className={`flex gap-6 ${
              isMobile ? "flex-col" : "flex-wrap justify-center"
            }`}
          >
            {servicesData.map((service, index) => (
              <a
                key={index}
                href={service.url}
                rel="noopener noreferrer"
                className="w-96 bg-green-100 text-gray-700 rounded-2xl shadow-lg p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-green-400"
              >
                <div className="text-6xl mb-4 text-green-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Awareness Section */}
      <div>
        <h2 className="text-6xl font-bold text-center text-black mb-16">
          <i> Awareness </i>
        </h2>
        <div className="relative overflow-visible">
          <div
            className={`flex gap-6 ${
              isMobile ? "flex-col" : "flex-wrap justify-center"
            }`}
          >
            {awarenessData.map((awareness, index) => (
              <a
                key={index}
                href={awareness.url}
                rel="noopener noreferrer"
                className="w-96 bg-green-100 text-gray-700 rounded-2xl shadow-lg p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-green-400"
              >
                <div className="text-6xl mb-4 text-green-300">
                  {awareness.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-black">
                  {awareness.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {awareness.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
