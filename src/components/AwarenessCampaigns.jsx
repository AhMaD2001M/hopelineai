import React from "react";

const songData = [
  {
    title: "How Drug Usage Affects the Brain",
    description: "Learn how drug usage impacts brain function and health.",
    video:
      "https://drive.google.com/file/d/1fQGSkAkbx7Z2yq3wLIB0s-Ogik109Z4z/view?usp=sharing", // Google Drive URL
    isGoogleDrive: true,
  },
  {
    title: "Counter Narcotics Awareness",
    description:
      "Highlights from the Counter Narcotics Awareness campaign 2024.",
    video:
      "https://drive.google.com/file/d/1fQGSkAkbx7Z2yq3wLIB0s-Ogik109Z4z/view?usp=sharing", // Google Drive URL
    isGoogleDrive: true,
  },
  {
    title: "Smokers vs Non-Smokers Debate",
    description:
      "Highlights from the Smokers vs Non-Smokers debate on World Tobacco Day.",
    video:
      "https://drive.google.com/file/d/1FFK4axucG-Zva1YcBzmMcSRh65TsEBDC/view?usp=sharing", // Google Drive URL
    isGoogleDrive: true,
  },
  {
    title: "Counter Narcotics Awareness 2024",
    description:
      "Highlights from the Counter Narcotics Awareness campaign 2024.",
    video:
      "https://drive.google.com/file/d/1U7o8K95CKS0mWZ0jtqHn8xOzIsaYCmoi/view?usp=sharing", // Google Drive URL
    isGoogleDrive: true,
  },
];

const SongGrid = () => {
  const renderVideo = (song) => {
    if (song.isGoogleDrive) {
      // Embed Google Drive video using iframe
      const driveEmbedUrl = song.video.replace("/view?", "/preview?");
      return (
        <div className="relative w-full h-52 overflow-hidden rounded-t-lg">
          <iframe
            src={driveEmbedUrl}
            className="w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={song.title}
          ></iframe>
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white opacity-75 hover:opacity-100"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      );
    }

    // For local or direct video URLs
    return (
      <div className="relative w-full h-52 overflow-hidden rounded-t-lg">
        <video
          className="w-full h-full object-cover"
          controls
          title={song.title}
        >
          <source src={song.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white opacity-75 hover:opacity-100"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <section className="song-grid bg-gradient-to-b from-green-200 to-gray-100 mt-20 py-16">
      {/* Section Header */}
      <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-black to-red-500">
        Latest Awareness Campaigns
      </h2>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {songData.map((song, index) => (
          <div
            key={index}
            className="song-card bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            {/* Video */}
            {renderVideo(song)}

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {song.title}
              </h3>
              <p className="text-gray-700 mt-2">{song.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SongGrid;
