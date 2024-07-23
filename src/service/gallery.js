
const API_URL = 'http://localhost:8080';

const request = async (endpoint, options = {}) => {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    if (!response.ok) {
        throw new Error('Error en la solicitud');
    }
    return response.json();
};

const path = '/gallery';
export const getAllGallery = () => request(path);
