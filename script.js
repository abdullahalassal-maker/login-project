document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    localStorage.setItem("user", username);
    window.location.href = "info.html";
  } else {
    alert("Please enter both username and password!");
  }
});
