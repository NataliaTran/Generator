const generateButton = document.querySelector("#generateButton");
const jokeField = document.querySelector("#jokeField");

// Animacja drżenia
function addShake(element) {
    element.classList.remove("shake");
    void element.offsetWidth;
    element.classList.add("shake");

    setTimeout(() => {
        element.classList.remove("shake");
    }, 400);
}


