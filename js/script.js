const btnDownload = document.getElementById('getImage');
var imageURL = document.getElementById('imgURL');
var baseURL = 'https://instagram.com/p/***/media/?size=l';

function convertLink (link) {
    let startCode = link.indexOf('com/p/') + 6;
    let endCode = link.indexOf('/', startCode);
    let CODE = link.substring(startCode, endCode);

    let LINK = baseURL.replace(/\*\*\*/i, CODE);
    return LINK;
}

function validate (link) {
    if (link.includes('instagram.com/p/')) {
        return true;
    }
    return false;
}

btnDownload.addEventListener('click', () => {
    if (validate(imageURL.value)) {
        imageURL.style.borderColor = 'none';
        location.href = convertLink(imageURL.value);
    } else {
        imageURL.style.borderColor = 'red';
    }
});
