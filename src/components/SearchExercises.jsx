import React, { useState, useEffect, useCallback } from 'react';
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
  const [equipmentOptions, setEquipmentOptions] = useState([]);

  // Fetch available equipment
  const fetchEquipment = async () => {
    try {
      const response = await fetch('https://wger.de/api/v2/equipment/');
      const data = await response.json();
      setEquipmentOptions(data.results);
    } catch (error) {
      console.error('Error fetching equipment:', error);
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  const fetchExercises = async (searchTerm, equipment, page = 1) => {
    setLoading(true);
    setError(null);
    setExercises([]); // Clear previous results

    try {
      // Apply filters and pagination
      let url = `https://wger.de/api/v2/exercise/?language=2&search=${encodeURIComponent(searchTerm)}&ordering=name&limit=20&page=${page}`;

      // Add equipment filter if selected
      if (equipment) {
        url += `&equipment=${equipment}`;
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch exercises');
      
      const data = await response.json();

      // Check if there are results
      if (data.results.length === 0) {
        setError('No exercises found for the given search term.');
      } else {
        setExercises(data.results);
      }

      // If pagination is needed, handle it here
      if (data.next) {
        console.log("More pages available, handle pagination if necessary.");
      }

    } catch (err) {
      setError('An error occurred while fetching exercises. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetch = useCallback(debounce(fetchExercises, 500), []);

  const handleSearch = (values, { setSubmitting }) => {
    debouncedFetch(values.searchTerm, values.equipment);
    setSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="flex justify-center text-center font-dmSans text-3xl font-bold mb-4 lg:mt-20">Save Yourself the Time and Search Here</h2>
      <Formik
        initialValues={{ searchTerm: '', equipment: '' }}
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

            {/* Equipment dropdown */}
            <Field as="select" name="equipment" className="w-full px-3 py-2 border rounded mt-2">
              <option value="">Select equipment (optional)</option>
              {equipmentOptions.map((equipment) => (
                <option key={equipment.id} value={equipment.id}>
                  {equipment.name}
                </option>
              ))}
            </Field>

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
