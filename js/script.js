import { changePage } from "./functions.js";

// Page is loaded
$(document).ready(function() {
    // loads header + main + footer to index.html
    $("#header").load("pages/components/header.html");
    $("#main").load("pages/home.html");
    $("#footer").load("pages/components/footer.html");
    
    // When user comes from url or link
    const url = window.location.pathname;
    changePage(url.substring(1),false); // Remove the first '/' from the url
    
    // When User press next/prev page
    $(window).on('popstate', function(e){
        const url = window.location.pathname;
        changePage(url.substring(1),false); // Remove the first '/' from the url
    });

    // Detect link clicks on page
    $(document).on('click', 'a', function(event) {
        if ($(this).attr('target') !== '_blank'){ // Check if the target is not blank, else its gonna open the html/file normally
            event.preventDefault();
            var href = $(this).attr('href');
            changePage(href)
        }
    });


});

