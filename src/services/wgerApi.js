import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_WGER_API_URL || 'https;//wger.de/api/v2';
const API_KEY = process.env.REACT_APP_WGER_API_KEY;

const wgerApi = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Authorization': `Token ${API_KEY}`,
        'Content-Type': 'application/json'
    },
});

export const getExercises = async (params) => {
    try {
        const response = await wgerApi.get('/exercise', { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching exercises:', error);
        throw error;
    }
};

export const logWokout = async (workoutData) => {
    try {
        const response = await wgerApi.post('/workout', { workoutData });
        return response.data;
    } catch (error) {
        console.error('Error logging workout:', error);
        throw error;
    }
};

export const getWorkoutHistory = async () => {
    try {
        const response = await wgerApi.get('/workout');
        return response.data;
    } catch (error) {
        console.error('Error fetching workout history:', error);
        throw error;
    }
};

