function updateProducts(productList) {
    var product0Name = productList[0][1];
    var product0Description = productList[0][2];
    var product1Name = productList[1][1];
    var product1Description = productList[1][2];
    
    // change HTML
    $("#product0-name").html(product0Name);
    $("#product0-description").html(product0Description);
    $("#product1-name").html(product1Name);
    $("#product1-description").html(product1Description);

    // Generate products
    
    $("#product-module").load("/pages/components/product_template.html");

}

// Page is loaded
$(document).ready(function() {
    // Read product API
    fetch("http://127.0.0.1:1000/")
        .then(res => res.json())
        .then(data => {
            updateProducts(data);
        });
});