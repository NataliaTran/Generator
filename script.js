const generateButton = document.querySelector("#generateButton");
const jokeField = document.querySelector("#jokeField");
const saveJokeButton = document.querySelector("#saveJokeButton");
const heart = document.querySelector("#heartConfirmation");

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
      body: JSON.stringify({ category })
    });

    const data = await response.json();

    if (response.ok && data.joke) {
      jokeField.innerText = data.joke;
      addShake(jokeField);  // animacja przy poprawnym żarcie
    } else {
      jokeField.innerText = "❌ Błąd API: " + (data.error || "Nieznany błąd");
    }
  } catch (error) {
    jokeField.innerText = "❌ Błąd połączenia: " + error.message;
    addShake(jokeField);
  }

  generateButton.disabled = false;
}

saveJokeButton.addEventListener("click", () => {
  const joke = jokeField.innerText.trim();

  if (
    joke &&
    joke !== "Kliknij, by wygenerować żart" &&
    !joke.startsWith("⏳") &&
    !joke.startsWith("❌")
  ) {
    saveJoke(joke);
  }
});

function saveJoke(joke) {
  const jokes = JSON.parse(localStorage.getItem("savedJokes")) || [];

  if (!jokes.includes(joke)) {
    jokes.push(joke);
    localStorage.setItem("savedJokes", JSON.stringify(jokes));
    showHeart();
  }
}

function showHeart() {
  heart.classList.remove("heart-pop"); // usuń, jeśli jest
  void heart.offsetWidth;              // wymuś restart animacji
  heart.classList.add("heart-pop");

  setTimeout(() => {
    heart.classList.remove("heart-pop");
  }, 800);
}


