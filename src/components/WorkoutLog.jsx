import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema with Yup
const WorkoutSchema = Yup.object().shape({
  name: Yup.string().required('Exercise name is required'),
  sets: Yup.number()
    .required('Number of sets is required')
    .min(1, 'Sets must be at least 1'),
  reps: Yup.number()
    .required('Number of reps is required')
    .min(1, 'Reps must be at least 1'),
  weight: Yup.number()
    .required('Weight is required')
    .min(1, 'Weight must be at least 1 lbs'),
});

const WorkoutLog = ({ onNewWorkout }) => {
  return (
    <div className="mt-10 max-w-sm md:max-w-lg lg:max-w-xl mx-2 md:mx-1">
      <h2 className="font-poppins flex justify-center text-2xl md:font-4xl font-bold mb-4">Log a Workout</h2>
      <Formik
        initialValues={{ name: '', sets: '', reps: '', weight: '' }}
        validationSchema={WorkoutSchema}
        onSubmit={(values, { resetForm }) => {
          // Pass the new workout data to the parent component
          const newWorkout = {
            date: new Date().toLocaleDateString(),
            exercises: [{ name: values.name, sets: values.sets, reps: values.reps, weight: values.weight }],
          };
          onNewWorkout(newWorkout);
          resetForm(); // Reset form after submission
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 border p-6 shadow-sm hover:scale-95 transition duration-500">
            <div>
              <label htmlFor="name" className="font-dmSans">Exercise Name</label>
              <Field name="name" type="text" className="w-full px-3 py-2 border rounded" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="sets" className="font-dmSans">Sets</label>
              <Field name="sets" type="number" className="w-full px-3 py-2 border rounded" />
              <ErrorMessage name="sets" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="reps" className="font-dmSans">Reps</label>
              <Field name="reps" type="number" className="w-full px-3 py-2 border rounded" />
              <ErrorMessage name="reps" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="weight" className="font-dmSans">Weight (lbs)</label>
              <Field name="weight" type="number" className="w-full px-3 py-2 border rounded" />
              <ErrorMessage name="weight" component="div" className="text-red-500 text-sm" />
            </div>

            <button type="submit" disabled={isSubmitting} className="btn-normal w-full">
              Log Workout
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default WorkoutLog;
