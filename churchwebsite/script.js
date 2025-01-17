
function makeImageClickable(imageId, url) {
    const image = document.getElementById(imageId);
    if (image) {
        const link = document.createElement('a');
        link.href = url;
        link.appendChild(image.cloneNode(true));
        image.parentNode.replaceChild(link, image);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    makeImageClickable('pic1', 'src=pic1.jpeg');
    makeImageClickable('pic2', 'src=pic2.jpeg');
    makeImageClickable('pic3', 'src=pic3.jpeg');
    makeImageClickable('pic4', 'src=pic4.jpeg');
    
});