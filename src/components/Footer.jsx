import React from "react";
import logo from "../images/logo.png"; // Adjust the path as needed

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-600 via-gray-700 to-gray-900 py-10 px-10 font-sans tracking-wide">
      <div className="max-w-2xl mx-auto text-center">
        <a href="javascript:void(0)" className="inline-block">
          <img src={logo} alt="logo" className="w-48" />
        </a>
        <p className="text-sm mt-8 text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          gravida, mi eu pulvinar cursus, sem elit interdum mauris dipiscing
          elit. Aenean gravida, mi eu pulvinar cursus.{" "}
          <a
            href="javascript:void(0)"
            className="text-sm font-semibold text-blue-500"
          >
            Read more...
          </a>
        </p>

        <ul className="flex items-center justify-center flex-wrap gap-y-3 gap-x-6 mt-8">
          <li>
            <a href="javascript:void(0)">
              <svg xmlns="" className="inline w-6 h-6" viewBox="0 0 512 512">
                <path
                  fill="#1877f2"
                  d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z"
                />
                <path
                  fill="#fff"
                  d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z"
                />
              </svg>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)">
              <svg xmlns="#" className="inline w-6 h-6" viewBox="0 0 176 176">
                <g data-name="Layer 2">
                  <rect width="176" height="176" fill="#0077b5" rx="24" />
                  <path
                    fill="#fff"
                    d="M63.4 48a15 15 0 1 1-15-15 15 15 0 0 1 15 15zM60 73v66.27a3.71 3.71 0 0 1-3.71 3.73H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zm82.64 34.5v32.08a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.09c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.82 9.63-10.31 21.9-10.31 27.18 0 27.02 25.38 27.02 39.32z"
                  />
                </g>
              </svg>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)">
              <svg xmlns="#" className="inline w-6 h-6" viewBox="0 0 24 24">
                <linearGradient
                  id="a"
                  x1="-37.106"
                  x2="-26.555"
                  y1="-72.705"
                  y2="-84.047"
                  gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fd5" />
                  <stop offset=".5" stopColor="#ff543e" />
                  <stop offset="1" stopColor="#c837ab" />
                </linearGradient>
                <path
                  fill="url(#a)"
                  d="M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091C18.89.029 18.778.005 15.91 0 5.737.005 3.507-.448 1.5 1.633z"
                />
                <path
                  fill="#fff"
                  d="M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471a1.063 1.063 0 1 0 0 2.126 1.063 1.063 0 0 0 0-2.126zm-4.73 1.243a4.55 4.55 0 1 0 .001 9.101 4.55 4.55 0 0 0-.001-9.101zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z"
                />
              </svg>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)">
              <svg xmlns="#" className="inline w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M21 12c0-4.93-3.93-9-9-9S3 7.07 3 12s3.93 9 9 9 9-4.07 9-9zm-9 7c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <ul className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
        <li className="flex items-center"></li>
        {/* Add more list items as needed */}
      </ul>
    </footer>
  );
};

export default Footer;
