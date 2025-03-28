import React from 'react';

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-serif font-bold mb-6">Our Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">Location</h4>
            <p className="text-neutral-dark/80">
              Manila, Philippines
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">Phone</h4>
            <p className="text-neutral-dark/80">
              +63 (2) 8000-0000
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">Email</h4>
            <p className="text-neutral-dark/80">
              info@himigsolutions.com
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">Business Hours</h4>
            <p className="text-neutral-dark/80">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-2xl font-serif font-bold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.315 2c1.532 0 1.916.058 2.598.12.627.063 1.07.127 1.532.253.444.12.814.3 1.133.512.383.256.702.575.958.959.213.319.394.689.512 1.133.127.462.19.905.254 1.531.062.683.12 1.067.12 2.599 0 1.531-.058 1.916-.12 2.598-.063.627-.127 1.07-.254 1.532-.118.444-.299.814-.512 1.133-.256.383-.575.702-.958.958-.319.213-.69.394-1.133.512-.463.127-.905.19-1.532.254-.682.062-1.066.12-2.598.12s-1.916-.058-2.598-.12c-.627-.063-1.07-.127-1.532-.254-.444-.118-.814-.299-1.133-.512-.383-.256-.702-.575-.958-.958-.213-.319-.394-.69-.512-1.133-.127-.462-.19-.905-.254-1.532-.062-.682-.12-1.066-.12-2.598s.058-1.916.12-2.599c.063-.627.127-1.07.254-1.531.118-.444.299-.814.512-1.133.256-.384.575-.703.958-.959.319-.213.69-.394 1.133-.512.462-.127.905-.19 1.532-.254.682-.062 1.066-.12 2.598-.12zm0 4.378c-3.063 0-5.542 2.479-5.542 5.541 0 3.063 2.479 5.542 5.542 5.542 3.062 0 5.541-2.479 5.541-5.542 0-3.062-2.479-5.541-5.541-5.541zm0 9.14c-1.99 0-3.599-1.609-3.599-3.599s1.609-3.6 3.599-3.6 3.599 1.61 3.599 3.6-1.609 3.599-3.599 3.599z" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;