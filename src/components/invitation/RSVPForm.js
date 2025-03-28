import React, { useState } from 'react';
import Button from '../Button';

const RSVPForm = () => {
  const [attending, setAttending] = useState('');
  const [guestInfo, setGuestInfo] = useState({
    name: '',
    email: '',
    numberOfGuests: 1,
    mealPreference: '',
    message: ''
  });
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGuestInfo({
      ...guestInfo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('RSVP Submitted:', { ...guestInfo, attending });
    setRsvpSubmitted(true);
  };

  return (
    <section className="py-16 px-4 bg-primary/5">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="font-serif text-3xl font-bold mb-8 text-center">RSVP</h2>
        
        {rsvpSubmitted ? (
          <div className="text-center">
            <div className="mb-4 text-5xl">✓</div>
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p className="mb-6">Your RSVP has been received. We look forward to celebrating with you!</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setRsvpSubmitted(false);
                setGuestInfo({
                  name: '',
                  email: '',
                  numberOfGuests: 1,
                  mealPreference: '',
                  message: ''
                });
                setAttending('');
              }}
            >
              Submit Another Response
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <p className="font-medium mb-2">Will you be attending?</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="attending-yes"
                    name="attending"
                    className="mr-2"
                    value="yes"
                    checked={attending === 'yes'}
                    onChange={(e) => setAttending(e.target.value)}
                    required
                  />
                  <label htmlFor="attending-yes">Joyfully Accept</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="attending-no"
                    name="attending"
                    className="mr-2"
                    value="no"
                    checked={attending === 'no'}
                    onChange={(e) => setAttending(e.target.value)}
                  />
                  <label htmlFor="attending-no">Regretfully Decline</label>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={guestInfo.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={guestInfo.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            {attending === 'yes' && (
              <>
                <div>
                  <label htmlFor="numberOfGuests" className="block font-medium mb-1">
                    Number of Guests <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="numberOfGuests"
                    name="numberOfGuests"
                    value={guestInfo.numberOfGuests}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mealPreference" className="block font-medium mb-1">
                    Meal Preference
                  </label>
                  <select
                    id="mealPreference"
                    name="mealPreference"
                    value={guestInfo.mealPreference}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select an option</option>
                    <option value="Beef">Beef</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Fish">Fish</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                  </select>
                </div>
              </>
            )}
            
            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message to the Couple
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={guestInfo.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <Button type="submit" variant="primary" size="lg">
                Submit RSVP
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default RSVPForm;