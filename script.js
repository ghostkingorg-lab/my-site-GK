};
document.getElementById("btn2").onclick = function() {
    alert("Если кто-то сможет поддержать автора в телеграмм, любым подарком, знайте, что благодаря вам улучшается качество любого проэкта!");
};
function toggleMusicMenu() {
    var modal = document.getElementById("musicModal");
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}
function playTrack(trackUrl, element) {
    var audio = document.getElementById("mainAudio");
    var items = document.querySelectorAll(".playlist li");
    items.forEach(function(item) {
        item.classList.remove("active");
    });
    element.classList.add("active");
    audio.src = trackUrl;
    audio.play();
}
window.onclick = function(event) {
    var modal = document.getElementById("musicModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
