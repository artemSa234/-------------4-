import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.css';

createApp(App).use(router).mount('#app');

import { fetchData, postData } from './utils/functions.js';

// Пример использования функции fetchData для загрузки данных
async function loadData() {
  const data = await fetchData('https://api.example.com/data');
  console.log(data);
}

// Пример использования функции postData для отправки данных
async function sendData(data) {
  const response = await postData('https://api.example.com/submit', data);
  console.log(response);
}
