const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginSpan = document.querySelector("#login-span");

function handle(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem("username", userName);
  loginForm.classList.add("hidden");
  loginSpan.classList.remove("hidden");
  loginSpan.innerText = "Hello" + userName;
}

const savedStorage = localStorage.getItem("username");

if (savedStorage === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", handle);
} else {
  loginSpan.classList.remove("hidden");
  loginSpan.innerText = "Hello" + savedStorage;
}
