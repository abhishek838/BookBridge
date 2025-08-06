import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [stats, setStats] = useState({
    booksCollected: 0,
    childrenHelped: 0,
    activeDonors: 0,
    schoolsReached: 0
  });

  const finalStats = {
    booksCollected: 15420,
    childrenHelped: 8750,
    activeDonors: 2340,
    schoolsReached: 156
  };

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          booksCollected: Math.floor(finalStats.booksCollected * progress),
          childrenHelped: Math.floor(finalStats.childrenHelped * progress),
          activeDonors: Math.floor(finalStats.activeDonors * progress),
          schoolsReached: Math.floor(finalStats.schoolsReached * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(finalStats);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Easy Donation",
      description: "Simple process to donate your old books and make a difference in a child's life."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Free Books",
      description: "Request books for children in need and help build their personal library."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      title: "Community Impact",
      description: "Join a growing community of book lovers making education accessible to all."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Bridging Dreams</span>
              <br />
              <span className="text-white">Through Books</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connecting generous book donors with children in need. 
              Every donated book opens a new world of possibilities and empowers education for underprivileged children.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/donate"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 btn-glow hover-scale text-lg"
              >
                Donate Books
              </Link>
              <Link
                to="/request"
                className="px-8 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300 hover-scale text-lg"
              >
                Request Books
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Books Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="animate-float absolute top-1/4 left-1/4 text-primary-400 opacity-20">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
          </div>
          <div className="animate-float absolute top-1/3 right-1/4 text-secondary-400 opacity-20" style={{animationDelay: '2s'}}>
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
          </div>
          <div className="animate-float absolute bottom-1/4 left-1/3 text-accent-400 opacity-20" style={{animationDelay: '4s'}}>
            <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover-scale">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stats.booksCollected.toLocaleString()}+
              </div>
              <div className="text-gray-400 font-medium">Books Collected</div>
            </div>
            <div className="text-center group hover-scale">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stats.childrenHelped.toLocaleString()}+
              </div>
              <div className="text-gray-400 font-medium">Children Helped</div>
            </div>
            <div className="text-center group hover-scale">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stats.activeDonors.toLocaleString()}+
              </div>
              <div className="text-gray-400 font-medium">Active Donors</div>
            </div>
            <div className="text-center group hover-scale">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stats.schoolsReached}+
              </div>
              <div className="text-gray-400 font-medium">Schools Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">How It Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform makes it simple to donate books or request them for children in need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 text-center hover-glow transition-all duration-300 animate-slideUp"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Our Mission</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We believe every child deserves access to books and the transformative power of reading. 
                BookBridge connects caring individuals with children in underserved communities, 
                creating a bridge between abundance and need.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Through our platform, we've facilitated thousands of book donations, 
                helping children build personal libraries and fostering a love for learning that lasts a lifetime.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border border-primary-500 text-primary-400 font-semibold rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                Learn More About Us
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-8 hover-glow">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Making a Difference</h3>
                  <p className="text-gray-300">
                    Every book donated creates ripples of positive change, 
                    inspiring young minds and building brighter futures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Ready to Make a Difference?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of book lovers and help us empower education for children in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 btn-glow hover-scale"
            >
              Start Donating Today
            </Link>
            <Link
              to="/signup"
              className="px-8 py-4 border-2 border-accent-500 text-accent-400 font-semibold rounded-lg hover:bg-accent-500 hover:text-white transition-all duration-300 hover-scale"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;