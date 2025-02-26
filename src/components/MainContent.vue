<template>
  <main class="bg">
    <section class="hero">
      <div class="text">
        <h1 class="title">Конфигуратор ПК</h1>
        <p class="desc">Подбор комплектующих для любой задачи</p>
        <button class="btn">Собрать свой ПК</button>
      </div>
    </section>

    <section class="steps">
      <h2 class="subtitle">Шаги</h2>
      <div class="grid">
        <div class="card">
          <div class="card-number">01</div>
          <div class="card-content">
            <h3 class="card-title">Выберите комплектующие</h3>
            <p class="card-text">Начните с выбора базовых компонентов для сборки компьютера:</p>
            <ul class="list">
              <li>Процессор (CPU)</li>
              <li>Материнская плата</li>
              <li>Оперативная память (RAM)</li>
              <li>Видеокарта</li>
              <li>Накопители (SSD/HDD)</li>
              <li>Блок питания и корпус</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-number">02</div>
          <div class="card-content">
            <h3 class="card-title">Выберите периферию</h3>
            <p class="card-text">Завершите сборку, добавив:</p>
            <ul class="list">
              <li>Монитор, клавиатуру, мышь</li>
              <li>Аудиосистему или наушники</li>
              <li>Систему охлаждения (если требуется)</li>
              <li>Программное обеспечение (ОС Windows, офисные программы, антивирус)</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-number">03</div>
          <div class="card-content">
            <h3 class="card-title">Сохраните конфигурацию в личном кабинете</h3>
            <p class="card-text">Удобно сохраните вашу сборку для дальнейших изменений или оформления заказа.</p>
            <ul class="list">
              <li>Создайте учетную запись за несколько секунд</li>
              <li>Возвращайтесь к своей сборке в любое время</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div class="footer-space"></div>
  </main>
</template>

<script>
export default {
  name: 'MainContent',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.bg {
  background-color: #021024;
  min-height: 100vh;
  color: white;
  font-family: 'Inter', sans-serif;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Высота на весь экран */
  background-image: url('cover.png'); /* Укажите путь к вашему изображению */
  background-size: 100% auto; /* Растягиваем по ширине, высота пропорциональна */
  background-position: center; /* Центрируем изображение */
  background-repeat: no-repeat; /* Избегаем повторения */
  text-align: center;
  padding: 2rem;
  position: relative; /* Для позиционирования псевдоэлемента */
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Затемнение на 30% */
  z-index: 1; /* Затемнение поверх изображения */
}

.hero .text {
  position: relative; /* Чтобы текст был поверх затемнения */
  z-index: 2; /* Текст выше затемнения */
  max-width: 450px;
  margin: 0 auto;
  margin-left: 30px;
}

.title {
  font-size: 48px;
  font-weight: 600; /* Semi-bold */
  margin-bottom: 1rem;
}

.desc {
  font-size: 22px;
  margin-bottom: 20px;
  margin-top: 36px;
}

.btn {
  background: #1C5087;
  color: white;
  padding: 20px 44px;
  border-radius: 25px;
  font-size: 22px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 50px;
  box-shadow: 0 0 7px rgba(221, 224, 230, 0.3);
}

.btn:hover {
  background: #256BB5;
}

.steps {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subtitle {
  font-size: 2.5rem;
  margin-bottom: 2.9rem;
}

.grid {
  display: grid;
  gap: 3.9rem;
}

.card {
  background: #042558;
  padding: 15px;
  width: 950px;
  text-align: center;
  font-size: 20px;
  border-radius: 91px;
  line-height: 2.1;
  align-items: flex-start;
  display: flex;
  align-items: center;
}

.card-number {
  font-size: 76px;
  font-weight: 400; /* Regular */
  color: white;
  margin-left: 70px;
  margin-right: 110px;
  min-width: 80px;
  text-align: center;
}

.card-content {
  text-align: left;
  flex: 1;
}

.card-title {
  font-size: 26px;
  font-weight: 600; /* Semi-bold */
  margin-top: 15px;
  margin-bottom: 30px;
}

.card-text {
  font-weight: 400; /* Regular */
}

.list {
  list-style: disc inside;
}

.footer-space {
  height: 130px;
}
</style>