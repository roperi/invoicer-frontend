"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState } from 'react';

interface Benefit {
  id: number;
  icon: string;
  title: string;
  description: string;
}


function Benefits() {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/benefits/`)
      .then((response) => response.json())
      .then((data) => setBenefits(data));
  }, []);

  return (

    <section className="w-full py-20 px-6">
    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">Why Choose Invoicer?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {benefits.map((benefit) => (
        <div key={benefit.id} className="flex flex-col items-center text-center">
          <i className={`${benefit.icon} fa-3x`}></i>
          <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-gray-100">{benefit.title}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{benefit.description}</p>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Benefits;

