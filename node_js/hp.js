function fetchCharacters() {
  return fetch("https://hp-api.lainocs.fr/characters").then((response) =>
    response.json()
  );
}

async function displayCharacters() {
  const data = await fetchCharacters();
  data.forEach((character) => {
    document.querySelector("#characters").innerHTML += `
                    <a href="cardinfo.html?slug=${character.slug}">
                        <div class="character">
                            <h2>${character.name}</h2>
                            <img src="${character.image}" alt="${character.name}">
                        </div>
                    </a>
                `;
  });
}

displayCharacters();

function fetchCharacter() {
  let url = window.location.search;
  let slug = new URLSearchParams(url).get("slug");
  return fetch("https://hp-api.lainocs.fr/characters/" + slug).then(
    (response) => response.json()
  );
}

async function displayCharacter() {
  const data = await fetchCharacter();
  document.querySelector("#character").innerHTML = `
                <h1 style="color: white;">${data.name}</h1>
                <img src="${data.image}" alt="${data.name}">
                <p style="color: white;">${data.house}</p> 
                 <p style="color: white;">${data.actor}</p> 
                  <a href="perso.html">Back</a>
            `;
}

displayCharacter(); 
