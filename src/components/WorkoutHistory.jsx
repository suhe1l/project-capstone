import React, { useEffect, useState } from 'react';

// Constants
const LOCAL_STORAGE_KEY = 'workouts';

const WorkoutHistory = () => {
  const [workouts, setWorkouts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchStoredWorkouts = () => {
      try {
        const storedWorkouts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
        setWorkouts(storedWorkouts);
      } catch (error) {
        console.error('Error fetching workouts from localStorage', error);
        setErrorMessage('Failed to load workouts. Please try again later.');
      }
    };

    fetchStoredWorkouts();

    const handleWorkoutLogged = () => fetchStoredWorkouts();
    window.addEventListener('WorkoutLogged', handleWorkoutLogged);

    return () => window.removeEventListener('WorkoutLogged', handleWorkoutLogged);
  }, []);

  const deleteWorkout = (index) => {
    if (window.confirm('Are you sure you want to delete this workout?')) {
      const updatedWorkouts = workouts.filter((_, i) => i !== index);
      setWorkouts(updatedWorkouts);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedWorkouts));
    }
  };

  return (
    <div className="max-w-sm flex flex-col justify-center content-center mx-auto">
      <h2 className="text-2xl font-poppins font-bold mb-4 mt-10">Workout History</h2>
      <ul>
        {workouts.length > 0 ? (
          workouts.map((workout, index) => (
            <li key={index} className="mb-4 border p-4">
              <h3 className="font-semibold font-dmSans">{workout.date}</h3>
              <ul className="font-dmSans">
                {workout.exercises.map((exercise, i) => (
                  <li key={i}>
                    {exercise.name} - {exercise.sets} sets x {exercise.reps} reps @ {exercise.weight} lbs
                  </li>
                ))}
              </ul>
              <button onClick={() => deleteWorkout(index)} className="text-red-500 hover:text-red-600">Delete Workout</button>
            </li>
          ))
        ) : (
          <p>No workout history available.</p>
        )}
      </ul>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default WorkoutHistory;
