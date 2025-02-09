document.getElementById("fetch-button").addEventListener("click", fetchData);

async function fetchData() {
  renderLoadingState();
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    renderData(data);
  } catch (error) {
    renderErrorState();
  }
}

function renderErrorState() {
  const container = document.getElementById("data-container");
  container.innerHTML = ""; // Clear previous data
  container.innerHTML = "<p>Failed to load data</p>";
  console.log("Failed to load data");
}

function renderLoadingState() {
  const container = document.getElementById("data-container");
  container.innerHTML = ""; // Clear previous data
  container.innerHTML = "<p>Loading...</p>";
  console.log("Loading...");
}

function renderData(data) {
  const container = document.getElementById("data-container");
  container.innerHTML = ""; // Clear previous data

  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = ` <img src="${data?.message}" alt="Random Dog Image">`;
  container.appendChild(div);
}
