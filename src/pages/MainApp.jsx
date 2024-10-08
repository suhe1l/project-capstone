import React from 'react';
import WorkoutLog from '../components/WorkoutLog';
import WorkoutHistory from '../components/WorkoutHistory';
import SearchExercises from '../components/SearchExercises';

const MainApp = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="items-baseline text-center font-poppins justify-center content-center text-5xl font-bold lg:font-extrabold my-8 lg:my-10"><span className="font-tacOne text-6xl mr-2">FITrack</span> Fitness Tracker</h1>
      
      <section className="mb-12">
        <SearchExercises />
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="flex flex-col">
          <h2 className="flex justify-center font-poppins text-3xl font-bold">Log Workout</h2>
          <WorkoutLog />
        </section>

        <section>
          <h2 className="flex justify-center font-poppins text-3xl font-bold mb-10">Workout History</h2>
          <WorkoutHistory />
        </section>
      </div>
    </div>
  );
};

export default MainApp;
