async function loadProfile(){

  const userId = 10508295877;

  const username = "Rivals_ruerue";

  const profile =
    document.getElementById("profile");

  try{

    // 아바타 가져오기
    const thumbRes = await fetch(
      `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=150x150&format=Png`
    );

    const thumbData =
      await thumbRes.json();

    const avatar =
      thumbData.data[0].imageUrl;

    // 유저 게임 가져오기
    const gamesRes = await fetch(
      `https://games.roblox.com/v2/users/${userId}/games?accessFilter=Public&limit=50&sortOrder=Asc`
    );

    const gamesData =
      await gamesRes.json();

    let passesHTML = "";

    // 게임패스 가져오기
    for(const game of gamesData.data){

      try{

        const passRes = await fetch(
          `https://games.roblox.com/v1/games/${game.id}/game-passes?limit=50&sortOrder=Asc`
        );

        const passData =
          await passRes.json();

        for(const pass of passData.data){

          passesHTML += `

            <div class="pass">

              <img
                src="https://www.roblox.com/asset-thumbnail/image?assetId=${pass.iconImageAssetId}&width=150&height=150&format=png">

              <h3>${pass.name}</h3>

              <p>
                ${pass.price || "Offsale"} Robux
              </p>

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

      <img
        src="${avatar}"
        class="avatar">

      <h2>${username}</h2>

      <p>ID: ${userId}</p>

      ${passesHTML || "게임패스 없음"}

    `;

  }catch(err){

    console.error(err);

    profile.innerHTML =
      "오류 발생";

  }

}

loadProfile();
