import React, { useState } from 'react';

const WorkoutLog = () => {
  const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '', weight: '' }]);

  const handleExerciseChange = (index, field, value) => {
    const newExercises = [...exercises];
    newExercises[index][field] = value;
    setExercises(newExercises);
  };

  const addExercise = () => {
    setExercises([...exercises, { name: '', sets: '', reps: '', weight: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const workout = {
      date: new Date().toLocaleDateString(),
      exercises: exercises.filter(ex => ex.name !== '')
    };

    const existingWorkouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    localStorage.setItem('workouts', JSON.stringify([...existingWorkouts, workout]));

    console.log('Workout logged:', workout);
    setExercises([{ name: '', sets: '', reps: '', weight: '' }]);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Log Your Workout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {exercises.map((exercise, index) => (
          <div key={index} className="border p-4 rounded">
            <input
              type="text"
              value={exercise.name}
              onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
              placeholder="Exercise name"
              className="w-full px-3 py-2 border rounded mb-2"
              required
            />
            <div className="grid grid-cols-3 gap-2">
              <input
                type="number"
                value={exercise.sets}
                onChange={(e) => handleExerciseChange(index, 'sets', e.target.value)}
                placeholder="Sets"
                className="w-full px-3 py-2 border rounded"
                required
              />
              <input
                type="number"
                value={exercise.reps}
                onChange={(e) => handleExerciseChange(index, 'reps', e.target.value)}
                placeholder="Reps"
                className="w-full px-3 py-2 border rounded"
                required
              />
              <input
                type="number"
                value={exercise.weight}
                onChange={(e) => handleExerciseChange(index, 'weight', e.target.value)}
                placeholder="Weight (lbs)"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          </div>
        ))}
        <button type="button" onClick={addExercise} className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300">
          Add Exercise
        </button>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Log Workout
        </button>
      </form>
    </div>
  );
};

export default WorkoutLog;
