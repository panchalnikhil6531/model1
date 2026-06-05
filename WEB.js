        fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

        fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
/* SCROLL TO TOP */
document.getElementById("scrollTopBtn")
.addEventListener("click", function(){

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* SCROLL TO BOTTOM */
document.getElementById("scrollBottomBtn")
.addEventListener("click", function(){

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

});


window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("adPopup")
        .style.display = "flex";

    }, 2000);

});



function closePopup(){

    document.getElementById("adPopup")
    .style.display = "none";

}