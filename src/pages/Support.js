import React, { useState } from "react";

const Support = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How can I reset my password?",
      answer:
        "Click on 'Forgot Password' at the login screen and follow the instructions.",
      open: false,
    },
    {
      question: "How to contact customer support?",
      answer:
        "You can reach us at support@easybank.com or use the chat option below.",
      open: false,
    },
    {
      question: "What is the processing time for transactions?",
      answer: "Transactions are processed within 1-3 business days.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => (i === index ? { ...faq, open: !faq.open } : faq))
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg p-8 rounded-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Need Help?</h2>
        <p className="text-gray-700 mb-6">
          Our support team is here to help you with any questions.
        </p>

        {/* Contact Form */}
        <form className="space-y-4 mb-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        {/* FAQ Section */}
        <div className="space-y-4 mb-6">
          <h3 className="text-xl font-bold text-blue-600">
            Frequently Asked Questions
          </h3>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-2">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-gray-800 font-semibold flex justify-between items-center"
              >
                {faq.question}
                <span>{faq.open ? "-" : "+"}</span>
              </button>
              {faq.open && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>

        {/* Live Chat Button */}
        <div className="text-center">
          <button className="bg-green-500 text-white py-3 px-6 rounded-full font-semibold shadow-md hover:bg-green-600 transition">
            Chat with Support
          </button>
          <p className="mt-2 text-gray-600 text-sm">
            Available 24/7 for instant assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
