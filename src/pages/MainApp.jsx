import React, { useState, useEffect } from 'react';
import WorkoutLog from '../components/WorkoutLog';
import WorkoutHistory from '../components/WorkoutHistory';
import SearchExercises from '../components/SearchExercises';
import ProgressChart from '../components/ProgressChart';

const LOCAL_STORAGE_KEY = 'workouts';

const MainApp = () => {
  const [workouts, setWorkouts] = useState([]);

  // Fetch workouts from localStorage on component mount
  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    setWorkouts(storedWorkouts);
  }, []);

  // Function to handle adding a new workout
  const handleNewWorkout = (newWorkout) => {
    const updatedWorkouts = [...workouts, newWorkout];
    setWorkouts(updatedWorkouts);  // Update state
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedWorkouts));  // Persist in localStorage
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      <h1 className="items-baseline text-center font-poppins justify-center content-center text-5xl font-bold lg:font-extrabold md:mt-5 md:mb-2 lg:mb-4">
        <span className="font-tacOne text-6xl mr-2">FITrack</span> Fitness Tracker
      </h1>
      {/* Exercise Search Feature */}
      <section className="mb-12">
        <SearchExercises />
      </section>

      {/* Workout Tracking through Logging to Local Storage */}
      <div className="grid justify-center md:grid-cols-2">
        <section className="flex flex-col">
          <WorkoutLog onNewWorkout={handleNewWorkout} /> 
        </section>

        <section>
          <WorkoutHistory workouts={workouts} /> 
        </section>
      </div>

      {/* Data Visualisation in terms of total weight lifted */}
      <section>
        <ProgressChart data={workouts} /> {/* Pass updated workout data */}
      </section>
    </div>
  );
};

export default MainApp;
