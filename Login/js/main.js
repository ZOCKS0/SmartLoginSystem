let Email = document.getElementById("email");
let Password = document.getElementById("password");
let users = [];

users = JSON.parse(localStorage.getItem("USER"));


function Login() {
 
  if(Email.value === '' || Password.value === ''){
    document.getElementById('alert').innerHTML = '<p class="text-center text-danger">All inputs are required</p>';
  }else{
    isExist();
  }
}

function isExist() {


      for(let i = 0 ; i <= users.length ; i++){
if(users[i].email == Email.value && users[i].password == Password.value ){
  localStorage.setItem("userName" , users[i].name )
  location.href = "../Home/index.html"
  break;
}else{
    document.getElementById('alert').innerHTML = '<p class="text-danger text-center bg-transparent">Account isn’t exists</p>';
}
      }
    }


