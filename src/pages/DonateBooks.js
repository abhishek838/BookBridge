import React, { useState } from 'react';

const DonateBooks = () => {
  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    phone: '',
    bookTitle: '',
    author: '',
    genre: '',
    condition: '',
    quantity: 1,
    description: '',
    pickupAddress: '',
    city: '',
    state: '',
    zipCode: '',
    preferredPickupTime: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const genres = [
    'Children\'s Books',
    'Educational',
    'Fiction',
    'Non-Fiction',
    'Science',
    'History',
    'Biography',
    'Poetry',
    'Art & Crafts',
    'Other'
  ];

  const conditions = [
    'Excellent - Like new',
    'Very Good - Minor wear',
    'Good - Some wear but readable',
    'Fair - Well-used but intact'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
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

    if (!formData.donorName.trim()) newErrors.donorName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.bookTitle.trim()) newErrors.bookTitle = 'Book title is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.genre) newErrors.genre = 'Genre is required';
    if (!formData.condition) newErrors.condition = 'Condition is required';
    if (!formData.pickupAddress.trim()) newErrors.pickupAddress = 'Pickup address is required';
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
        donorName: '',
        email: '',
        phone: '',
        bookTitle: '',
        author: '',
        genre: '',
        condition: '',
        quantity: 1,
        description: '',
        pickupAddress: '',
        city: '',
        state: '',
        zipCode: '',
        preferredPickupTime: '',
        additionalNotes: ''
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
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-gray-300 mb-6">
              Your book donation request has been submitted successfully. 
              We'll contact you within 24 hours to arrange pickup.
            </p>
            <div className="text-primary-400 font-medium">
              Making a difference, one book at a time! 📚
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
            <span className="gradient-text">Donate Books</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Share the gift of reading with children who need it most. 
            Every book you donate opens a new world of possibilities.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 hover-glow">
            {/* Donor Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                Donor Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="donorName"
                    value={formData.donorName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${
                      errors.donorName ? 'error' : ''
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.donorName && <p className="text-red-400 text-sm mt-1">{errors.donorName}</p>}
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
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-300 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${
                      errors.phone ? 'error' : ''
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Book Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                Book Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Book Title *</label>
                  <input
                    type="text"
                    name="bookTitle"
                    value={formData.bookTitle}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${
                      errors.bookTitle ? 'error' : ''
                    }`}
                    placeholder="Enter book title"
                  />
                  {errors.bookTitle && <p className="text-red-400 text-sm mt-1">{errors.bookTitle}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Author *</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${
                      errors.author ? 'error' : ''
                    }`}
                    placeholder="Enter author name"
                  />
                  {errors.author && <p className="text-red-400 text-sm mt-1">{errors.author}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Genre *</label>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white ${
                      errors.genre ? 'error' : ''
                    }`}
                  >
                    <option value="">Select genre</option>
                    {genres.map(genre => (
                      <option key={genre} value={genre} className="bg-gray-800">{genre}</option>
                    ))}
                  </select>
                  {errors.genre && <p className="text-red-400 text-sm mt-1">{errors.genre}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Condition *</label>
                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white ${
                      errors.condition ? 'error' : ''
                    }`}
                  >
                    <option value="">Select condition</option>
                    {conditions.map(condition => (
                      <option key={condition} value={condition} className="bg-gray-800">{condition}</option>
                    ))}
                  </select>
                  {errors.condition && <p className="text-red-400 text-sm mt-1">{errors.condition}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    min="1"
                    max="50"
                    className="w-full px-4 py-3 rounded-lg form-input text-white"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-300 font-medium mb-2">Book Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400"
                    placeholder="Brief description of the book(s) - age group, topics covered, etc."
                  />
                </div>
              </div>
            </div>

            {/* Pickup Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">3</span>
                </div>
                Pickup Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-gray-300 font-medium mb-2">Pickup Address *</label>
                  <input
                    type="text"
                    name="pickupAddress"
                    value={formData.pickupAddress}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 ${
                      errors.pickupAddress ? 'error' : ''
                    }`}
                    placeholder="Enter street address"
                  />
                  {errors.pickupAddress && <p className="text-red-400 text-sm mt-1">{errors.pickupAddress}</p>}
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
                  <label className="block text-gray-300 font-medium mb-2">Preferred Pickup Time</label>
                  <select
                    name="preferredPickupTime"
                    value={formData.preferredPickupTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg form-input text-white"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning" className="bg-gray-800">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon" className="bg-gray-800">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening" className="bg-gray-800">Evening (5 PM - 8 PM)</option>
                    <option value="weekend" className="bg-gray-800">Weekend</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-300 font-medium mb-2">Additional Notes</label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400"
                    placeholder="Any special instructions for pickup or additional information"
                  />
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
                  'Submit Donation Request'
                )}
              </button>
              <p className="text-gray-400 text-sm mt-4">
                We'll contact you within 24 hours to arrange pickup
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DonateBooks;