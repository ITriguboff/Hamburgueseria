document.getElementById('stickyContent').innerHTML = document.getElementById('main').innerHTML;
document.querySelector("li:nth-child(1) path").getTotalLength();
//1210.709716796875;
// you might see slightly different values depending on your browser


const scrolltotop = () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });

 };

 document.querySelector("button").onclick = scrolltotop;
