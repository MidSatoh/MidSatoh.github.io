(function() {
    const images = document.querySelectorAll('img[data-animation="gif"]');
    [].forEach.call(images,function(image) {
        image.addEventListener('click', toggleImage);
        image.insertAdjacentHTML('afterend', '<div class="GIFstopped"><span>&#9658;</span></div>');
    });

    function toggleImage() {
        var myImage = this;
        var ext2 = myImage.getAttribute('data-animation');
        var ext1 = myImage.src.substr((~-myImage.src.lastIndexOf(".") >>> 0) + 2);
        if (ext2 == "gif") {
            toggleItem(myImage, ext1, ext2, 'GIFplaying', '');
        } else {
            toggleItem(myImage, ext1, ext2, 'GIFstopped', '<span>&#9658;</span>');
        }
    }

    function toggleItem(myImage, ext1, ext2, className, text) {
        var myText = myImage.nextElementSibling;
        myImage.src = myImage.src.replace('.'+ext1, '.'+ext2);
        myImage.setAttribute('data-animation', ext1);
        myImage.className= className + '_img';
        myText.className = className;
        myText.innerHTML = text;
    }
})();