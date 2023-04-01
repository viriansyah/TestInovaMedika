import axios from 'axios';

const API_URL = 'http://localhost:3000';

export function panggil() {
  return axios.get(`${API_URL}/data`).then((response) => response.data);
}