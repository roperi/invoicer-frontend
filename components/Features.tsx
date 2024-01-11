"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState } from 'react';

function Features() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/features/`)
      .then((response) => response.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <section id="features" className="w-full py-20 px-6">
    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">Key Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {features.map((feature) => (
        <div key={feature.id} className="flex flex-col items-center text-center">
          <i className={`${feature.icon} fa-3x`}></i>
          <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-gray-100">{feature.title}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Features;