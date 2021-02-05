const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const container = document.querySelector(".games");

const loading = document.querySelector (".loader");

async function getApiCall() {
    try {
     const response = await fetch (url);

    const arrayOfObjects = await response.json();

    console.log(arrayOfObjects)

    const games = arrayOfObjects.results;

    console.log(games);

    setTimeout(function() {
        loading.classList.remove("loading-indicator");
    }, 1000);

    container.innerHTML = "";

    for(let i = 0; i < games.length; i++) {

        if (i === 8) {
            break;
        }
        container.innerHTML += `<div class="games">${games[i].name} ${games[i].rating} ${games[i].tags.length}</div>`;
    }   
    } catch (error) {
        container.innerHTML = displayError("An error occured when calling the API")
    }
}

getApiCall();