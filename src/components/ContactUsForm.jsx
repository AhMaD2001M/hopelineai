import { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent!");
  };

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Cards in Column */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              ANF Details
            </h3>
            <p className="text-gray-600 mb-4">
              The Anti-Narcotics Force (ANF) is a federal law enforcement agency
              in Pakistan that is responsible for the prevention of drug
              trafficking and abuse.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Hotline
            </h3>
            <p className="text-gray-600 mb-4">
              For immediate assistance, you can contact our 24/7 hotline for any
              emergencies related to narcotics or related concerns.
            </p>
            <p className="text-blue-500 font-semibold">+92 123 456 7890</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Visit Our Office
            </h3>
            <p className="text-gray-600 mb-4">
              Feel free to visit our nearest office for consultations, awareness
              sessions, or other inquiries.
            </p>
            <p className="text-gray-800">Address: XYZ Street, City, Pakistan</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message or Complaint
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
