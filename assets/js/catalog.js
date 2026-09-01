document.addEventListener("DOMContentLoaded", async () => {

    const grid = document.getElementById("handbook-grid");

    const response = await fetch("catalog.json");

    const catalog = await response.json();

    catalog.forEach(book => {

        const card = document.createElement("div");

        card.className = "handbook-card";

        card.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.description}</p>
        `;

        card.onclick = () => {

            window.location.href =
                `handbook.html?book=${book.folder}`;

        };

        grid.appendChild(card);

    });

});