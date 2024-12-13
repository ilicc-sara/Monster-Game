"use strict";
import "./style.css";

const form = document.querySelector(".form");

const monsterContainer = document.querySelector(".monster-container");

const monsterCreator = function () {
  const monster = { id: crypto.randomUUID(), isDone: false };

  const getMonster = () => monster;

  const createMonster = () => `<div class="monster-box">MONSTER</div>`;
  return { getMonster, createMonster };
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const creatorMonster = monsterCreator();
  console.log(creatorMonster.getMonster());

  const newMonster = document.createElement("div");
  newMonster.classList.add("monster-box");
  newMonster.innerHTML = `MONSTER`;

  console.log(newMonster);

  monsterContainer.appendChild(newMonster);
});
