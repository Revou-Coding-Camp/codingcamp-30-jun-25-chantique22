// Script for mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
  
// Welcoming message based on time of day
const welcomeMessage = document.getElementById('welcome-message');
const today = new Date();
const hour = today.getHours();
let greeting = "Welcome to Holland Bakery!";

  if (hour < 12) {
    greeting = "Good morning and welcome to Holland Bakery!";
  } else if (hour < 18) {
    greeting = "Good afternoon and welcome to Holland Bakery!";
  } else {
    greeting = "Good evening and welcome to Holland Bakery!";
  }

welcomeMessage.textContent = greeting;

//Message Us Section
const form = document.getElementById("message-form");
const tableBody = document.getElementById("message-table-body");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector("input[name='gender']:checked").value;
    const message = document.getElementById("message").value;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border px-4 py-2">${name}</td>
      <td class="border px-4 py-2">${dob}</td>
      <td class="border px-4 py-2">${gender}</td>
      <td class="border px-4 py-2">${message}</td>
    `;

    tableBody.appendChild(row);

    // Clear form
    form.reset();
  });