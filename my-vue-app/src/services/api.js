import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getTariffs() {
    return apiClient.get('/tariffs');
  },
  submitContactForm(formData) {
    return apiClient.post('/contact', formData);
  }
};