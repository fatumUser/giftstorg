// Получаем элементы
const sellButton = document.querySelector('.sell-button');
const popup = document.getElementById('sellNftPopup');
const closeButton = document.querySelector('.popup-close');
const form = document.getElementById('sellNftForm');


const buyButton = document.querySelector('.btn-buy-nft');
const buyPopup = document.getElementById('buyNftPopup');

const BuyCloseButton = document.querySelector('.buy-popup-close');



// Открываем поп‑ап по клику на кнопку «Продать NFT»
sellButton.addEventListener('click', function(e) {
  e.preventDefault();
  popup.style.display = 'block';
});

// Открываем поп‑ап по клику на кнопку «Купить NFT»
document.querySelectorAll('.btn-buy-nft').forEach(el => {
  el.addEventListener('click', function(event) {
    console.log('Кликнут элемент:', this);
    // Здесь ваш код обработки клика
    buyPopup.style.display = 'block';
  });
});



// Закрываем поп‑ап по клику на крестик
closeButton.addEventListener('click', function() {
  popup.style.display = 'none';
});

// Закрываем поп‑ап при клике вне его области
window.addEventListener('click', function(e) {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// Закрываем поп‑ап по клику на крестик
BuyCloseButton.addEventListener('click', function() {
  buyPopup.style.display = 'none';
});

// Закрываем поп‑ап при клике вне его области
window.addEventListener('click', function(e) {
  if (e.target === buyPopup) {
    buyPopup.style.display = 'none';
  }
});



// Обработчик отправки формы
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Получаем данные из формы
  const link = document.getElementById('productLink').value;
  const price = document.getElementById('price').value;
  const description = document.getElementById('description').value;
  
  // Формируем сообщение для Telegram
  const telegramMessage = `Новый NFT для размещения:\n\nСсылка: ${link}\nЦена: ${price}\nОписание: ${description || 'Нет описания'}`;
  
  // Здесь можно добавить отправку в Telegram через бота или открытие чата
  alert('Информация отправлена в Telegram!\n\n' + telegramMessage);
  
  // Закрываем поп‑ап после отправки
  popup.style.display = 'none';
});




