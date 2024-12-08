'use client';
import React from 'react';
import Header from '/components/Header'; // Adjust the path based on your folder structure
import Home from "/components/HomeContent";
import HomeContent from '/components/HomeContent';

export default function Home() {
  return (
    <div>
      <Header /> { /* Header at the top */}
      <HomeBanner /> {/* Section with text and banner */}
      <HomeContent/>
    </div>
  );
}
