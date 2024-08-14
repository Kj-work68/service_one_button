import axios from 'axios';

const API_URL = 'http://localhost:3000';

const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/oauth/token`, {
        grant_type: 'password',
        username,
        password,
    });
    if (response.data.access_token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

export default {
    login,
};
