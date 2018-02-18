(function(window, document) {

    var pswpElement = document.querySelectorAll('.pswp')[0];
    var gallery = document.querySelector('.gallery__images');
    var figures = [].slice.call(document.querySelectorAll('.gallery__image'));

    /**
     * Create an array of images to be used by the gallery plugin
     */
    var items = figures
        .map(function(figure) {
            return {
                w: 500,
                h: 500,
                src: figure.querySelector('img').src
            }
        });

    /**
     * Listen for clicks on the gallery
     */
    gallery.addEventListener('click', function(e) {

        /**
         * get the index of the image clicked on
         */
        var index = figures.indexOf(e.target.closest('.gallery__image'));

        /**
         * If we clicks on an image, show the gallery.
         */
        if (index > -1) {
            initGallery(index);
        }
    });

    /**
     * Start the gallery from a set slide
     * @param index
     */
    function initGallery(index) {

        var options = {
            index: index
        };

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    }
})(window, document);
