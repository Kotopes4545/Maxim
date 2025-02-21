document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startChatAnimation();
        observer.unobserve(entry.target); // Запускаем анимацию 1 раз
      }
    });
  });

  observer.observe(document.querySelector(".advantage"));
});

function startChatAnimation() {
  const messages = [
    { message: "msg1", typing: "typing1", text: "text1", delay: 1000, typeEffect: false }, // Левое сообщение, без набора текста
    { message: "msg2", typing: "typing2", text: "text2", delay: 4000, typeEffect: true },  // Правое сообщение, с набором текста
    { message: "msg3", typing: "typing3", text: "text3", delay: 7000, typeEffect: false }, // Левое сообщение, без набора текста
    { message: "msg4", typing: "typing4", text: "text4", delay: 10000, typeEffect: true }  // Правое сообщение, с набором текста
  ];

  messages.forEach((msg) => {
    setTimeout(() => {
      const messageEl = document.getElementById(msg.message);
      const typingEl = document.getElementById(msg.typing);
      const textEl = document.getElementById(msg.text);

      messageEl.style.display = "flex"; // Показываем блок
      setTimeout(() => {
        messageEl.style.opacity = "1"; // Плавно показываем
      }, 200); 

      setTimeout(() => {
        if (typingEl) typingEl.style.display = "none"; // Убираем "печатающиеся" точки

        if (textEl) {
          textEl.style.display = "inline-block"; // Показываем текст сразу
          textEl.style.borderRight = "none";
          if (msg.typeEffect) {
            textEl.classList.add("typing-text"); // Эффект печати только у правых
          } else {
            textEl.style.width = "auto"; // Левые появляются мгновенно
          }
        }
      }, 2000);
    }, msg.delay);
  });
}
