export function art() {
    let imgArray = [];
    getRequest();

    function connectJsonFile() {
        let request = new XMLHttpRequest();
        request.open("GET", "imgs.json");
        request.responseType = 'json';
        return request;
    }

    async function getRequest() {
        let promise = new Promise((resolve, reject) => {
            let request = connectJsonFile();
            request.onloadend = () => {
                if (request.status == 200) {
                    resolve(request);
                } else {
                    reject(request);
                }
            }
            request.send();
        })
            .then(request => {
                createImages(request.response);
            })
    }

    function createImages(req) {
        let images = document.querySelector(".arts");
        for (let i = 0; i < req['images'].length; i++) {
            imgArray[i] = req['images'][i]['url'];
            let image = createImage(imgArray[i]);
            images.appendChild(image);
        }

    }

    function createImage(src) {
        let divElement = document.createElement("div");
        let image = document.createElement("img");
        divElement.appendChild(image);
        image.setAttribute("class", "icon");
        image.setAttribute("src", src);
        return divElement;
    }
}