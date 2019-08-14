const listOfButtons = document.querySelector(".filters");

function changeClass(e) {
  const buttons = document.querySelectorAll(".filters__item>.filters__button ");

  buttons.forEach(button => {
    //     if (e.target.dataset.id === button.dataset.id) {
    //       if (e.target.className === "filters__button filters__button--inactive") {
    //         e.target.className = "filters__button filters__button--active";
    //       } else {
    //         e.target.className = "filters__button filters__button--active";
    //       }
    //     } else {
    //       button.className = "filters__button filters__button--inactive";
    //     }
    //   });
    e.target.dataset.id === button.dataset.id
      ? e.target.className === "filters__button filters__button--inactive"
        ? (e.target.className = "filters__button filters__button--active")
        : (e.target.className = "filters__button filters__button--active")
      : (button.className = "filters__button filters__button--inactive");
  });
}

listOfButtons.addEventListener("click", changeClass);

const allBtn = document.getElementById("all");
const ipaBtn = document.getElementById("ipa");
const stoutBtn = document.getElementById("stout");
const bockBtn = document.getElementById("bock");

function showAll() {
  const items = [...document.querySelectorAll("div.item")];

  let beerStyles = items;
  beerStyles.filter(beerStyle => {
    beerStyle.style.display = "grid";
  });
}

function showIPA() {
  const items = [...document.querySelectorAll("div.item")];

  let beerStyles = items;
  beerStyles.filter(beerStyle => {
    if (beerStyle.dataset.style === "ipa") {
      beerStyle.style.display = "grid";
    } else {
      beerStyle.style.display = "none";
    }
  });
}

function showStout() {
  const items = [...document.querySelectorAll("div.item")];

  let beerStyles = items;
  beerStyles.filter(beerStyle => {
    if (beerStyle.dataset.style === "stout") {
      beerStyle.style.display = "grid";
    } else {
      beerStyle.style.display = "none";
    }
  });
}

function showBock() {
  const items = [...document.querySelectorAll("div.item")];

  let beerStyles = items;
  beerStyles.filter(beerStyle => {
    if (beerStyle.dataset.style === "bock") {
      beerStyle.style.display = "grid";
    } else {
      beerStyle.style.display = "none";
    }
  });
}

allBtn.addEventListener("click", showAll);
ipaBtn.addEventListener("click", showIPA);
stoutBtn.addEventListener("click", showStout);
bockBtn.addEventListener("click", showBock);
