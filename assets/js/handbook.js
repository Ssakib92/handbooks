document.addEventListener("DOMContentLoaded", async () => {

    const params = new URLSearchParams(window.location.search);

    const folder = params.get("book");

    if (!folder) {

        document.body.innerHTML = "<h2>Handbook not found.</h2>";

        return;

    }

    const response = await fetch(
        `handbooks/${folder}/metadata.json`
    );

    const metadata = await response.json();

    document.getElementById("handbook-title").textContent =
        metadata.title;

    document.getElementById("handbook-description").textContent =
        metadata.description;

    const list = document.getElementById("chapter-list");

    metadata.chapters.forEach(chapter => {

        const div = document.createElement("div");

        div.className = "chapter-card";

        div.innerHTML = `
            <h3>${chapter.title}</h3>
        `;

        div.onclick = () => {

            window.location.href =
                `chapter.html?book=${folder}&chapter=${chapter.id}`;

        };

        list.appendChild(div);

    });

});