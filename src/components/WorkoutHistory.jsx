import React, { useState, useEffect } from 'react';

const WorkoutHistory = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = () => {
      try {
        const storedWorkouts = JSON.parse(localStorage.getItem('workouts') || '[]');
        setWorkouts(storedWorkouts);
      } catch (error) {
        console.error('Error fetching workouts from localStorage', error);
      }
    };

    fetchWorkouts();

    const handleWorkoutLogged = () => fetchWorkouts();
    window.addEventListener('Workout Logged:', handleWorkoutLogged);

    return () => window.removeEventListener('Workout Logged:', handleWorkoutLogged);
  }, []);

  const deleteWorkout = (index) => {
    const updatedWorkouts = workouts.filter((_, i) => i !== index);
    setWorkouts(updatedWorkouts);
    localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
  };

  return (
    <div className="max-w-full">
      {workouts.length === 0 ? (
        <p className="flex font-poppins text-lg justify-center">No workouts logged yet. Start by logging a workout!</p>
      ) : (
        <ul className="space-y-4">
          {workouts.map((workout, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <h3 className="font-dmSans font-bold">{workout.date}</h3>
              <ul className="font-poppins ml-4 list-disc">
                {workout.exercises.map((exercise, exIndex) => (
                  <li key={exIndex}>
                    {exercise.name}: {exercise.sets} sets, {exercise.reps} reps, {exercise.weight} lbs
                  </li>
                ))}
              </ul>
              <button
                className="text-red-500 hover:text-red-700 mt-2"
                onClick={() => deleteWorkout(index)}
              >
                Delete Workout
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutHistory;
