import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const blogData = [
  {
    title: "Drug Abuse Awareness | Public service message on Drugs",
    link: "/blog1",
    video: "https://www.youtube.com/embed/aKC8aXPlZl0", // YouTube iframe URL
  },
  {
    title: "Drug Abuse & Impact of Drug Addiction on Youth",
    link: "/blog2",
    video: "https://www.youtube.com/embed/KcL6P9fg0_s", // YouTube iframe URL
  },
  {
    title: "Story of a Drug Addict",
    link: "/blog3",
    video: "https://www.youtube.com/embed/CftOM4aG9xU", // YouTube iframe URL
  },
  {
    title: "ANF PAKISTAN",
    link: "/blog4",
    video: "https://www.youtube.com/embed/NuHY7hEjhk8", // YouTube iframe URL
  },
];

const BlogSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // State to track video play status
  const [isWaiting, setIsWaiting] = useState(false); // State to manage waiting until video ends
  const slideRef = useRef(null);

  // Track if the interval is running
  const intervalRef = useRef(null);

  const startSlideInterval = () => {
    //intervalRef.current = setInterval(() => {
    //if (!isVideoPlaying && !isWaiting) {
    // Only advance if video is not playing and not waiting
    // setCurrentSlide((prevSlide) => (prevSlide + 1) % blogData.length);
    //    }
    //  }, 8000);
  };

  const stopSlideInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval when video is playing
    }
  };

  // Start slide interval when component mounts
  useEffect(() => {
    startSlideInterval();
    return () => stopSlideInterval(); // Clean up interval on component unmount
  }, []);

  // GSAP animation for slide change
  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, [currentSlide]);

  const handlePrevSlide = () => {
    if (!isVideoPlaying && !isWaiting) {
      // Prevent navigation if video is playing or waiting
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + blogData.length) % blogData.length
      );
    }
  };

  const handleNextSlide = () => {
    if (!isVideoPlaying && !isWaiting) {
      // Prevent navigation if video is playing or waiting
      setCurrentSlide((prevSlide) => (prevSlide + 1) % blogData.length);
    }
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true); // Set video as playing
    setIsWaiting(true); // Start waiting for the video to finish
    stopSlideInterval(); // Stop the slideshow loop when the video starts playing
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false); // Set video as not playing when it ends
    setIsWaiting(false); // Stop waiting
    startSlideInterval(); // Resume slide interval when video ends
  };

  return (
    <section className="blog-slider bg-gradient-to-b from-gray-100 to-green-100 text-black py-4 relative">
      <h2 className="text-5xl font-bold text-center mt-8 mb-12 text-transparent bg-clip-text bg-gradient-to-r py-8 from-black via-red-950 to-red-500">
        Latest Blogs
      </h2>
      <div className="slider-container p-6 relative flex justify-center items-center">
        {blogData.map((blog, index) => (
          <div
            key={index}
            ref={index === currentSlide ? slideRef : null}
            className={`slide ${
              index === currentSlide ? "block" : "hidden"
            } w-full max-w-4xl mx-auto transition-all duration-500`}
          >
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <iframe
                  className="rounded-xl shadow-lg w-full h-96 object-cover"
                  title={blog.title}
                  width="560"
                  height="315"
                  src={blog.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onPlay={handleVideoPlay} // Trigger when video starts playing
                  onEnded={handleVideoEnd} // Trigger when video ends
                ></iframe>
                <h3 className="text-3xl font-semibold  py-8 text-center">
                  {blog.title}
                </h3>
              </div>
            </a>
          </div>
        ))}
        {/* Left and Right Navigation Buttons */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-gray-700 hover:bg-gray-900 p-3 rounded-full"
          onClick={handlePrevSlide}
          disabled={isVideoPlaying || isWaiting} // Disable button if video is playing or waiting
        >
          <FaChevronLeft className="w-9 h-9" />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-gray-700 hover:bg-gray-900 p-3 rounded-full"
          onClick={handleNextSlide}
          disabled={isVideoPlaying || isWaiting} // Disable button if video is playing or waiting
        >
          <FaChevronRight className="w-9 h-9" />
        </button>
      </div>
    </section>
  );
};

export default BlogSlider;
