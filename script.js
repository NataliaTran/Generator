
// Pobranie przycisku i pola tekstowego
const generateButton = document.querySelector("#generateButton");
const jokeField = document.querySelector("#jokeField");

// Funkcja dodająca efekt "drżenia" do pola tekstowego
function addShake(element) {
    element.classList.remove("shake");
    void element.offsetWidth; // wymusza ponowne zastosowanie klasy
    element.classList.add("shake");
}

// Dodanie zdarzenia kliknięcia na przycisk
generateButton.addEventListener("click", (event) => {
    event.preventDefault(); // Zapobiega przeładowaniu strony przy użyciu formularza
    generateJoke(); // Generowanie żartu
});
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
} else {
    jokeField.innerText = "❌ Błąd API: " + (data.error || "Nieznany błąd");
    addShake(jokeField);
}
} catch (error) {
jokeField.innerText = "❌ Błąd połączenia: " + error.message;
addShake(jokeField);
}

generateButton.disabled = false;
};
