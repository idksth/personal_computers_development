<template>
  <div id="app">
    <!--<HeaderComponent />-->
    <!--<MainContentComponent />-->
    
    <nav class="nav">
      <div class="logo">Логотип</div>
      <div class="nav-actions">
        
        <div class="items">
          <RouterLink to="/register" class="item-text">Регистрация</RouterLink>
          <RouterLink to="/login" class="item-text">Авторизация</RouterLink>
        
          <a href="/cart" class="item"> 
            <img src="/profile.png" alt="Пользователь" width="35" height="35">
          </a>
          <a href="/profile" class="item">
            <!-- <img src="@/assets/images/cart.png" alt="Пользователь" width="50" height="50"> -->
            <img src="/cart.png" alt="Корзина" width="35" height="35">
          </a>
        </div>
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import MainContentComponent from './components/MainContent.vue';
import FooterComponent from './components/Footer.vue';
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
  .items {
    margin-left: 00pt;
  }

  .item {
    color: aliceblue;
    text-decoration: none;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-right: 10pt;
    margin-left: 10pt;
  }

  .item-text {
    color: aliceblue;
    text-decoration: none;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-right: 10pt;
    margin-left: 10pt;
    margin-top: 10pt;
  }
  
  .nav {
    width: 100%; 
    margin: 0;
    top: 0;
    left: 0;
    /*position: fixed;*/
    padding: 0 30px;
    background: linear-gradient(to bottom, #052659, #021024, #052659);
    display: grid;
    grid-template-columns: 20% auto;
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
