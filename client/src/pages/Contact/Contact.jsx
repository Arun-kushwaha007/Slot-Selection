import React from 'react';

const Contact = () => {
  return (
    <div className="my-10">
    
    <section className=" relative z-10 flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)' }}>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-20 py-10 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-white text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          {/* Contact Info */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-start mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <i className="fas fa-home text-2xl"></i>
              </div>
              <div className="ml-4">
                <h4 className="text-cyan-500 text-lg font-semibold mb-1">Address</h4>
                <p className="text-white">4671 Sugar Camp Road,<br /> Owatonna, Minnesota,<br /> 55060</p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <i className="fas fa-phone text-2xl"></i>
              </div>
              <div className="ml-4">
                <h4 className="text-cyan-500 text-lg font-semibold mb-1">Phone</h4>
                <p className="text-white">571-457-2321</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <i className="fas fa-envelope text-2xl"></i>
              </div>
              <div className="ml-4">
                <h4 className="text-cyan-500 text-lg font-semibold mb-1">Email</h4>
                <p className="text-white">ntamerrwael@mfano.ga</p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <form>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Message</h2>
              <div className="mb-4">
                <input
                  type="text"
                  name="fullName"
                  required
                  className="w-full p-2 border-b-2 border-gray-300 focus:border-pink-500 outline-none"
                />
                <span className="block text-sm text-gray-600 mt-1">Full Name</span>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 border-b-2 border-gray-300 focus:border-pink-500 outline-none"
                />
                <span className="block text-sm text-gray-600 mt-1">Email</span>
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  required
                  className="w-full p-2 border-b-2 border-gray-300 focus:border-pink-500 outline-none resize-none"
                ></textarea>
                <span className="block text-sm text-gray-600 mt-1">Type your Message...</span>
              </div>
              <div>
                <input
                  type="submit"
                  value="Send"
                  className="w-full py-2 bg-cyan-500 text-white cursor-pointer border border-cyan-500 transition duration-500 hover:bg-white hover:text-cyan-500"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
