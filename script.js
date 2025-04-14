// Pobranie przycisku i pola tekstowego
const generateButton = document.querySelector("#generateButton");
const jokeField = document.querySelector("#jokeField");

// Funkcja, która generuje żart
function generateJoke() {
    // Przykładowe żarty (możesz je zmieniać lub dodać własne)
    const jokes = [
        "Dlaczego komputer nigdy nie jest głodny? Bo zawsze ma Windows.",
        "Jakie są ulubione napoje programistów? Java i C++.",
        "Dlaczego matematyka jest smutna? Bo ma za dużo problemów.",
        "Co robi fizyk na imprezie? Rozwiązuje problemy!",
        "Dlaczego komputer ma w sobie duszę? Bo to laptop!"
    ];

    // Losowy wybór żartu
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    // Wstawienie żartu do pola tekstowego
    jokeField.value = randomJoke;

    // Dodanie klasy animacji (np. drżenie) do efektu
    jokeField.classList.add("shake");

    // Usunięcie animacji po jej zakończeniu
    setTimeout(() => {
        jokeField.classList.remove("shake");
    }, 400); // czas trwania animacji (dopasuj do długości animacji w CSS)
}

// Dodanie zdarzenia kliknięcia na przycisk
generateButton.addEventListener("click", (event) => {
    event.preventDefault(); // Zapobiega przeładowaniu strony przy użyciu formularza
    generateJoke();
});
