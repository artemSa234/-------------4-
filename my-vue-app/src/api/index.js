
// Регистрация пользователя
export async function registerUser(name, email, password) {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await response.json();
    return data;
  }
  
  // Вход пользователя
  export async function loginUser(email, password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (data.success) {
      localStorage.setItem('token', data.token);
    }
    return data;
  }
  
  // Выход пользователя
  export function logoutUser() {
    localStorage.removeItem('token');
    // Redirect to home or login page
    window.location.href = '/';
  }
  
  // Редактирование профиля пользователя
  export async function updateUserProfile(name, email, password) {
    const token = localStorage.getItem('token');
    const response = await fetch('/api/update-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ name, email, password })
    });
    const data = await response.json();
    return data;
  }
  
  // Просмотр тарифных планов
  export async function getTariffPlans() {
    const response = await fetch('/api/tariffs', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data;
  }
  
  // Форма обратной связи
  export async function submitContactForm(name, email, message) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });
    const data = await response.json();
    return data;
  }
  
  // Просмотр информации "О нас"
  export async function getAboutInfo() {
    const response = await fetch('/api/about', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data;
  }
  