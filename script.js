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

async function generateJoke(category) {
jokeField.innerText = "⏳ Generuję żart...";
generateButton.disabled = true;

try {
const response = await fetch("https://generator-bakend.onrender.com/api/joke", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ category }) // <-- wysyłamy kategorię
});

const data = await response.json();

  if (response.ok && data.joke) {
            jokeField.innerText = data.joke;
            addShake(jokeField);  // <-- animacja przy poprawnym żarcie
        } else {
            jokeField.innerText = "❌ Błąd API: " + (data.error || "Nieznany błąd");
            // animacja przy błędzie jeśli chcesz:
            // addShake(jokeField);
}
} catch (error) {
jokeField.innerText = "❌ Błąd połączenia: " + error.message;
addShake(jokeField);
}

generateButton.disabled = false;
};

