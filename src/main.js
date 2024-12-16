"use strict";
import "./style.css";

const form = document.querySelector(".form");
const monsterContainer = document.querySelector(".monster-container");

const attackBtn = document.querySelector(".attack-btn");

const hero = document.querySelector(".hero");

const heroAttack = document.querySelector(".attack-btn-hero");

const defense = document.querySelector(".defense");
const health = document.querySelector(".health");

const boostBtn = document.querySelector(".boost-btn");

const timerEl = document.querySelector(".timer");
const second = document.querySelector(".seconds");

let monsterHealth;
let attackPower;

const monsterCreator = function () {
  const monster = {
    id: crypto.randomUUID(),
    health: 1,
    attackPower: 20,
  };

  const getMonster = () => monster;
  const getId = () => monster.id;
  const getHealth = () => monster.attackPower;
  const getAttackPower = () => monster.attackPower;
  const attackPowerDown = () => (monster.attackPower -= 1);

  return { getMonster, getId, getHealth, getAttackPower, attackPowerDown };
};

const heroManager = function () {
  const hero = { health: 20, defense: 15 };

  const getHero = () => hero;
  const getHealth = () => hero.health;
  const healthDown = () => (hero.health -= 1);

  const getDefense = () => hero.defense;
  const defenseDown = () => (hero.defense -= 1);
  const defenseUp = () => (hero.defense += 1);

  return { getHero, getHealth, healthDown, getDefense, defenseDown, defenseUp };
};
let creatorMonster;
const managerHero = heroManager();
console.log(managerHero.getHero());

form.addEventListener("submit", function (e) {
  e.preventDefault();
  creatorMonster = monsterCreator();
  // console.log(creatorMonster.getMonster());

  const newMonster = document.createElement("div");
  newMonster.classList.add("monster-box");
  newMonster.innerHTML = `<p class="monster-text">
              health: <span class="monst-health">1</span>&nbsp;&nbsp; attack power:
              <span class="monst-attack-power">20</span>
            </p>   <img class="buba" src="/bubica.png" /><btn class="attack-btn">attack</btn>`;

  newMonster.setAttribute("data-id", creatorMonster.getId());
  monsterContainer.appendChild(newMonster);

  // console.log(newMonster);

  monsterHealth = document.querySelector(".monst-health");
  attackPower = document.querySelector(".monst-attack-power");
});

monsterContainer.addEventListener("click", function (e) {
  if (!e.target.closest(".monster-box")) return;

  console.log(e.target.closest(".monster-box").dataset.id);
  console.log(creatorMonster.getId());
  // console.log(e.target.closest(".monster-box"));

  managerHero.healthDown();
  console.log(managerHero.getHero());

  creatorMonster.attackPowerDown();
  // console.log(creatorMonster.getAttackPower());

  if (managerHero.getHealth() === 0) {
    hero.remove();
  }

  attackPower.textContent = creatorMonster.getAttackPower();

  health.textContent = managerHero.getHealth();
});

heroAttack.addEventListener("click", function (e) {
  managerHero.defenseDown();
  defense.textContent = managerHero.getDefense();
});

const timerFunction = function () {
  let time = 11;

  const tick = function () {
    time--;
    timerEl.classList.remove("hidden");
    console.log(time);
    second.textContent = String(time).padStart(2, 0);
    if (time === 0) {
      clearInterval(timer);
      managerHero.defenseUp();
      console.log(managerHero.getDefense());
      defense.textContent = managerHero.getDefense();
      timerEl.classList.add("hidden");
    }
  };

  tick();
  const timer = setInterval(tick, 1000);
};

boostBtn.addEventListener("click", function () {
  timerFunction();
});
