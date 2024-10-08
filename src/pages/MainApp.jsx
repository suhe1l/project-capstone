import React, { useState } from 'react';
import WorkoutLog from '../components/WorkoutLog';
import WorkoutHistory from '../components/WorkoutHistory';
import SearchExercises from '../components/SearchExercises';

const MainApp = () => {
  const [activeTab, setActiveTab] = useState('log');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <button
          className={`mx-2 px-4 py-2 rounded ${activeTab === 'log' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('log')}
        >
          Log Workout
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded ${activeTab === 'history' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('history')}
        >
          Workout History
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded ${activeTab === 'search' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('search')}
        >
          Exercise Search
        </button>
      </div>

      {activeTab === 'log' && <WorkoutLog />}
      {activeTab === 'history' && <WorkoutHistory />}
      {activeTab === 'search' && <SearchExercises />}
    </div>
  );
};

export default MainApp;
