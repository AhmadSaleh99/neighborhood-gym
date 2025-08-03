const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center mt-6">
      {/* Background Image */}
      <img
        src="/images/hero.png"
        alt="Gym"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-light px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Ignite Your Fitness Journey
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Transform your body and mind with expert trainers, cutting-edge
          equipment, and a community that motivates you every day.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-xl transition duration-300">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
