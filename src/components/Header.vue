<template>
  <header class="header">
    <div class="logo">Логотип</div>
    <nav class="nav">
      <div class="nav-actions">

        <router-link class="item" to="/register">Регистрация</router-link>
        <router-link class="item" to="/login">Авторизация</router-link>

        <a href="/cart"> 
          <img src="/profile.png" alt="Пользователь" width="35" height="35">
        </a>
        <a href="/profile">
          <!-- <img src="@/assets/images/cart.png" alt="Пользователь" width="50" height="50"> -->
          <img src="/cart.png" alt="Корзина" width="35" height="35">
        </a>
      </div>
    </nav>
  </header>
</template>
  
  <script>
  export default {
    name: 'HeaderComponent',
  };
  </script>
  
  <style>
  
  .header {
    width: 100%; 
    margin: 0;
    top: 0;
    left: 0;
    position: fixed;
    padding: 0 30px;
    background: linear-gradient(to bottom, #052659, #021024, #052659);
    /* background-color: #1c2a39; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    box-sizing: border-box;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
  
  .nav {
    display: flex;
    gap: 1.5rem;
  }
  
  .nav-actions {
    display: flex;
    gap: 1.5rem;
  }

  </style>
  



  <!-- <template>
    <header>
      <div class="logo font-bold text-lg">Логотип</div>
  
      <nav class="flex gap-4 ml-auto">
        <button class="btn" @click="createSite">Создать сайт</button>
        <a @click="logout">Выход</a>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    methods: {
      createSite() {
        alert("Функция создания сайта");
      },
      logout() {
        alert("Выход из системы");
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%; /* Убедитесь, что body и html растягиваются на всю высоту */
    margin: 0;
    padding: 0;
  }
  
  header {
    width: 100%; /* Убедитесь, что header растягивается на всю ширину */
    background-color: #002080; /* Тёмно-синий */
    margin: 0;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    position: fixed;
    align-items: center;
    height: 80px;
    padding: 0 30px;
    box-sizing: border-box;
  }
  
  .logo {
    font-size: 20px;
    font-weight: bold;
    color: white;
  }
  
  nav {
    display: flex;
    justify-content: flex-end;
    gap: 55px;
    align-items: center;
  }
  
  .btn {
    background-color: #305CE1;
    color: white;
    padding: 10px 20px;
    border-radius: 15px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
    justify-content: center; /* Центрируем по горизонтали */
    align-items: center;
  }
  
  .btn:hover {
    background-color: #1e40af;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  /* Стили для ссылки "Выход" */
  a {
    text-decoration: none;
    font-size: 18px;
    color: white;
    cursor: pointer;
    transition: text-shadow 0.3s ease, color 0.3s ease;
  }
  
  a:hover,
  a:active {
    color: white;
    text-shadow: 0 0 8px white; /* Подсветка при наведении и нажатии */
  }
  </style>
   -->