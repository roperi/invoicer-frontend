"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"

interface HeroData {
  headline: string;
  subheadline: string;
}

function Hero() {
  const [heroData, setHeroData] = useState<HeroData>({ headline: '', subheadline: '' });

    useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hero/`)
        .then((response) => response.json())
        .then((data) => setHeroData(data[0] || {}));
    }, []);

  return (
    <section className="w-full py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          {heroData.headline}
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          {heroData.subheadline}
        </p>
        <Button className="mt-8">
          <Link href="/signup">
            <a>Get Started</a>
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default Hero;
