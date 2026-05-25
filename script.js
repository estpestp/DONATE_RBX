async function createProfile(){

  const user =
    document.getElementById("username").value;

  const profile =
    document.getElementById("profile");

  if(!user){

    alert("닉네임 입력");

    return;
  }

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

    if(
      !userData.data ||
      !userData.data.length
    ){

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

    let passesHTML = "";

    // 게임별 게임패스 가져오기
    for(const game of gamesData.data){

      try{

        const passRes = await fetch(
          `https://games.roblox.com/v1/games/${game.id}/game-passes?limit=10&sortOrder=Asc`
        );

        const passData =
          await passRes.json();

        for(const pass of passData.data){

          passesHTML += `

            <div class="pass">

              <img
                src="${pass.iconImageAssetId
                  ? `https://www.roblox.com/asset-thumbnail/image?assetId=${pass.iconImageAssetId}&width=150&height=150&format=png`
                  : ""}"

                class="pass-img">

              <h3>${pass.name}</h3>

              <p>${pass.price || "Offsale"} Robux</p>

              <a
                href="https://www.roblox.com/game-pass/${pass.id}"
                target="_blank">

                기부하기

              </a>

            </div>

          `;
        }

      }catch(err){
        console.log(err);
      }
    }

    profile.innerHTML = `

      <div class="profile-card">

        <img
          src="${avatar}"
          class="avatar">

        <h2>${user}</h2>

        <p>ID: ${userId}</p>

      </div>

      <h2>게임패스</h2>

      ${passesHTML || "게임패스 없음"}

    `;

  }catch(err){

    console.error(err);

    profile.innerHTML =
      "오류 발생";

  }

}
