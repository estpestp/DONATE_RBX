const profile =
document.getElementById("profile");

const passes = [

  {
    name: "2 로벅스",
    price: 2,
    link: "https://www.roblox.com/ko/game-pass/1712657397/2-rbx"
  },

  {
    name: "3 로벅스",
    price: 3,
    link: "https://www.roblox.com/ko/game-pass/1712385927/3-rbx"
  },

  {
    name: "4 로벅스",
    price: 4,
    link: "https://www.roblox.com/ko/game-pass/1712635481/4-rbx"
  },

  {
    name: "5 로벅스",
    price: 5,
    link: "https://www.roblox.com/ko/game-pass/1712998285/5-rbx"
  },

  {
    name: "6 로벅스",
    price: 6,
    link: "https://www.roblox.com/ko/game-pass/1721216394/6-rbx"
  },

  {
    name: "7 로벅스",
    price: 7,
    link: "https://www.roblox.com/ko/game-pass/1720872373/7-rbx"
  },

  {
    name: "8 로벅스",
    price: 8,
    link: "https://www.roblox.com/ko/game-pass/1722020366/8-rbx"
  },

  {
    name: "9 로벅스",
    price: 9,
    link: "https://www.roblox.com/ko/game-pass/1722254349/9-rbx"
  },

  {
    name: "10 로벅스",
    price: 10,
    link: "https://www.roblox.com/ko/game-pass/1712589650/10-rbx"
  },

  {
    name: "14 로벅스",
    price: 14,
    link: "https://www.roblox.com/ko/game-pass/1721984653/14-rbx"
  },

  {
    name: "20 로벅스",
    price: 20,
    link: "https://www.roblox.com/ko/game-pass/1712749302/20-rbx"
  },

  {
    name: "30 로벅스",
    price: 30,
    link: "https://www.roblox.com/ko/game-pass/1712452097/30-rbx"
  },

  {
    name: "40 로벅스",
    price: 40,
    link: "https://www.roblox.com/ko/game-pass/1712481739/40-rbx"
  },

  {
    name: "49 로벅스",
    price: 49,
    link: "https://www.roblox.com/ko/game-pass/1712889363/49-rbx"
  },

  {
    name: "50 로벅스",
    price: 50,
    link: "https://www.roblox.com/ko/game-pass/1712400027/50-rbx"
  },

  {
    name: "60 로벅스",
    price: 60,
    link: "https://www.roblox.com/ko/game-pass/1712385935/60-rbx"
  },

  {
    name: "70 로벅스",
    price: 70,
    link: "https://www.roblox.com/ko/game-pass/1712633457/70-rbx"
  },

  {
    name: "80 로벅스",
    price: 80,
    link: "https://www.roblox.com/ko/game-pass/1712585519/80-rbx"
  },

  {
    name: "90 로벅스",
    price: 90,
    link: "https://www.roblox.com/ko/game-pass/1712970352/90-rbx"
  },

  {
    name: "95 로벅스",
    price: 95,
    link: "https://www.roblox.com/ko/game-pass/1855692688/95"
  },

  {
    name: "100 로벅스",
    price: 100,
    link: "https://www.roblox.com/ko/game-pass/1712821349/100-rbx"
  },

  {
    name: "164 로벅스",
    price: 164,
    link: "https://www.roblox.com/ko/game-pass/1783832039/164-rbx"
  },

  {
    name: "372 로벅스",
    price: 372,
    link: "https://www.roblox.com/ko/game-pass/1791906876/372-rbx"
  },

  {
    name: "397 로벅스",
    price: 397,
    link: "https://www.roblox.com/ko/game-pass/1792230677/397-RBX"
  },

  {
    name: "402 로벅스",
    price: 402,
    link: "https://www.roblox.com/ko/game-pass/1812396174/402-rbx"
  },

  {
    name: "470 로벅스",
    price: 470,
    link: "https://www.roblox.com/ko/game-pass/1799367902/470-rbx"
  }

];

let html = `

  <img
    src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-310A5D1E4C8A2B0B2A4E3A1A7A8E7E8C-Png/150/150/AvatarHeadshot/Png/noFilter"
    class="avatar">

  <h2>Rivals_ruerue</h2>

  <p>원하는 로벅스를 선택해서 기부해줘! ❤️</p>

`;

for(const pass of passes){

  html += `

    <div class="pass">

      <h3>${pass.name}</h3>

      <p>${pass.price} 로벅스</p>

      <a
        href="${pass.link}"
        target="_blank">

        기부하기

      </a>

    </div>

  `;
}

profile.innerHTML = html;
