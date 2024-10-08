import React, { useState, useEffect } from 'react';

const WorkoutHistory = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = () => {
      const storedWorkouts = JSON.parse(localStorage.getItem('workouts') || '[]');
      setWorkouts(storedWorkouts);
    };

    fetchWorkouts();
    // Set up an interval to check for updates every 5 seconds
    const intervalId = setInterval(fetchWorkouts, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-full">
      {workouts.length === 0 ? (
        <p>No workouts logged yet. Start by logging a workout!</p>
      ) : (
        <ul className="space-y-4">
          {workouts.map((workout, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <h3 className="font-bold">{workout.date}</h3>
              <ul className="ml-4 list-disc">
                {workout.exercises.map((exercise, exIndex) => (
                  <li key={exIndex}>
                    {exercise.name}: {exercise.sets} sets, {exercise.reps} reps, {exercise.weight} lbs
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutHistory;
