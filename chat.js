// Verificar si ya hay una sesión activa
window.onload = function () {
  const username = localStorage.getItem("username");
  if (username) {
    startChat(username);
  }
};

// Función para iniciar sesión
function login() {
  const username = document.getElementById("username").value.trim();
  if (username) {
    localStorage.setItem("username", username);
    startChat(username);
  } else {
    alert("Por favor, escribe un nombre de usuario.");
  }
}

// Configuración del chat
function startChat(username) {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("chat-section").style.display = "block";

  const chatMessages = document.getElementById("chat-messages");
  const chatInput = document.getElementById("chat-input");

  chatMessages.innerHTML = `<div class="message">Bienvenido, ${username}.</div>`;

  // Enviar mensaje
  window.sendMessage = function () {
    const message = chatInput.value.trim();
    if (message) {
      const userMessage = `<div class="message user">${username}: ${message}</div>`;
      chatMessages.innerHTML += userMessage;
      chatMessages.scrollTop = chatMessages.scrollHeight;
      chatInput.value = "";
    }
  };
}
