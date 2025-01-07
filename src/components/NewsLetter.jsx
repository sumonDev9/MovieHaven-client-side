import React from 'react';

const NewsLetter = () => {
    return (
       <div className="dark:bg-slate-700 shadow-xl bg-white py-10 rounded-md text-white">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">Stay Updated with MovieHaven</h2>
    <p className="text-lg  mb-6 dark:text-white text-primary">
      Subscribe to our newsletter and never miss the latest movies, updates, and exclusive offers.
    </p>
    <form className="flex flex-col md:flex-row items-center justify-center gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full md:w-2/3 p-3 rounded-md text-gray-900 focus:outline-none dark:border-0 border-2 border-pink-600 focus:ring-2 focus:ring-pink-500"
        required
      />
      <button
        type="submit"
        className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition-colors"
      >
        Subscribe
      </button>
    </form>
    <p className="text-sm text-secondary dark:text-white mt-4">
      We respect your privacy. Unsubscribe at any time.
    </p>
  </div>
</div>

    );
};

export default NewsLetter;