let verifyCode = "";

window.onload = () => {
  const savedUser = localStorage.getItem("user");

  if(savedUser){
    document.getElementById("status").innerText =
      savedUser + " 로그인됨";
  }
};

function generateCode(){

  const user =
    document.getElementById("username").value;

  if(!user){
    alert("닉네임 입력");
    return;
  }

  verifyCode =
    "verify_" +
    Math.floor(Math.random()*99999);

  document.getElementById("code").innerText =
    "소개에 넣기: " + verifyCode;
}

function verify(){

  const user =
    document.getElementById("username").value;

  if(!verifyCode){
    alert("먼저 인증 문장 생성");
    return;
  }

  localStorage.setItem("user", user);

  document.getElementById("status").innerText =
    user + " 인증 성공!";
}

function logout(){
  localStorage.removeItem("user");

  document.getElementById("status").innerText =
    "로그아웃됨";
}
