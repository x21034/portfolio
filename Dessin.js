var photo = document.getElementById("photo");
var title = document.getElementById("title");

document.getElementById("photo-1")
        .addEventListener("click", function() {
    photo.src = "DSC_1026.JPG";
    title.innerHTML = "ビール瓶";
});
document.getElementById("photo-2")
        .addEventListener("click", function() {
    photo.src = "DSC_1027.JPG";
    title.innerHTML = "手";
});
document.getElementById("photo-3")
        .addEventListener("click", function() {
    photo.src = "DSC_1028.JPG";
    title.innerHTML = "化粧品";
});
document.getElementById("photo-4")
        .addEventListener("click", function() {
    photo.src = "DSC_1029.JPG";
    title.innerHTML = "鉛筆削り";
});
document.getElementById("photo-5")
        .addEventListener("click", function() {
    photo.src = "DSC_1030.JPG";
    title.innerHTML = "蛇口";
});