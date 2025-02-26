<template>
    <div class="wrapper">
      <div class="background-container"></div>
      
      <main class="main-content">
        <div class="container-this">
          <h1>Войти</h1>
          
          <div id="email-container">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
  
          <div id="password-container">
            <label for="password">Пароль</label>
            <input type="password" id="password" name="password" required>
            <span class="eye-icon">&#128065;</span>
          </div>
  
          <div class="button-container">
            <button class="signup" type="submit">Войти</button>
          </div>

          <a id="fogpass" href="#">Забыли пароль?</a>
          
          <p>Нет аккаунта? <a id="signin" href="#">Зарегистрируйтесь</a></p>
        </div>
      </main>
    </div>
  </template>
  
  <!--<style>
  .wrapper {
    position: relative;
  }
  
  .background-container {
    background-image: url('login_background.jpg');
    background-size: cover;
    background-position: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  
  .main-content {
    position: relative;
    z-index: 1;
    margin-top: 70px;
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  
  .container-this {
    background-color: rgba(171, 199, 255, 0.66);
    border-radius: 60px;
    padding: 40px;
    width: 800px;
    max-width: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h1 {
    color: #ffffff;
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  label {
    color: #000000;
    margin-top: 20px;
  }
  
  #email-container,
  #username-container,
  #password-container {
    width: 90%;
    margin: 30px 0;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: none;
    margin-top: 5px;
    background-color: transparent;
    border-bottom: 2px solid #1D2963;
    color: #ffffff;
  }
  
  input:focus {
    outline: none;
    background-color: #4a4a4c;
  }
  
  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .signup {
    background-color: #1D2963;
    font-size: 18px;
    color: #ffffff;
    border: none;
    border-radius: 25px;
    padding: 10px;
    width: 60%;
    height: 70px;
    cursor: pointer;
  }
  
  .signup:hover {
    background-color: #0051a7;
  }
  
  .eye-icon {
    cursor: pointer;
    position: absolute;
    margin-top: 5px;
    margin-left: -35px;
    color: #000000;
    font-size: 24px;
  }
  
  p, #fogpass {
    color: #ffffff;
    text-align: center;
    margin-top: 15px;
  }
  
  #signin {
    color: #FFFFFF;
    font-weight: 600;
  }
  
  #signin:focus {
    outline: none;
  }
  </style>-->
  