import { changePage, loadPage } from "./functions.js";

// Page (DOM) is loaded
document.addEventListener('DOMContentLoaded', function () {
    // loads header + main + footer to index.html
    loadPage("pages/components/header.html", document.getElementById("header"));
    loadPage("pages/home.html", document.getElementById("main"));
    loadPage("pages/components/footer.html", document.getElementById("footer"));
    
    // When user comes from url or link
    const url = window.location.pathname;
    changePage(url.substring(1),false); // Remove the first '/' from the url
    
    // When User press next/prev page
    window.addEventListener('popstate', (event) => {
        const url = window.location.pathname;
        changePage(url.substring(1),false); // Remove the first '/' from the url
    });

    // Detect link clicks on page
    document.addEventListener('click', function(event) {
        const anchor = event.target.closest('a')
        if (anchor && anchor.target !== "_blank") { // Check if the target is not blank, else its gonna open the html/file normally
            event.preventDefault();
            changePage(anchor.getAttribute('href'));
        }
    })
});

