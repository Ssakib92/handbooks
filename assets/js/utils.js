/*==============================================================
    Research Foundation Handbook Series
    Utility Functions
==============================================================*/


/*--------------------------------------------------------------
    Query Parameters
--------------------------------------------------------------*/

function getQueryParam(name) {

    const params = new URLSearchParams(window.location.search);

    return params.get(name);

}


/*--------------------------------------------------------------
    Fetch JSON
--------------------------------------------------------------*/

async function fetchJSON(path) {

    const response = await fetch(path);

    if (!response.ok) {

        throw new Error(`Unable to load: ${path}`);

    }

    return await response.json();

}


/*--------------------------------------------------------------
    Fetch Markdown
--------------------------------------------------------------*/

async function fetchMarkdown(path) {

    const response = await fetch(path);

    if (!response.ok) {

        throw new Error(`Unable to load: ${path}`);

    }

    return await response.text();

}


/*--------------------------------------------------------------
    Navigate
--------------------------------------------------------------*/

function go(url) {

    window.location.href = url;

}


/*--------------------------------------------------------------
    Create Element
--------------------------------------------------------------*/

function createElement(tag, className = "", html = "") {

    const element = document.createElement(tag);

    if (className) {

        element.className = className;

    }

    element.innerHTML = html;

    return element;

}


/*--------------------------------------------------------------
    Clear Element
--------------------------------------------------------------*/

function clearElement(id) {

    document.getElementById(id).innerHTML = "";

}


/*--------------------------------------------------------------
    Show Error
--------------------------------------------------------------*/

function showError(message) {

    document.body.innerHTML = `

        <div style="

            max-width:700px;
            margin:100px auto;
            text-align:center;
            font-family:Arial,sans-serif;

        ">

            <h1>⚠ Error</h1>

            <p>${message}</p>

            <a href="index.html">Return Home</a>

        </div>

    `;

}


/*--------------------------------------------------------------
    Set Page Title
--------------------------------------------------------------*/

function setTitle(title) {

    document.title = title;

}


/*--------------------------------------------------------------
    Find Chapter Index
--------------------------------------------------------------*/

function getChapterIndex(metadata, chapterId) {

    return metadata.chapters.findIndex(

        chapter => chapter.id === chapterId

    );

}


/*--------------------------------------------------------------
    Previous Chapter
--------------------------------------------------------------*/

function previousChapter(metadata, index) {

    if (index <= 0) return null;

    return metadata.chapters[index - 1];

}


/*--------------------------------------------------------------
    Next Chapter
--------------------------------------------------------------*/

function nextChapter(metadata, index) {

    if (index >= metadata.chapters.length - 1)

        return null;

    return metadata.chapters[index + 1];

}