import { validURLS } from "./validURLS.js";

export function changePage(page, pushState = true)
{
    var html_string = `/pages/${page}.html`;
    if (page == undefined || !validURLS.includes(page)) {
        html_string = "/pages/404.html"; // Change to 404 page
    }

    $("#main").load(html_string); // Change to page

    //change url etc...
    if (pushState) {
        history.pushState(null, '', page);   
    }
}
