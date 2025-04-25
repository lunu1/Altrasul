const ContactUs = () => {
  return (
    <section className="bg-gradient-to-b from-red-600 to-black pt-40 py-20 px-8">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="md:text-5xl text-3xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          At <span className="font-semibold text-black">Altrasul</span>, Get
          Comprehensive Support for Business Setup, Visas, and More – Contact Us
          Today!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Image and Text Section */}
        <div className=" shadow-lg rounded-lg overflow-hidden border flex flex-col items-center p-8 justify-center">
          {/* <div className="w-full mb-6">
              <img
                alt="Swift Debt Collection Office"
                className="w-full h-64 object-contain rounded-lg shadow-md"
              />
            </div> */}
          <h2 className="text-3xl font-semibold text-white mb-4 text-center">
            Visit Our Office
          </h2>
          <p className="text-gray-300 leading-relaxed text-center">
            Our doors are always open for a conversation. Visit our office to
            meet our team, discuss your needs, and explore how our debt recovery
            services can help secure your financial future.
          </p>
        </div>

        {/* Contact Information and Map */}
        <div className=" shadow-lg rounded-lg overflow-hidden border ">
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-white mb-4 text-center">
              Contact Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-center">
              Business village, Diera
              <br />
              Dubai, United Arab Emirates <br />
              Mobile No.:0564100504 <br />
              Alternative No: 0545390080 <br />
              Email: info@altrasul.net
            </p>
          </div>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.391126539275!2d55.32425737605568!3d25.257424929257375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cda192a2ea7%3A0x71a4bae5fbdac1ea!2sBusiness%20Village!5e0!3m2!1sen!2sin!4v1733994706573!5m2!1sen!2sin"
              width="600"
              height="450"
            //   style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
