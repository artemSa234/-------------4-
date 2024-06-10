// src/utils/functions.js

// Функция для выполнения GET-запросов к API
async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Функция для выполнения POST-запросов к API
  async function postData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Функция для сохранения данных в локальное хранилище браузера
  function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  // Функция для извлечения данных из локального хранилища браузера
  function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  
  // Функция для очистки локального хранилища браузера
  function clearLocalStorage() {
    localStorage.clear();
  }
  
  // Функция для генерации случайного числа в заданном диапазоне
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Функция для проверки, является ли значение пустым
  function isEmpty(value) {
    return value.trim() === '';
  }
  
  // Функция для проверки валидности email
  function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  export { fetchData, postData, saveToLocalStorage, getFromLocalStorage, clearLocalStorage, getRandomNumber, isEmpty, isValidEmail };
  