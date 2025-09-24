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
        if (anchor) {
            // Check "doChangePage" attribute. Call changePage function when true
            const ChangePageAttr = anchor.getAttribute('changePage');
            if (ChangePageAttr == 1 && anchor.target !== "_blank") { // Check if the target is not blank, else its gonna open the html/file normally
                event.preventDefault();
                changePage(anchor.getAttribute('href'));
            }

            // Check "dispense" attribute. Make HTTPS call if true.
            const dispenseAttr = anchor.getAttribute('dispense');
            if (dispenseAttr == 1){
                fetch('https://arriving-terminally-lab.ngrok-free.app/?drink=1', {
                    headers: {
                        'ngrok-skip-browser-warning': 'true'
                    }
                });
                alert("order sent for Vodka Cola")
            } else if (dispenseAttr == 2) {
                fetch('https://arriving-terminally-lab.ngrok-free.app/?drink=2', {
                    headers: {
                        'ngrok-skip-browser-warning': 'true'
                    }
                });
                alert("order sent for Amaretto cassis")
            } else if (dispenseAttr == 3) {
                fetch('https://arriving-terminally-lab.ngrok-free.app/?drink=3', {
                    headers: {
                        'ngrok-skip-browser-warning': 'true'
                    }
                });
                alert("order sent for Amaretto cola")
            } else if (dispenseAttr == 4) {
                fetch('https://arriving-terminally-lab.ngrok-free.app/?drink=4', {
                    headers: {
                        'ngrok-skip-browser-warning': 'true'
                    }
                });
                alert("order sent for Vodka cassis")
            }

            // Update data
            const updateAttr = anchor.getAttribute('update');
            if (updateAttr == 1) {
                fetch('https://arriving-terminally-lab.ngrok-free.app/drinks_dispensed', {
                    headers: {
                        'ngrok-skip-browser-warning': 'true'
                    }
                }).then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.status);
                    }
                    return response.json();

                }).then(data => {
                    // update data
                    const dataField = document.getElementById("bartender-data");
                    dataField.innerHTML = data;
                });
            }
        }
    })
});
