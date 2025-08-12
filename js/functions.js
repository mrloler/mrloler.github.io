import { validURLS } from "./validURLS.js";

export function changePage(page, pushState = true)
{
    if (page == "") { // Domain name entered without url
        page = "home"; // Redirect to home
    } 

    let anchor = page.substring(page.indexOf('#')); // Get anchor
    page = page.split('#')[0]; // remove #anchors from string 

    var html_string = `/pages/${page}.html`;
    if (page == undefined || !validURLS.includes(page)) {
        html_string = "/pages/404_page.html"; // Change to 404 page
    }

    loadPage(html_string, document.getElementById("main"), anchor);

    // Add page to history/url
    if (pushState) {
        history.pushState(null, '', page);   
    }
}

export function loadPage(url, element, anchor) {
    fetch(url).then(response => response.text()).then(data => {
        element.innerHTML = data;
        scrollToAnchor(anchor); // Scroll to anchor after loading
    })
}

function scrollToAnchor(anchor) {
    if (anchor && anchor.includes('#')) { // checks if anchor exists
        const anchorId = anchor.split('#')[1]; // get part after #
        const element = document.getElementById(anchorId);
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
