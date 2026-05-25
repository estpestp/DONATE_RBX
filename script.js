async function createProfile(){

  const user =
    document.getElementById("username").value;

  if(!user){
    alert("닉네임 입력");
    return;
  }

  const profile =
    document.getElementById("profile");

  profile.innerHTML =
    "불러오는 중...";

  try{

    // 닉네임 -> 유저 ID
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

    const userData =
      await userRes.json();

    if(!userData.data.length){

      profile.innerHTML =
        "유저 없음";

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

    const avatar =
      thumbData.data[0].imageUrl;

    // 유저 게임 가져오기
    const gamesRes = await fetch(
      `https://games.roblox.com/v2/users/${userId}/games?accessFilter=Public&limit=10&sortOrder=Asc`
    );

    const gamesData =
      await gamesRes.json();

    let gamesHTML = "";

    for(const game of gamesData.data){

      gamesHTML += `
        <div class="game">

          <h3>${game.name}</h3>

          <a
            href="https://www.roblox.com/games/${game.id}"
            target="_blank">

            게임 보기

          </a>

        </div>
      `;
    }

    profile.innerHTML = `

      <img
        src="${avatar}"
        class="avatar">

      <h2>${user}</h2>

      <h3>게임 목록</h3>

      ${gamesHTML}

    `;

  }catch(err){

    console.error(err);

    profile.innerHTML =
      "오류 발생";

  }

}
