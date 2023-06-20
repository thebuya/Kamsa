"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Home = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date('June 30, 2023 00:00:00').getTime();
      const now = new Date().getTime();

      const timeDifference = targetDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown(
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
      );
    };

    calculateCountdown();

    const countdownInterval = setInterval(() => {
      calculateCountdown();
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <main className="template-container kamsa-container flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-4xl font-bold ">Website Under Construction</h1>
      <p className="text-lg article-text active-red">{countdown}</p>
      <p className="text-lg mb-4 article-text">Please check out these two pages:</p>
      <ul className="text-xl">
        <li>
          <Link href="/about" className="text-blue-500 hover:text-blue-700">About Us
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/services" className="text-blue-500 hover:text-blue-700">Services
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
