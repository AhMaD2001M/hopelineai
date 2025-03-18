import React, { useState } from "react";

const Rehabilitation = () => {
  const rehabCenters = [
    {
      name: "ANF Rehabilitation Center",
      location: "Lahore, Punjab",
      contact: "+92 42 992 15700",
      type: "Government",
    },
    {
      name: "Edhi Rehabilitation Center",
      location: "Karachi, Sindh",
      contact: "+92 21 111 111 132",
      type: "NGO",
    },
    {
      name: "Chhipa Welfare Association",
      location: "Karachi, Sindh",
      contact: "+92 21 111 111 134",
      type: "NGO",
    },
    {
      name: "PIMS Psychiatry Department",
      location: "Islamabad",
      contact: "+92 51 925 0114",
      type: "Government",
    },
    {
      name: "Karachi Psychiatric Hospital",
      location: "Karachi, Sindh",
      contact: "+92 21 992 15700",
      type: "Government",
    },
    {
      name: "SHEO Rehabilitation Center",
      location: "Lahore, Punjab",
      contact: "+92 42 3586 3333",
      type: "NGO",
    },
    {
      name: "DOST Foundation",
      location: "Islamabad",
      contact: "+92 51 111 367 867",
      type: "NGO",
    },
    {
      name: "Azad Foundation",
      location: "Karachi, Sindh",
      contact: "+92 21 3586 2929",
      type: "NGO",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter rehab centers based on search query
  const filteredCenters = rehabCenters.filter(
    (center) =>
      center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 mt-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Free Rehabilitation Centers in Pakistan
          </h1>
          <p className="text-lg text-gray-600">
            Find free rehabilitation centers near you to support your journey
            toward recovery.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
          />
        </div>

        {/* Rehabilitation Centers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCenters.map((center, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-600 to-green-600 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold text-white mb-3">
                {center.name}
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
                <p className="text-gray-100">{center.location}</p>
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
                <p className="text-gray-100">{center.contact}</p>
              </div>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm4 0h2v2h-2V5zM7 9h2v2H7V9zm4 0h2v2h-2V9zm-4 4h2v2H7v-2zm4 0h2v2h-2v-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-100">{center.type}</p>
              </div>
              <a
                href={`tel:${center.contact}`}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors duration-300"
              >
                Call Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rehabilitation;
