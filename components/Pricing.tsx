"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface PricingPlan {
  id: number;
  title: string;
  monthly_cost: number;
  items: { id: number; name: string }[];
}

function Pricing() {
  const [pricingPlans, setPricingPlans] = useState<Array<PricingPlan>>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pricing-plans/`)
      .then((response) => response.json())
      .then((data) => setPricingPlans(data));
  }, []);

  return (
    <section id="pricing" className="w-full py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">Our Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="flex flex-col items-center text-center border rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{plan.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{`$${plan.monthly_cost}/month`}</p>
            <ul className="mt-4 text-gray-600 dark:text-gray-400">
              {plan.items.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
            <Button className="mt-8">
              <Link href="/signup">
                <a>Choose plan</a>
              </Link>
            </Button>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
