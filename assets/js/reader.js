document.addEventListener("DOMContentLoaded", async () => {

    const params = new URLSearchParams(window.location.search);

    const book = params.get("book");

    const chapter = params.get("chapter");

    if (!book || !chapter) {

        document.body.innerHTML = "<h2>Chapter not found.</h2>";

        return;

    }

    //----------------------------------------------------
    // Load metadata
    //----------------------------------------------------

    const metadataResponse = await fetch(
        `handbooks/${book}/metadata.json`
    );

    const metadata = await metadataResponse.json();

    //----------------------------------------------------
    // Chapter title
    //----------------------------------------------------

    const currentChapter =
        metadata.chapters.find(c => c.id === chapter);

    if (currentChapter) {

        document.getElementById("chapter-title").textContent =
            currentChapter.title;

    }

    //----------------------------------------------------
    // Back button
    //----------------------------------------------------

    document.getElementById("back-link").href =
        `handbook.html?book=${book}`;

    //----------------------------------------------------
    // Load markdown
    //----------------------------------------------------

    const markdownResponse = await fetch(
        `handbooks/${book}/${chapter}.md`
    );

    const markdown = await markdownResponse.text();

    //----------------------------------------------------
    // Markdown → HTML
    //----------------------------------------------------

const md = window.markdownit({

    html: true,

    linkify: true,

    typographer: true

}).use(texmath, {

    engine: katex,

    delimiters: "dollars"

});

const html = md.render(markdown);

const reader = document.getElementById("reader");

reader.innerHTML = html;

    //----------------------------------------------------
    // Render Math
    //----------------------------------------------------

    if (typeof renderMathInElement !== "undefined") {

        renderMathInElement(reader, {

            delimiters: [

                {
                    left: "$$",
                    right: "$$",
                    display: true
                },

                {
                    left: "$",
                    right: "$",
                    display: false
                }

            ]

        });

    }
    //----------------------------------------------------
    // Highlight Code
    //----------------------------------------------------

    if (typeof Prism !== "undefined") {

        Prism.highlightAll();

    }

    //----------------------------------------------------
    // Generate Heading IDs
    //----------------------------------------------------

    generateHeadingIDs(reader);

    //----------------------------------------------------
    // Generate TOC
    //----------------------------------------------------

    const toc = document.getElementById("toc");

    generateTOC(reader, toc);
    setupScrollSpy(reader, toc);

    //----------------------------------------------------
    // Previous / Next
    //----------------------------------------------------

    const index =
        metadata.chapters.findIndex(c => c.id === chapter);

    const prevButton =
        document.getElementById("previous-button");

    const nextButton =
        document.getElementById("next-button");

    if (index > 0) {

        prevButton.onclick = () => {

            window.location.href =
                `chapter.html?book=${book}&chapter=${metadata.chapters[index - 1].id}`;

        };

    } else {

        prevButton.disabled = true;

    }

    if (index < metadata.chapters.length - 1) {

        nextButton.onclick = () => {

            window.location.href =
                `chapter.html?book=${book}&chapter=${metadata.chapters[index + 1].id}`;

        };

    } else {

        nextButton.disabled = true;

    }

});