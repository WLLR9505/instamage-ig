const btnDownload = document.getElementById('getImage');
var imageURL = document.getElementById('imgURL');
var baseURL = 'https://instagram.com/p/***/media/?size=l';

function convertLink () {
    let imgURL = imageURL.value;
    let startCode = imgURL.indexOf('com/p/') + 6;
    let endCode = imgURL.indexOf('/', startCode);
    let CODE = imgURL.substring(startCode, endCode);

    let LINK = baseURL.replace(/\*\*\*/i, CODE);
    return LINK;
}

btnDownload.addEventListener('click', () => {
    location.href = convertLink();
});
