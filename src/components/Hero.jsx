import React from "react";

function Hero() {
  return (
    <section className="relative min-h-screen mt-12 flex items-center justify-center bg-gradient-to-b from-green-300 to-gray-100 text-black">
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          HopeLine.AI
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-2">
          End Drugs, End Violence – A Safer Home Begins with a Drug-Free Life!
        </p>
        <p className="text-lg text-green-700 sm:text-xl lg:text-2xl mb-4">
          HopeLine.AI is a free, confidential, and secure platform that helps
          you or your loved ones Get started today and take the first step
          towards a healthier, happier life!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/get-started"
            className="uppercase py-3 px-8 rounded-full bg-green-600 text-white hover:bg-green-400 transition-all font-semibold"
          >
            Get Started Free
          </a>
          <a
            href="/how-to-use"
            className="uppercase py-3 px-8 rounded-full bg-transparent border-2 border-green-500 text-green-600 hover:bg-white hover:text-green-800 transition-all font-semibold"
          >
            How to Use
          </a>
        </div>
        <p className="mt-4 text-sm text-green-200">
          No credit card required. 100% Free
        </p>
      </div>
    </section>
  );
}

export default Hero;
