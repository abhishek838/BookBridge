import React, { useState, useEffect } from 'react';

const About = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'BookBridge was founded with a simple mission: connect book donors with children who need them most.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    },
    {
      year: '2021',
      title: 'First Milestone',
      description: 'Reached our first 1,000 book donations and helped 500 children access quality reading materials.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      year: '2022',
      title: 'Community Growth',
      description: 'Expanded to 50 schools and built partnerships with local libraries and educational institutions.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      )
    },
    {
      year: '2023',
      title: 'Digital Innovation',
      description: 'Launched our digital platform, making it easier than ever to donate and request books online.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      )
    },
    {
      year: '2024',
      title: 'Global Impact',
      description: 'Achieved 15,000+ book donations and helped over 8,000 children across 150+ schools.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      )
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      description: 'Former educator passionate about making books accessible to all children.',
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Technology Director',
      description: 'Full-stack developer dedicated to building user-friendly donation platforms.',
      image: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Outreach',
      description: 'Connects with schools and families to identify children who need books most.',
      image: '👩‍🏫'
    },
    {
      name: 'David Kim',
      role: 'Operations Manager',
      description: 'Ensures smooth logistics for book collection and distribution.',
      image: '👨‍💼'
    }
  ];

  const impactStories = [
    {
      title: 'Maria\'s Library',
      story: 'Thanks to BookBridge, 8-year-old Maria received her first 20 books, sparking a love for reading that improved her grades dramatically.',
      impact: '20 books donated',
      location: 'Rural Elementary School'
    },
    {
      title: 'Classroom Transformation',
      story: 'Lincoln Elementary received 200 books, transforming their empty library into a vibrant reading center for 150 students.',
      impact: '200 books donated',
      location: 'Lincoln Elementary'
    },
    {
      title: 'Reading Club Success',
      story: 'A local after-school program started a reading club with donated books, now serving 50 children daily.',
      impact: '150 books donated',
      location: 'Community Center'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About BookBridge</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to ensure every child has access to books, 
            because we believe reading is the foundation of education and the key to unlocking potential.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div 
              id="mission"
              data-animate
              className={`glass rounded-2xl p-8 hover-glow transition-all duration-1000 ${
                visibleItems.has('mission') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To bridge the gap between book abundance and book scarcity by creating 
                a seamless platform that connects generous donors with children who need 
                books the most. We believe every child deserves a personal library.
              </p>
            </div>

            <div 
              id="vision"
              data-animate
              className={`glass rounded-2xl p-8 hover-glow transition-all duration-1000 delay-200 ${
                visibleItems.has('vision') ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                A world where every child, regardless of their economic background, 
                has access to quality books and the transformative power of reading. 
                We envision communities where literacy thrives and education empowers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Journey</span>
            </h2>
            <p className="text-xl text-gray-300">
              From a simple idea to a thriving community of book lovers.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index}
                id={`timeline-${index}`}
                data-animate
                className={`relative flex items-center mb-12 transition-all duration-1000 ${
                  visibleItems.has(`timeline-${index}`) 
                    ? 'animate-slideUp opacity-100' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white z-10">
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'ml-auto pl-8'}`}>
                  <div className="glass rounded-lg p-6 hover-glow">
                    <div className="text-2xl font-bold text-primary-400 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Meet Our Team</span>
            </h2>
            <p className="text-xl text-gray-300">
              Passionate individuals working together to make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                id={`team-${index}`}
                data-animate
                className={`glass rounded-2xl p-6 text-center hover-glow transition-all duration-1000 ${
                  visibleItems.has(`team-${index}`) 
                    ? 'animate-slideUp opacity-100' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-primary-400 font-medium mb-3">{member.role}</div>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Impact Stories</span>
            </h2>
            <p className="text-xl text-gray-300">
              Real stories of how your donations are changing lives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <div 
                key={index}
                id={`story-${index}`}
                data-animate
                className={`glass rounded-2xl p-8 hover-glow transition-all duration-1000 ${
                  visibleItems.has(`story-${index}`) 
                    ? 'animate-slideUp opacity-100' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{story.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{story.story}</p>
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-primary-400 font-medium">{story.impact}</span>
                    <span className="text-gray-400 text-sm">{story.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Compassion</h3>
              <p className="text-gray-300">We care deeply about every child's educational journey and work with empathy and understanding.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-gray-300">We operate with transparency and honesty, ensuring every donation reaches those who need it most.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
              <p className="text-gray-300">We believe in the power of community and work together to create lasting positive change.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;