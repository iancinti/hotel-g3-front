
const API_URL = 'http://localhost:8080';

const request = async (endpoint, options = {}) => {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    if (!response.ok) {
        throw new Error('Error en la solicitud');
    }
    return response.json();
};

export const getAllServices = () => request('/Services');

// export const getServiceById = (id) => request(`/Services/${id}`);

// export const createService = (data) => request('/Services', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
// });
