window.onload = function() {
    var numLeaves = 30;
    var leafImage = "leaf.png";

    var background = document.getElementById("background");
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    console.log("Screen Width:", screenWidth);
    for (var i = 0; i < numLeaves; i++) {
        var image = document.createElement("img");
        image.src = leafImage;
        image.style.top = Math.floor(Math.random() * (screenHeight - 100)) + "px";
        image.style.left = Math.floor(Math.random() * (screenWidth - 100)) + "px";
        image.style.animationDuration = Math.random() * 10 + 2 + "s";
        image.style.filter = "hue-rotate(" + Math.floor(Math.random() * 360) + "deg)";
        background.appendChild(image);
        animateLeaf(image, screenWidth);
    }
};

function animateLeaf(leaf, screenWidth) {
    var speed = 5;

    setTimeout(function() {
        leaf.style.transition = "left " + speed + "s linear";
        leaf.style.left = screenWidth + "px";
    }, 100);

    setTimeout(function() {
        leaf.style.transition = "";
        leaf.style.left = "-100px";
        setTimeout(function() {
            leaf.style.transition = "left " + speed + "s linear";
            leaf.style.left = screenWidth + "px";
        }, 0);
    }, (speed + 5) * 10);
}
