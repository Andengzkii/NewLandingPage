// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var redirectButton = document.getElementById('redirectButton');
    var hiddenLink = document.getElementById('hiddenLink');

    redirectButton.addEventListener('click', function() {
        var link = hiddenLink.href;
        window.location.href = link;
    });
});
