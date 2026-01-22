const AboutUs = () => {
  return (
    <div      className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#001d3d]">
          About <span className="text-sky-500">FounderXConnect</span>
        </h1>
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
          FounderXConnect is a startup-driven platform designed to connect
          founders, innovators, investors, and professionals to collaborate,
          learn, and grow together.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-[#001d3d] mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To empower founders by providing access to the right network,
              resources, and opportunities needed to turn ideas into successful
              startups.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-[#001d3d] mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To build a global ecosystem where entrepreneurs connect, share
              knowledge, and create innovative solutions that impact the world.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#001d3d] mb-12">
            What We Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:-translate-y-1 hover:shadow-xl transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-100 text-sky-500 mb-4">
                🚀
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#001d3d]">
                Founder Community
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A strong network of founders, developers, designers, and
                marketers collaborating to build meaningful startups.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:-translate-y-1 hover:shadow-xl transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-100 text-sky-500 mb-4">
                🤝
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#001d3d]">
                Networking & Events
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Online and offline events, meetups, and sessions connecting
                founders with mentors, investors, and industry experts.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:-translate-y-1 hover:shadow-xl transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-100 text-sky-500 mb-4">
                📚
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#001d3d]">
                Learning & Growth
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Real startup stories, insights, and resources that help founders
                learn from experience and scale faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#001d3d] mb-6">
          Why Choose FounderXConnect?
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          FounderXConnect is built by founders, for founders. We focus on real
          connections, practical learning, and long-term growth to help startups
          succeed in a competitive world.
        </p>

        <button className="mt-8 px-8 py-3 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition">
          Join Our Community
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
