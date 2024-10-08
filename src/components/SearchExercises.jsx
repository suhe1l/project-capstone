import React, { useState, useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { debounce } from 'lodash';

const searchSchema = Yup.object().shape({
  searchTerm: Yup.string().required('Please enter a search term'),
});

const SearchExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchExercises = async (searchTerm) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://wger.de/api/v2/exercise/search/?term=${searchTerm}`);
      if (!response.ok) throw new Error('Failed to fetch exercises');
      const data = await response.json();
      setExercises(data.results);
    } catch (err) {
      setError('An error occurred while fetching exercises. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetch = useCallback(debounce(fetchExercises, 500), []);

  const handleSearch = (values, { setSubmitting }) => {
    debouncedFetch(values.searchTerm);
    setSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-poppins text-3xl font-bold mb-4">Save Yourself the Time and Search Here</h2>
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
              className="btn-normal w-full my-4"
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
