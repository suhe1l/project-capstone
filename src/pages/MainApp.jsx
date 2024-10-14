import React, { useState } from 'react';
import WorkoutLog from '../components/WorkoutLog';
import WorkoutHistory from '../components/WorkoutHistory';
import SearchExercises from '../components/SearchExercises';
import ProgressChart from '../components/ProgressChart';

// Constants
const LOCAL_STORAGE_KEY = 'workouts';

// MainApp Component
const MainApp = () => {
  const [workoutData, setWorkoutData] = useState(() => {
    // Load initial state from local storage
    const storedWorkouts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    return storedWorkouts;
  });

  const handleNewWorkout = (newWorkout) => {
    const updatedWorkouts = [...workoutData, newWorkout];
    setWorkoutData(updatedWorkouts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedWorkouts));
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      <h1 className="items-baseline text-center font-poppins justify-center content-center text-5xl font-bold lg:font-extrabold my-8 lg:my-10">
        <span className="font-tacOne text-6xl mr-2">FITrack</span> Fitness Tracker
      </h1>
      
      <section className="mb-12">
        <SearchExercises />
      </section>

      <div className="grid md:grid-cols-2">
        <section className="flex flex-col">
          <WorkoutLog onNewWorkout={handleNewWorkout} /> {/* Pass update function */}
        </section>

        <section>
          <WorkoutHistory />
        </section>
      </div>

      <section>
        <ProgressChart data={workoutData} /> {/* Pass updated workout data */}
      </section>
    </div>
  );
};

export default MainApp;
