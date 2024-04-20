function darkMode() { // Fonction pour le mode sombre
  const darkModeButton = document.querySelectorAll(".dark_mode_button"); 
  const rulesContent = document.querySelectorAll(".rules_content");
  const body = document.querySelector("body");
  const titleForm = document.querySelectorAll(".tab_content_title");
  const labelForm = document.querySelectorAll("label");

  if (localStorage.getItem("darkMode") === "true") { // Si le mode sombre est activé
    body.classList.add("dark-mode");
    rulesContent.forEach((container) => {
      container.classList.add("dark-mode");
    });
    titleForm.forEach((title) => {
      title.classList.add("dark-mode");
    });
    labelForm.forEach((form) => {
      form.classList.add("dark-mode");
    });
  } else { // Si le mode sombre est désactivé
    body.classList.remove("dark-mode");
    rulesContent.forEach((container) => {
      container.classList.remove("dark-mode");
    });
    titleForm.forEach((title) => {
      title.classList.remove("dark-mode");
    });
    labelForm.forEach((form) => {
      form.classList.remove("dark-mode");
    });
  }
  darkModeButton.forEach((button) => { // Ajoute un écouteur d'événement sur chaque bouton
    button.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      rulesContent.forEach((container) => {
        container.classList.toggle("dark-mode");
      });
      titleForm.forEach((title) => {
        title.classList.toggle("dark-mode");
      });
      labelForm.forEach((form) => {
        form.classList.toggle("dark-mode");
      });
      localStorage.setItem("darkMode", body.classList.contains("dark-mode")); // Enregistre le mode sombre dans le localStorage
      localStorage.setItem(
        "darkMode",
        rulesContent.classList.contains("dark-mode")
      );
      localStorage.setItem(
        "darkMode",
        titleForm.classList.contains("dark-mode")
      );
      localStorage.setItem(
        "darkMode",
        labelForm.classList.contains("dark-mode")
      );
    });
  });
}

function Carousel() { // Fonction pour le carousel
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  if (!swiper) return;
}

function navTap() { // Fonction pour le menu de navigation
  const btnOpen = document.getElementById("btn_open");
  const btnClose = document.getElementById("btn_close");
  const navContent = document.getElementById("nav_content");
  if (!navContent) return;
  console.log(btnOpen);
  btnOpen.addEventListener("click", function () { // Ajoute un écouteur d'événement sur le bouton d'ouverture
    btnOpen.style.display = "none";
    navContent.style.display = "block";
    navContent.classList.remove("closeTab");
    navContent.classList.add("openTab"); 
  });

  btnClose.addEventListener("click", function () { // Ajoute un écouteur d'événement sur le bouton de fermeture
    navContent.classList.remove("openTab");
    navContent.classList.add("closeTab");
  });

  navContent.addEventListener("animationend", function () { // Ajoute un écouteur d'événement sur la fin de l'animation
    if (navContent.classList.contains("closeTab")) {
      navContent.style.display = "none";
      btnOpen.style.display = "flex";
    }
  });
}

// function formVerificationSignup() {
//   const form = document.getElementById("signup_form");
//   if (!form) return;

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     let email = document.querySelector("#email_signup");
//     let name = document.querySelector("#name");
//     let password = document.querySelector("#password_signup");
//     let confirmPassword = document.querySelector("#confirmPassword");

//     const errorList = document.getElementById("error_list");
//     errorList.innerHTML = "";

//     if (name.value === "" || name.value.length < 6) {
//       addErrorToList("Le nom doit contenir au moins 6 caractères");
//     }

//     if (email.value === "" || email.value.indexOf("@") === -1) {
//       addErrorToList("L'adresse email n'est pas valide");
//     }

//     const regexPassword =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).{8,}$/;

//     if (
//       password.value.length < 8 ||
//       regexPassword.test(password.value) === false
//     ) {
//       addErrorToList(
//         "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
//       );
//     }

//     if (
//       password.value !== confirmPassword.value ||
//       confirmPassword.value === ""
//     ) {
//       addErrorToList("Les mots de passe ne correspondent pas");
//     }

//     if (errorList.children.length > 0) {
//       const errorMessage = document.querySelector(".error_form");
//       errorMessage.style.display = "block";
//     } else {
//       const successMessage = document.querySelector(".success_form");
//       successMessage.style.display = "block";
//       setTimeout(() => {
//         form.submit();
//       }, 2000);
//     }console.log("Formulaire envoyé");

//     window.location.replace("/signup");

//   });

//   function addErrorToList(errorMessage) {
//     const errorList = document.getElementById("error_list");
//     const errorItem = document.createElement("li");
//     errorItem.textContent = errorMessage;
//     errorList.appendChild(errorItem);
//   }
// }

function formVerificationLogin() { // Fonction pour la vérification du formulaire de connexion
  const formLogin = document.getElementById("login_form");
  if (!formLogin) return;

  formLogin.addEventListener("submit", function (e) { // Ajoute un écouteur d'événement sur le formulaire
    e.preventDefault(); // Empêche l'envoi du formulaire
    let email = document.querySelector("#email_login");
    let password = document.querySelector("#password_login");

    const errorList = document.getElementById("error_list"); 
    errorList.innerHTML = ""; 

    if (email.value === "" || email.value.indexOf("@") === -1) { // Vérifie si l'email est vide ou ne contient pas de @
      addErrorToList("L'adresse email n'est pas valide");
    }

    if (password.value === "" || password.value.length < 8) { // Vérifie si le mot de passe est vide ou contient moins de 8 caractères
      addErrorToList("Le mot de passe doit contenir au moins 8 caractères");
    }
 
    if (errorList.children.length > 0) { // Vérifie s'il y a des erreurs
      const errorMessage = document.querySelector(".error_form");
      errorMessage.style.display = "block";
    } else {
      const successMessage = document.querySelector(".success_form"); // Affiche le message de succès
      successMessage.style.display = "block";
      setTimeout(() => {
        window.location.replace("/dashboard.html"); // Redirige vers la page de tableau de bord
      }, 2000);
    }

    console.log("Formulaire envoyé");
  });
  function addErrorToList(errorMessage) { // Fonction pour ajouter une erreur à la liste
    const errorList = document.getElementById("error_list");
    const errorItem = document.createElement("li");
    errorItem.textContent = errorMessage; 
    errorList.appendChild(errorItem);
  }
}

function burgerMenu() { // Fonction pour le menu burger
  const burgerIcon = document.getElementById("menuIcon");
  const overlay = document.getElementById("overlay");
  const closeIcon = document.getElementById("closeIcon");

  if (!burgerIcon) return;

  burgerIcon.addEventListener("click", function () { // Ajoute un écouteur d'événement sur l'icône du menu
    overlay.style.display = "flex";
    burgerIcon.style.display = "none";
    closeIcon.style.display = "block";
  });
  closeIcon.addEventListener("click", function () { // Ajoute un écouteur d'événement sur l'icône de fermeture
    overlay.style.display = "none";
    closeIcon.style.display = "none";
    burgerIcon.style.display = "block";
  });
}
function openTab() { // Fonction pour les onglets
  const tabButtons = document.querySelectorAll(".account_tab_button");
  const tabContent = document.querySelectorAll(".tab_content");
  tabButtons.forEach((button) => { // Ajoute un écouteur d'événement sur chaque bouton
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => { 
        btn.classList.remove("active");
      });
      button.classList.add("active"); 
      tabContent.forEach((content) => { 
        content.style.display = "none";
      });

      const tabName = button.dataset.tab; // Récupère le nom de l'onglet
      const tabActive = document.getElementById(tabName); // Récupère l'onglet actif
      tabActive.style.display = "block";
    });
  });
}

function filterCards() { // Fonction pour filtrer les cartes
  const filterAll = document.getElementById("BtnAll");
  const filterGryff = document.getElementById("BtnGryff");
  const filterPouff = document.getElementById("BtnPouff");
  const filterSerdaigle = document.getElementById("BtnSerdaigle");
  const filterSerpentard = document.getElementById("BtnSerpen");

  if (!filterAll) return;

  const filterButtons = [ // Liste des boutons de filtre
    filterGryff,
    filterPouff,
    filterSerdaigle,
    filterSerpentard,
  ];

  filterButtons.forEach((button) => { // Ajoute un écouteur d'événement sur chaque bouton
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => { // 
        btn.classList.remove("select");
      });
      button.classList.add("select"); // Ajoute la classe "select" au bouton actif

      const maison = button.getAttribute("data-house"); // Récupère la maison du bouton
      console.log(maison);

      filterCardsByType(maison);
    });
  });

  function filterCardsByType(maison) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const cardType = card.getAttribute("data-house"); // Récupère la maison de la carte
      console.log(cardType);
      if (maison === "Tous" || maison === cardType) { // Vérifie si la maison est "Tous" ou correspond à la maison de la carte
        console.log("if");
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
}



function cardInfo (){
  const card = document.querySelectorAll(".card_button_readmore");
  
  if (!card) return; 
  card.forEach((card) => {
    card.addEventListener("click", function () {
      // console.log(card, "card appjs")
      const cardId = card.closest(".card").getAttribute("data-id"); // Récupère l'ID de la carte
      // console.log(cardId, "cardId appjs")
      // renvoie sur la page de la carte
      window.location.href = `/Rendu_NassimTerzi_htmlcss__/hp.html?card=${cardId}`;

    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  
  navTap();
  openTab();
  burgerMenu();
  darkMode();
  formVerificationLogin();  
  // formVerificationSignup();
  Carousel();
  filterCards();
  setTimeout(() => {
    cardInfo();}, 500);
    buttonFriends();
  
});
