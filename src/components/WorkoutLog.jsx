import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Constants
const LOCAL_STORAGE_KEY = 'workouts';

// Validation schemas for exercise inputs
const exerciseSchema = Yup.object().shape({
  name: Yup.string().required('Exercise name is required'),
  sets: Yup.number().required('Sets are required').positive().integer(),
  reps: Yup.number().required('Reps are required').positive().integer(),
  weight: Yup.number().required('Weight is required').positive(),
});

const workoutSchema = Yup.object().shape({
  exercises: Yup.array().of(exerciseSchema).min(1, 'At least one exercise is required'),
});

const WorkoutLog = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const logWorkout = (values, { resetForm }) => {
    const workout = {
      date: new Date().toLocaleDateString(),
      exercises: values.exercises,
    };

    try {
      const existingWorkouts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...existingWorkouts, workout]));
      console.log('Workout logged:', workout);
      
      // Dispatch event to inform WorkoutHistory of new workout
      window.dispatchEvent(new Event('Workout Logged:'));

      resetForm();
      setErrorMessage('Workout logged successfully!'); // Success feedback
    } catch (error) {
      console.error('Error saving workout to localStorage', error);
      setErrorMessage('Error saving workout. Please try again.'); // Error feedback
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Formik
        initialValues={{ exercises: [{ name: '', sets: '', reps: '', weight: '' }] }}
        validationSchema={workoutSchema}
        onSubmit={logWorkout}
      >
        {({ values, isSubmitting }) => (
          <Form className="space-y-4">
            <FieldArray name="exercises">
              {({ push, remove }) => (
                <>
                  {values.exercises.map((_, index) => (
                    <ExerciseField key={index} index={index} remove={remove} />
                  ))}
                  <button
                    type="button"
                    onClick={() => push({ name: '', sets: '', reps: '', weight: '' })}
                    className="btn-normal w-full"
                  >
                    Add Exercise
                  </button>
                </>
              )}
            </FieldArray>
            {errorMessage && <p className="text-green-500 font-dmSans bg-gray-200 rounded flex justify-center">{errorMessage}</p>}
            <button type="submit" className="btn-black w-full" disabled={isSubmitting}>
              Log Workout
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Memoized component for each exercise field to prevent re-renders
const ExerciseField = React.memo(({ index, remove }) => (
  <div className="border p-4 rounded">
    <Field
      name={`exercises.${index}.name`}
      placeholder="Exercise name"
      className="w-full px-3 py-2 border rounded mb-2"
      aria-label={`Exercise name ${index + 1}`}
    />
    <ErrorMessage name={`exercises.${index}.name`} component="div" className="text-red-500 text-sm" />
    
    <div className="grid grid-cols-3 gap-2">
      {['sets', 'reps', 'weight'].map((field) => (
        <div key={field}>
          <Field
            name={`exercises.${index}.${field}`}
            type="number"
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full px-3 py-2 border rounded"
            aria-label={`${field.charAt(0).toUpperCase() + field.slice(1)} for exercise ${index + 1}`}
          />
          <ErrorMessage name={`exercises.${index}.${field}`} component="div" className="text-red-500 text-sm" />
        </div>
      ))}
    </div>

    {index > 0 && (
      <button
        type="button"
        onClick={() => remove(index)}
        className="mt-2 text-red-500 hover:text-red-700"
      >
        Remove Exercise
      </button>
    )}
  </div>
));

export default WorkoutLog;
