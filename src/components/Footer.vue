<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <p class="logo">Логотип</p>
        <span style="font-size: 18px;">Идеальный компьютер <br> в несколько кликов</span>
      </div>
      <div class="footer-section">
        <ul>
          <li>О нас</li>
          <li>Конфигуратор ПК</li>
          <li>Вопрос-Ответ</li>
        </ul>
      </div>
      <div class="footer-section contacts">
        <p style="font-size: 20px;">Наши контакты</p>
        <div class="contact-item">
          <img src="/telephone.png" alt="Phone" width="35" height="35" />
          <p>+7 (495) 999-99-99</p>
        </div>
        <div class="contact-item">
          <img src="/email.png" alt="Email" width="35" height="35" />
          <p>test@irk.ru</p>
        </div>
        <div class="contact-item">
          <img src="/map.png" alt="Address" width="35" height="35" />
          <p>г. Иркутск, Бульвар Гагарина 20, 1 этаж, аудитория 113-1</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Политика конфиденциальности</p>
      <p>2025</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
}

.footer {
  margin: 0;
  bottom: 0;
  left: 0;
  background-color: #031939;
  color: white;
  padding: 20px 0;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-left: 90px;
  padding: 0 20px;
  line-height: 2.3;
  font-size: 18px;
  text-align: left;
}

.footer-section {
  flex: 1;
  margin: 0 10px;
  text-align: left;
}

.footer-logo {
  flex: 1;
  margin: 0 10px;
  text-align: left;
}

.footer-section.contacts {
  max-width: 300px; 
  margin-right: 90px;
  line-height: 1.3;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-bottom {
  text-align: center;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #334155;
  line-height: 0.9;
}

.contact-item {
  display: flex;
  align-items: center;
}

.contact-item img {
  margin-right: 10px;
}
</style>
