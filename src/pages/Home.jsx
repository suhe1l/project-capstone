import React from 'react';
import { useState } from 'react';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SearchExercises />
      <Exercises />
    </div>
  )
}

export default Home