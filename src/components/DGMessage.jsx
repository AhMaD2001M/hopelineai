import React, { useState } from "react";

const DGMessage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const message = `Major General Abdul Moeed, HI(M)
Director General
Anti Narcotics Force

Director General's Message

The rising tide of drug abuse poses an unprecedented challenge to our society, fueled by insidious trafficking networks and influenced by modern trends. It imperils our communities and undermines our values. We must stand firm, crafting robust strategies that weave together prevention, treatment, and enforcement measures. By tackling root causes and embracing a multifaceted approach, we can safeguard our future and reclaim our streets from the clutches of addiction.

Technology has revolutionized drug smuggling, moving beyond borders. From synthetic production to dark web trades with cryptocurrencies, enforcement faces new frontiers. The Pakistani government, through the Anti-Narcotics Force (ANF), collaborates with domestic and international partners to counter the production and spread of synthetic drugs. This effort aims to protect the youth and safeguard society from irreparable harm.

ANF focuses on implementing strategies to reduce drug supply, including dismantling trafficking organizations, conducting controlled deliveries, eradicating poppy cultivation, and disrupting illicit drug supply chains. These efforts are crucial in combating drug-related crimes and safeguarding communities from the harmful effects of drug abuse.

The ANF campaign focuses on Harm Minimization and Zero Tolerance strategies aligned with global drug policies. Presently, its Drug Demand Reduction initiatives prioritize awareness campaigns, addiction treatment centers, and community programs to decrease drug demand and assist affected individuals.

ANF engages in international cooperation to combat trafficking effectively by collaborating with foreign law enforcement agencies, participating in joint operations, sharing intelligence and best practices, and adhering to international drug policy commitments to address the transnational nature of the trade.

ANF's relentless pursuit against drug-related crimes is powered by a cutting-edge scientific approach. By harnessing modern forensic techniques, conducting meticulous data analysis, and fostering global partnerships, ANF ensures the gathering of irrefutable evidence. This commitment to scientific rigor not only bolsters investigations but also fortifies prosecutions, delivering justice with unwavering precision.

We owe gratitude to the "Shuhada of ANF" who sacrificed their lives in the noble fight against drugs. Their dedication guides our quest for a drug-free society. Applauding the ongoing vigilance of all ANF personnel.

May Allah be our Guide and Protector. Ameen…`;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="dg-message bg-gradient-to-tr from-gray-100 to-gray-200 py-16 px-4   sm:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-black via-red-950 to-red-500">
          Director General Message
        </h2>

        {/* Message Container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300">
          {/* Picture with Hover Effect */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden group">
              <img
                src="https://anfbalochistan.gov.pk/wp-content/uploads/elementor/thumbs/DG-ANF-scaled-qp059b8479efirkldlvzw37re1drxvtip9c1h8ve3g.jpg" // Updated image URL
                alt="Director General"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Message */}
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Major General Abdul Moeed, HI(M)
            </h3>
            <h4 className="text-xl font-semibold text-gray-700 mb-4">
              Director General, Anti Narcotics Force
            </h4>
            <p
              className={`text-gray-700 text-lg ${
                isExpanded ? "" : "line-clamp-4"
              }`}
            >
              {message}
            </p>
            {/* Button-Style "Read More" Link */}
            <div
              onClick={toggleReadMore}
              className="mt-4 inline-block px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 cursor-pointer"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DGMessage;
