
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
