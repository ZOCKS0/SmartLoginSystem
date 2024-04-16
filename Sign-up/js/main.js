let Name = document.getElementById("name")
let Email = document.getElementById("email");
let Password = document.getElementById("password");
let users = [];



function signin() {
 
  if(Name.value === '' || Email.value === '' || Password.value === ''){
    document.getElementById('alert').innerHTML = '<p class="text-center text-danger bg-bg-transparent">All inputs are required</p>';
  }else{


    let user ={
        name : Name.value,
        email : Email.value,
        password : Password.value
      } 
      users.push(user) ;
      localStorage.setItem("USER" , JSON.stringify(users));
    document.getElementById('alert').innerHTML = '<p class ="text-success text-center bg-transparent">Success</p>';
location.href = "../Login/index.html";
  }
}

function isExist() {

if(localStorage.getItem("USER") == null){
  users = [];
  signin()
}else{
  users = JSON.parse(localStorage.getItem("USER"));
}

      for(let i = 0 ; i <= users.length ; i++){
if(users[i].name == Name.value && users[i].email == Email.value && users[i].password == Password.value ){
    document.getElementById('alert').innerHTML = '<p class="text-danger text-center bg-transparent">Account already exists</p>';
}else{
    signin();
    break;
}
      }
    }


