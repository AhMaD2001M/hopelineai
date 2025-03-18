import React from "react";

const societiesData = [
  {
    societyName: "UMT-ANS",
    president: "Zainab Shakeel",
    gmail: "antinarcotics.society@umt.edu.pk",
    instagram: "umt_ans",
    institute: "University of Management and Technology",
  },
  {
    societyName: "LUMS Anti-Narcotics Society",
    president: "Ali Ahmed",
    gmail: "ans@lums.edu.pk",
    instagram: "lums_ans",
    institute: "Lahore University of Management Sciences",
  },
  {
    societyName: "NUST Anti-Drug Society",
    president: "Fatima Khan",
    gmail: "anti-drugs@nust.edu.pk",
    instagram: "nust_ads",
    institute: "National University of Sciences and Technology",
  },
  {
    societyName: "PU Anti-Narcotics Club",
    president: "Ahmed Raza",
    gmail: "anti-narcotics@pu.edu.pk",
    instagram: "pu_anc",
    institute: "University of the Punjab",
  },
  {
    societyName: "KU Anti-Drug Society",
    president: "Sanaullah Khan",
    gmail: "anti-drugs@ku.edu.pk",
    instagram: "ku_ads",
    institute: "University of Karachi",
  },
  {
    societyName: "GIKI Anti-Narcotics Society",
    president: "Hassan Ali",
    gmail: "ans@giki.edu.pk",
    instagram: "giki_ans",
    institute:
      "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
  },
  {
    societyName: "FAST Anti-Drug Club",
    president: "Ayesha Malik",
    gmail: "anti-drugs@nu.edu.pk",
    instagram: "fast_adc",
    institute: "National University of Computer and Emerging Sciences",
  },
  {
    societyName: "UET Anti-Narcotics Society",
    president: "Bilal Ahmed",
    gmail: "ans@uet.edu.pk",
    instagram: "uet_ans",
    institute: "University of Engineering and Technology",
  },
  {
    societyName: "IIUI Anti-Drug Society",
    president: "Zara Khan",
    gmail: "anti-drugs@iiu.edu.pk",
    instagram: "iiu_ads",
    institute: "International Islamic University Islamabad",
  },
  {
    societyName: "BUITEMS Anti-Narcotics Club",
    president: "Usman Ali",
    gmail: "anti-narcotics@buitms.edu.pk",
    instagram: "buitems_anc",
    institute:
      "Balochistan University of Information Technology, Engineering and Management Sciences",
  },
];

const StudentSociety = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-4">
            Student Societies
          </h1>
          <p className="text-lg text-gray-700">
            Explore the vibrant student societies and connect with them.
          </p>
        </div>

        {/* Societies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {societiesData.map((society, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Society Name */}
              <h1 className="text-2xl font-bold text-white mb-4">
                {society.societyName}
              </h1>

              {/* President */}
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-white">
                  <strong>President:</strong> {society.president}
                </p>
              </div>

              {/* Gmail */}
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href={`mailto:${society.gmail}`}
                  className="text-white hover:underline"
                >
                  <strong>Gmail:</strong> {society.gmail}
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <a
                  href={`https://instagram.com/${society.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  <strong>Instagram:</strong> {society.instagram}
                </a>
              </div>

              {/* Institute */}
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <p className="text-white">
                  <strong>Institute:</strong> {society.institute}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSociety;
