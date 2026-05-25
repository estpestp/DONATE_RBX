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

async function verify(){

  const user =
    document.getElementById("username").value;

  if(!verifyCode){
    alert("먼저 인증 문장 생성");
    return;
  }

  try{

    // 유저 ID 가져오기
    const userRes = await fetch(
      "https://users.roblox.com/v1/usernames/users",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          usernames:[user]
        })
      }
    );

    const userData = await userRes.json();

    if(!userData.data.length){
      alert("유저 없음");
      return;
    }

    const userId = userData.data[0].id;

    // 소개 가져오기
    const profileRes = await fetch(
      `https://users.roblox.com/v1/users/${userId}`
    );

    const profileData = await profileRes.json();

    const description =
      profileData.description || "";

    // 인증코드 검사
    if(description.includes(verifyCode)){

      localStorage.setItem("user", user);

      document.getElementById("status").innerText =
        user + " 인증 성공!";

    }else{
      alert("소개에 인증 문장이 없음");
    }

  }catch(err){
    console.error(err);
    alert("오류 발생");
  }
}

function logout(){

  localStorage.removeItem("user");

  document.getElementById("status").innerText =
    "로그아웃됨";
}
