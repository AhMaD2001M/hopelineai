import React from "react";

const pastSessions = [
  {
    sessionName: "Counter Narcotics Awareness 2025",
    conductedBy: "World Tobacco Day Organization ",
    date: "2024-06-15",
    video:
      "https://drive.google.com/file/d/1U7o8K95CKS0mWZ0jtqHn8xOzIsaYCmoi/view?usp=sharing", // Google Drive Video URL
  },
  {
    sessionName: "Smokers vs Non-Smokers Debate",
    conductedBy: "World Tobacco Day Organization",
    date: "2024-05-31",
    video:
      "https://drive.google.com/file/d/1FFK4axucG-Zva1YcBzmMcSRh65TsEBDC/view?usp=sharing", // Google Drive Video URL
  },
  {
    sessionName: "Smokers vs Non-Smokers Debate",
    conductedBy: "World Tobacco Day Organization",
    date: "2024-05-31",
    video:
      "https://drive.google.com/file/d/1FFK4axucG-Zva1YcBzmMcSRh65TsEBDC/view?usp=sharing", // Google Drive Video URL
  },

  // Add more past sessions here...
];

const upcomingSessions = [
  {
    sessionName: "AI in Drug Prevention",
    conductedBy: "Tech for Good",
    date: "2025-02-01",
    location: "Lahore, Pakistan",
    guestNames: "John Doe, Dr. Jane Smith",
  },
  {
    sessionName: "Healthy Choices for a Better Future",
    conductedBy: "Health Awareness Group",
    date: "2025-03-20",
    location: "Karachi, Pakistan",
    guestNames: "Dr. Sarah Lee, Prof. Michael Brown",
  },
  {
    sessionName: "Healthy Choices for a Better Future",
    conductedBy: "Health Awareness Group",
    date: "2025-03-20",
    location: "Karachi, Pakistan",
    guestNames: "Dr. Sarah Lee, Prof. Michael Brown",
  },
  {
    sessionName: "Healthy Choices for a Better Future",
    conductedBy: "Health Awareness Group",
    date: "2025-03-20",
    location: "Karachi, Pakistan",
    guestNames: "Dr. Sarah Lee, Prof. Michael Brown",
  },
  // Add more upcoming sessions here...
];

const AwarenessSession = () => {
  return (
    <section className="awareness-sessions py-16 bg-gradient-to-r from-white to-gray-100 text-black">
      <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-black via-red-400 to-red-500">
        Awareness Sessions
      </h2>

      {/* Past Sessions */}
      <div className="past-sessions mb-16 py-5">
        <h3 className="text-3xl font-semibold mb-8 text-center text-black">
          Past Sessions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-6 px-4 lg:px-9 mx-auto max-w-8xl">
          {pastSessions.map((session, index) => (
            <div
              key={index}
              className="session-card bg-gray-800 rounded-lg overflow-hidden shadow-2xl transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-800 cursor-pointer"
            >
              <video
                className="w-full h-52 object-cover rounded-t-lg"
                controls
                title={session.sessionName}
              >
                <source
                  src={session.video.replace("/view?", "/preview?")}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="p-6 bg-gray-800 rounded-b-lg">
                <h3 className="text-xl font-semibold text-white">
                  {session.sessionName}
                </h3>
                <p className="text-gray-300 mt-2">
                  Conducted By: {session.conductedBy}
                </p>
                <p className="text-gray-400 mt-1">Date: {session.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="upcoming-sessions">
        <h3 className="text-3xl font-semibold mb-8 text-center text-black">
          Coming Soon
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 lg:px-10 mx-auto max-w-8xl">
          {upcomingSessions.map((session, index) => (
            <div
              key={index}
              className="session-card bg-gray-800 rounded-lg overflow-hidden shadow-2xl transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-800 cursor-pointer"
            >
              <div className="p-6 bg-gray-800 rounded-t-lg">
                <h3 className="text-xl font-semibold text-white">
                  {session.sessionName}
                </h3>
                <p className="text-gray-300 mt-2">
                  Conducted By: {session.conductedBy}
                </p>
                <p className="text-gray-400 mt-1">Date: {session.date}</p>
                <p className="text-gray-400 mt-1">
                  Location: {session.location}
                </p>
                <p className="text-gray-300 mt-1">
                  Guests: {session.guestNames}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwarenessSession;
