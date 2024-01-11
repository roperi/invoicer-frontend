/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/IbqNNqV0WtD
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Features from './Features';
import Benefits from './Benefits';
import Hero from './Hero';
import Pricing from './Pricing';
import Contact from './Contact';
import Trial from './Trial';
import Footer from './Footer';

export function HomePage() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <Hero />
        <Benefits />
        <Features />
        <Pricing />
        <Contact />
        <Trial />
      </Main>
      <Footer />
    </div>
  )
}
