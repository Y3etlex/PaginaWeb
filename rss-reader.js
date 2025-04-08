document.addEventListener("DOMContentLoaded", () => {
  const rssUrl = "https://y3etlex.github.io/PaginaWeb/ejemplo.rss"; // Cambia por la URL de tu RSS
  const feedContainer = document.getElementById("rss-feed");

  fetch(rssUrl)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      const items = data.querySelectorAll("item");
      items.forEach((el) => {
        const title = el.querySelector("title").textContent;
        const link = el.querySelector("link").textContent;
        const description = el.querySelector("description").textContent;

        const feedItem = document.createElement("div");
        feedItem.classList.add("feed-item");
        feedItem.innerHTML = `
            <h2><a href="${link}" target="_blank">${title}</a></h2>
            <p>${description}</p>
          `;
        feedContainer.appendChild(feedItem);
      });
    })
    .catch((err) => console.error("Error al cargar el RSS:", err));
});
