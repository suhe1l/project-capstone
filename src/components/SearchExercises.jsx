import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const searchSchema = Yup.object().shape({
  searchTerm: Yup.string().required('Please enter a search term'),
});

const SearchExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (values, { setSubmitting }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://wger.de/api/v2/exercise/search/?term=${values.searchTerm}`);
      if (!response.ok) throw new Error('Failed to fetch exercises');
      const data = await response.json();
      setExercises(data.results);
    } catch (err) {
      setError('An error occurred while fetching exercises. Please try again.');
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Exercise Search</h2>
      <Formik
        initialValues={{ searchTerm: '' }}
        validationSchema={searchSchema}
        onSubmit={handleSearch}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="mb-4">
            <Field
              name="searchTerm"
              type="text"
              placeholder="Search for exercises..."
              className="w-full px-3 py-2 border rounded"
            />
            {errors.searchTerm && touched.searchTerm && (
              <div className="text-red-500 text-sm mt-1">{errors.searchTerm}</div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
            >
              Search
            </button>
          </Form>
        )}
      </Formik>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {exercises.length > 0 && (
        <ul className="space-y-4">
          {exercises.map((exercise) => (
            <li key={exercise.id} className="border p-4 rounded shadow">
              <h3 className="font-bold">{exercise.name}</h3>
              <p>{exercise.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchExercises;