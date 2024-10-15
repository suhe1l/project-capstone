import React from 'react';

const WorkoutHistory = ({ workouts }) => {
  const deleteWorkout = (index) => {
    if (window.confirm('Are you sure you want to delete this workout?')) {
      const updatedWorkouts = workouts.filter((_, i) => i !== index);
      localStorage.setItem('workouts', JSON.stringify(updatedWorkouts)); // Update localStorage after deletion
      window.location.reload(); // Simple way to refresh the state (or you can pass a state handler for better performance)
    }
  };

  return (
    <div className="max-w-sm md:max-w-lg lg:max-w-xl flex flex-col justify-center content-center px-5 mx-3 md:mx-0">
      <h2 className="flex justify-center text-2xl font-poppins font-bold mb-4 mt-10">Workout History</h2>
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
    </div>
  );
};

export default WorkoutHistory;
