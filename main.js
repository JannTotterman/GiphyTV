var url = "https://api.giphy.com/v1/gifs/random?api_key=S5T7dHoInq9St05lBLf54BVw4pNVLPw7";
newVideo();
function newVideo() {
    var giphyAJAXCall = new XMLHttpRequest();
    giphyAJAXCall.open( "Get", url ),
    giphyAJAXCall.send();
    giphyAJAXCall.addEventListener("load", function (e) {
        var data = e.target.response;
        pushToDOM(data);
    });
}
function pushToDOM(input){
    var response = JSON.parse(input);
    var image = response.data;
    var src = image.images.original.url;
    var container = document.querySelector(".container");
    container.innerHTML = "<img src=\"" + src + "\">";
    var imageWidth = image.image_width;
    document.querySelector("body").style.maxWidth = imageWidth + "px";
    setTimeout(newVideo, 10000);
};
