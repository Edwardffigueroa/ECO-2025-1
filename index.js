document.getElementById("fetch-button").addEventListener("click", fetchData);

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3004/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
