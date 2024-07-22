
const API_URL = 'http://localhost:8080';

const request = async (endpoint, options = {}) => {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    if (!response.ok) {
        throw new Error('Error en la solicitud');
    }
    return response.json();
};

const basePath = '/booking/rooms'
export const getAllRooms = ( params ) =>{
    const path = `${basePath}?${params}`;
    return request(path);
}

export const getRoomById = (id) => request(`${basePath}/${id}`);

// export const createService = (data) => request('/Services', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
// });
