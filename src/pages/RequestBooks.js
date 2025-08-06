import React, { useState } from 'react';

const RequestBooks = () => {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    email: '',
    phone: '',
    preferredGenres: [],
    readingLevel: '',
    interests: '',
    numberOfBooks: 5,
    deliveryAddress: '',
    city: '',
    state: '',
    zipCode: '',
    schoolName: '',
    teacherName: '',
    specialRequests: '',
    urgency: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const genres = [
    'Picture Books',
    'Early Readers',
    'Chapter Books',
    'Adventure',
    'Fantasy',
    'Science Fiction',
    'Mystery',
    'Educational',
    'Science',
    'History',
    'Biography',
    'Poetry',
    'Art & Crafts',
    'Comics/Graphic Novels'
  ];

  const readingLevels = [
    'Pre-Reader (Ages 3-5)',
    'Beginning Reader (Ages 5-7)',
    'Early Elementary (Ages 6-8)',
    'Elementary (Ages 8-10)',
    'Middle Grade (Ages 10-12)',
    'Young Adult (Ages 12+)'
  ];

  const urgencyLevels = [
    'Standard (2-3 weeks)',
    'Priority (1-2 weeks)',
    'Urgent (Within 1 week)'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        preferredGenres: checked 
          ? [...prev.preferredGenres, value]
          : prev.preferredGenres.filter(genre => genre !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.childName.trim()) newErrors.childName = 'Child\'s name is required';
    if (!formData.childAge) newErrors.childAge = 'Child\'s age is required';
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent/Guardian name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.preferredGenres.length === 0) newErrors.preferredGenres = 'Please select at least one genre';
    if (!formData.readingLevel) newErrors.readingLevel = 'Reading level is required';
    if (!formData.deliveryAddress.trim()) newErrors.deliveryAddress = 'Delivery address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success animation
    setTimeout(() => {
      setFormData({
        childName: '',
        childAge: '',
        parentName: '',
        email: '',
        phone: '',
        preferredGenres: [],
        readingLevel: '',
        interests: '',
        numberOfBooks: 5,
        deliveryAddress: '',
        city: '',
        state: '',
        zipCode: '',
        schoolName: '',
        teacherName: '',
        specialRequests: '',
        urgency: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="glass rounded-2xl p-8 animate-slideUp">
            <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Request Received!</h2>
            <p className="text-gray-300 mb-6">
              Your book request for {formData.childName} has been submitted successfully. 
              We'll match you with available books and contact you soon!
            </p>
            <div className="text-primary-400 font-medium">
              Building young minds, one book at a time! 🌟
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Request Books</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Help a child discover the joy of reading. Request books for children in need 
            and watch their imagination soar with every page.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 hover-glow">
            {/* Child Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                Child Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Child's Name *</label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${
                      errors.childName ? 'error' : ''
                    }`}
                    placeholder="Enter child's name"
                  />
                  {errors.childName && <p className="text-red-400 text-sm mt-1">{errors.childName}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Child's Age *</label>
                  <input
                    type="number"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    min="3"
                    max="18"
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${
                      errors.childAge ? 'error' : ''
                    }`}
                    placeholder="Enter age"
                  />
                  {errors.childAge && <p className="text-red-400 text-sm mt-1">{errors.childAge}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Reading Level *</label>
                  <select
                    name="readingLevel"
                    value={formData.readingLevel}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white ${
                      errors.readingLevel ? 'error' : ''
                    }`}
                  >
                    <option value="">Select reading level</option>
                    {readingLevels.map(level => (
                      <option key={level} value={level} className="bg-gray-800">{level}</option>
                    ))}
                  </select>
                  {errors.readingLevel && <p className="text-red-400 text-sm mt-1">{errors.readingLevel}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Number of Books Requested</label>
                  <input
                    type="number"
                    name="numberOfBooks"
                    value={formData.numberOfBooks}
                    onChange={handleInputChange}
                    min="1"
                    max="20"
                    className="w-full px-4 py-3 rounded-lg form-input text-white"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-300 font-medium mb-2">Child's Interests</label>
                  <textarea
                    name="interests"
                    value={formData.interests}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400"
                    placeholder="What does the child enjoy? (animals, sports, science, fairy tales, etc.)"
                  />
                </div>
              </div>
            </div>

            {/* Book Preferences */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                Book Preferences
              </h2>
              
              <div>
                <label className="block text-gray-300 font-medium mb-4">Preferred Genres * (Select all that apply)</label>
                <div className="grid md:grid-cols-3 gap-3">
                  {genres.map(genre => (
                    <label key={genre} className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        value={genre}
                        checked={formData.preferredGenres.includes(genre)}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary-500 bg-gray-700 border-gray-600 rounded focus:ring-primary-500 focus:ring-2"
                      />
                      <span className="text-gray-300 group-hover:text-white transition-colors">{genre}</span>
                    </label>
                  ))}
                </div>
                {errors.preferredGenres && <p className="text-red-400 text-sm mt-2">{errors.preferredGenres}</p>}
              </div>
              
              <div className="mt-6">
                <label className="block text-gray-300 font-medium mb-2">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400"
                  placeholder="Any specific books, authors, or special requirements?"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">3</span>
                </div>
                Contact Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${
                      errors.parentName ? 'error' : ''
                    }`}
                    placeholder="Enter parent/guardian name"
                  />
                  {errors.parentName && <p className="text-red-400 text-sm mt-1">{errors.parentName}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${
                      errors.email ? 'error' : ''
                    }`}
                    placeholder="Enter email address"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${
                      errors.phone ? 'error' : ''
                    }`}
                    placeholder="Enter phone number"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">School Name (Optional)</label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400"
                    placeholder="Enter school name"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-300 font-medium mb-2">Teacher Name (Optional)</label>
                  <input
                    type="text"
                    name="teacherName"
                    value={formData.teacherName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400"
                    placeholder="Enter teacher's name if applicable"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">4</span>
                </div>
                Delivery Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-gray-300 font-medium mb-2">Delivery Address *</label>
                  <input
                    type="text"
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${
                      errors.deliveryAddress ? 'error' : ''
                    }`}
                    placeholder="Enter street address"
                  />
                  {errors.deliveryAddress && <p className="text-red-400 text-sm mt-1">{errors.deliveryAddress}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${
                      errors.city ? 'error' : ''
                    }`}
                    placeholder="Enter city"
                  />
                  {errors.city && <p className="text-red-400 text-sm mt-1">{errors.city}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${
                      errors.state ? 'error' : ''
                    }`}
                    placeholder="Enter state"
                  />
                  {errors.state && <p className="text-red-400 text-sm mt-1">{errors.state}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">ZIP Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${
                      errors.zipCode ? 'error' : ''
                    }`}
                    placeholder="Enter ZIP code"
                  />
                  {errors.zipCode && <p className="text-red-400 text-sm mt-1">{errors.zipCode}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Urgency Level</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg form-input text-white"
                  >
                    <option value="">Select urgency level</option>
                    {urgencyLevels.map(level => (
                      <option key={level} value={level} className="bg-gray-800">{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 btn-glow hover-scale disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner mr-3"></div>
                    Processing...
                  </>
                ) : (
                  'Submit Book Request'
                )}
              </button>
              <p className="text-gray-400 text-sm mt-4">
                We'll match your request with available books and contact you soon
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RequestBooks;