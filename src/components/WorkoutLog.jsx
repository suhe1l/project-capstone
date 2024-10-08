import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
  const handleSubmit = (values, { resetForm }) => {
    const workout = {
      date: new Date().toLocaleDateString(),
      exercises: values.exercises,
    };

    try {
      const existingWorkouts = JSON.parse(localStorage.getItem('workouts') || '[]');
      localStorage.setItem('workouts', JSON.stringify([...existingWorkouts, workout]));
      console.log('Workout logged:', workout);

      // Dispatch event to inform WorkoutHistory of new workout
      window.dispatchEvent(new Event('Workout Logged:'));

      resetForm();
    } catch (error) {
      console.error('Error saving workout to localStorage', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Formik
        initialValues={{ exercises: [{ name: '', sets: '', reps: '', weight: '' }] }}
        validationSchema={workoutSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
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
            <button type="submit" className="btn-black w-full">
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
    />
    <ErrorMessage name={`exercises.${index}.name`} component="div" className="text-red-500 text-sm" />
    
    <div className="grid grid-cols-3 gap-2">
      <div>
        <Field
          name={`exercises.${index}.sets`}
          type="number"
          placeholder="Sets"
          className="w-full px-3 py-2 border rounded"
        />
        <ErrorMessage name={`exercises.${index}.sets`} component="div" className="text-red-500 text-sm" />
      </div>
      <div>
        <Field
          name={`exercises.${index}.reps`}
          type="number"
          placeholder="Reps"
          className="w-full px-3 py-2 border rounded"
        />
        <ErrorMessage name={`exercises.${index}.reps`} component="div" className="text-red-500 text-sm" />
      </div>
      <div>
        <Field
          name={`exercises.${index}.weight`}
          type="number"
          placeholder="Weight (lbs)"
          className="w-full px-3 py-2 border rounded"
        />
        <ErrorMessage name={`exercises.${index}.weight`} component="div" className="text-red-500 text-sm" />
      </div>
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
