import React from 'react';
import WorkoutLog from '../components/WorkoutLog';
import WorkoutHistory from '../components/WorkoutHistory';
import SearchExercises from '../components/SearchExercises';

const MainApp = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">FITrack Fitness Tracker</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Exercise Search</h2>
        <SearchExercises />
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Log Workout</h2>
          <WorkoutLog />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Workout History</h2>
          <WorkoutHistory />
        </section>
      </div>
    </div>
  );
};

export default MainApp;
