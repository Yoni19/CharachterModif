const player = {
  name: 'Sirosse',
  class : 'Paladin',
  lifepoints: 8,
  damages: 4,
  mana: 130
}



let changeClass = document.getElementById("race");
changeClass.innerHTML = player.class;

let changeName = document.getElementById("name");
changeName.innerHTML = player.name;

let changeHp = document.querySelector(".hp");
changeHp.innerHTML = player.lifepoints;

let changeMana = document.querySelector(".mana");
changeMana.innerHTML = `Points de mana : ${player.mana}`;

let changeDmg = document.querySelector("b");
changeDmg.innerHTML = player.damages;

const changeInfo = () => {
  let saisieName = document.getElementById("name2").value;
  let saisieClass = document.getElementById("class2").value;
  let saisieHp = document.getElementById("hp2").value;
  let saisieMana = document.getElementById("mana2").value;
  let saisieDmg = document.getElementById("dmg2").value;

  let changeClass2 = document.getElementById("race");
  changeClass2.innerHTML = saisieClass;
  
  let changeName2 = document.getElementById("name");
  changeName2.innerHTML = saisieName;
  
  let changeHp2 = document.querySelector(".hp");
  changeHp2.innerHTML = saisieHp;
  
  let changeMana2 = document.querySelector(".mana");
  changeMana2.innerHTML = `Points de mana : ${saisieMana}`;
  
  let changeDmg2 = document.querySelector("b");
  changeDmg2.innerHTML = ` ${saisieDmg} `;
};


document.querySelector('button').addEventListener("click", changeInfo);
