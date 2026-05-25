async function createProfile(){

  const user =
    document.getElementById("username").value;

  const profile =
    document.getElementById("profile");

  if(!user){
    alert("닉네임 입력");
    return;
  }

  profile.innerHTML = "불러오는 중...";

  try{

    // 유저 찾기
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

    if(!userData.data || !userData.data.length){

      profile.innerHTML = "유저 없음";
      return;
    }

    const userId =
      userData.data[0].id;

    // 프로필 사진
    const thumbRes = await fetch(
      `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=150x150&format=Png`
    );

    const thumbData =
      await thumbRes.json();

    let avatar = "";

    if(
      thumbData.data &&
      thumbData.data.length
    ){
      avatar =
        thumbData.data[0].imageUrl;
    }

    profile.innerHTML = `

      <img
        src="${avatar}"
        class="avatar">

      <h2>${user}</h2>

      <p>유저 ID: ${userId}</p>

      <button>
        Donate
      </button>

    `;

  }catch(err){

    console.error(err);

    profile.innerHTML =
      "오류 발생";

  }

}
