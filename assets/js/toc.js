/**
 * Convert heading text into a URL-friendly slug.
 */
function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}

/**
 * Assign unique IDs to all headings inside the reader.
 */
function generateHeadingIDs(container) {

    const headings = container.querySelectorAll(
        "h1, h2, h3, h4, h5, h6"
    );

    const used = {};

    headings.forEach(heading => {

        let slug = slugify(heading.textContent);

        if (!slug)
            slug = "section";

        if (used[slug]) {

            used[slug]++;

            slug = `${slug}-${used[slug]}`;

        } else {

            used[slug] = 1;

        }

        heading.id = slug;

    });

}

/**
 * Generate the Table of Contents.
 */
function generateTOC(reader, tocContainer) {

    const headings = reader.querySelectorAll(
        "h1, h2, h3, h4, h5, h6"
    );

    if (headings.length === 0) {

        tocContainer.innerHTML = "";

        return;

    }

    const ul = document.createElement("ul");

    headings.forEach(heading => {

        const li = document.createElement("li");

        const level = Number(heading.tagName.substring(1));

        li.classList.add(`toc-level-${level}`);

        const link = document.createElement("a");

        link.href = `#${heading.id}`;

        link.textContent = heading.textContent;

        li.appendChild(link);

        ul.appendChild(li);

    });

    tocContainer.innerHTML = "";

    tocContainer.appendChild(ul);

}

/**
 * Highlight the current section while scrolling.
 */
function setupScrollSpy(reader, tocContainer) {

    const headings = [...reader.querySelectorAll(
        "h2, h3, h4, h5, h6"
    )];

    const links = [...tocContainer.querySelectorAll("a")];

    if (!headings.length || !links.length)
        return;

    function updateActiveHeading() {

        const offset = 120;

        let current = headings[0];

        for (const heading of headings) {

            if (heading.getBoundingClientRect().top <= offset) {

                current = heading;

            } else {

                break;

            }

        }

        links.forEach(link =>
            link.classList.remove("active")
        );

        const active = tocContainer.querySelector(
            `a[href="#${current.id}"]`
        );

        if (active) {

            active.classList.add("active");

        }

    }

    window.addEventListener("scroll", updateActiveHeading);

    updateActiveHeading();

}