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

    // 프로필 출력
    profile.innerHTML = `

      <img
        src="${avatar}"
        class="avatar">

      <h2>${username}</h2>

      <p>ID: ${userId}</p>

      <div class="pass">

        <h3>5 Robux 기부</h3>

        <a
          href="https://www.roblox.com/users/${userId}/profile"
          target="_blank">

          프로필 가기

        </a>

      </div>

    `;

  }catch(err){

    console.error(err);

    profile.innerHTML =
      "오류 발생";

  }

}

loadProfile();
