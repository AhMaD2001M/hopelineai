import React from "react";

const emergencyData = [
  {
    city: "Karachi",
    anfStation: "ANF Karachi Station",
    contact: "+92-300-1234567",
  },
  {
    city: "Lahore",
    anfStation: "ANF Lahore Station",
    contact: "+92-300-2345678",
  },
  {
    city: "Islamabad",
    anfStation: "ANF Islamabad Station",
    contact: "+92-300-3456789",
  },
  {
    city: "Peshawar",
    anfStation: "ANF Peshawar Station",
    contact: "+92-300-4567890",
  },
  {
    city: "Quetta",
    anfStation: "ANF Quetta Station",
    contact: "+92-300-5678901",
  },
  {
    city: "Multan",
    anfStation: "ANF Multan Station",
    contact: "+92-300-6789012",
  },
  {
    city: "Faisalabad",
    anfStation: "ANF Faisalabad Station",
    contact: "+92-300-7890123",
  },
];

const EmergencyReport = () => {
  return (
    <section className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Emergency Report
          </h1>
          <p className="text-lg text-gray-600">
            Contact ANF stations in your city for immediate assistance.
          </p>
        </div>

        {/* Emergency Stations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyData.map((emergency, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold text-white mb-3">
                {emergency.city}
              </h2>
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-100">{emergency.anfStation}</p>
              </div>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-gray-100">{emergency.contact}</p>
              </div>
              <a
                href={`tel:${emergency.contact}`}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors duration-300"
              >
                Call Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyReport;
