const baseURL = "https://api.sampleapis.com/coffee/hot";

async function obtenerCafe() {
  try {
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);

    const randomElement = data[Math.floor(Math.random() * data.length)];

    document.querySelector("span").innerHTML = `Te recomiendo: ${randomElement.title}`;
  } catch (err) {
    alert("Ha ocurrido un error", err);
  }
}
