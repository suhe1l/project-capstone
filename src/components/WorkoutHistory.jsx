import React, { useState, useEffect } from 'react';

const WorkoutHistory = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    setWorkouts(storedWorkouts);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Workout History</h2>
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
