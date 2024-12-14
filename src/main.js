"use strict";
import "./style.css";

const form = document.querySelector(".form");

const monsterContainer = document.querySelector(".monster-container");

const attackBtn = document.querySelector(".attack-btn");

const hero = document.querySelector(".hero");

const monsterCreator = function () {
  const monster = {
    id: crypto.randomUUID(),
    isDone: false,
    health: 1,
    attackPower: 20,
  };

  const getMonster = () => monster;

  return { getMonster };
};

const heroManager = function () {
  const hero = { health: 20, defense: 15 };

  const getHero = () => hero;
  const getHealth = () => hero.health;
  const healthDown = () => (hero.health -= 1);

  return { getHero, getHealth, healthDown };
};
const managerHero = heroManager();
console.log(managerHero.getHero());

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const creatorMonster = monsterCreator();
  console.log(creatorMonster.getMonster());

  const newMonster = document.createElement("div");
  newMonster.classList.add("monster-box");
  newMonster.innerHTML = `<img class="buba" src="/bubica.png" /><btn class="attack-btn">attack</btn>`;
  monsterContainer.appendChild(newMonster);
});

monsterContainer.addEventListener("click", function (e) {
  if (!e.target.closest(".monster-box")) return;
  // console.log(e.target.closest(".monster-box"));

  managerHero.healthDown();
  console.log(managerHero.getHero());

  if (managerHero.getHealth() === 0) {
    hero.remove();
  }
});
