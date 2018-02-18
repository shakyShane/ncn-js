(function(window, document) {

    /**
     * Select the menu button in the header
     */
    const button = document.querySelector('.menu');

    /**
     * Select the site-nav wrapper
     */
    const nav = document.querySelector('.site-nav');

    /**
     * Finally add a listener
     */
    button.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    /**
     * Listen for clicks on the entire page
     * and close the menu if it's open
     */
    document.addEventListener('click', function (e) {
        if (
            nav.classList.contains('active')
            && !nav.contains(e.target)
            && e.target !== button
        ) {
            nav.classList.remove('active');
        }
    });

})(window, document);