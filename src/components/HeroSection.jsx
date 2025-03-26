const HeroSection = () => {
  return (
    <section className="bg-white text-black py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Single Content Image */}
        <div className="flex justify-center mb-12">
          <img
            src="src/assets/image/content.png"
            alt="Hero Content"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Hero Text */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Give the best shot at your{" "}
            <span className="text-red-500">Dream University</span>
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Get expert help, personalized guidance, and the support you need to
            increase your chances of success with Ambitio Elite.
          </p>
          <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            10x your chances with Ambitio
          </button>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg py-8 px-6 text-center grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-500">
              98.2%
            </h2>
            <p className="text-gray-600">got into their Target Program</p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-500">
              4.96
            </h2>
            <p className="text-gray-600">Google Rating</p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-500">
              5000+
            </h2>
            <p className="text-gray-600">Students Assisted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
