const btn = document.querySelector(".submit");

btn.addEventListener("click", () => {
  let password = document.querySelector(".password").value;
  let conPassword = document.querySelector(".confirm-password").value;
  console.log(password, conPassword);
  if (!password && !conPassword) {
    alert("You Can't be Empty");
  } else if (password === conPassword) {
    alert("Passwors Mached");
  } else {
    alert("Not Mached");
  }
});
