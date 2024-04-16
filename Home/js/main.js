document.querySelector(".message").innerHTML = `Welcome ${localStorage.getItem("userName")}` ;


function Logout() {
  localStorage.removeItem("userName");
  location.href = "../Login/index.html"
}