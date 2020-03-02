window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (screen.width >= 1600){
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "7px 10px";
            document.getElementById("navbar").style.background = "linear-gradient(90deg, rgba(244,145,19,0.9) 29%, rgba(251,170,34,0.9) 87%)";
            document.getElementById("logo").style.width = "80px";
        } else {
            document.getElementById("navbar").style.padding = "10px 10px";
            document.getElementById("logo").style.width = "100px";
            document.getElementById("navbar").style.background = "linear-gradient(90deg, rgba(244,145,19,1) 29%, rgba(251,170,34,1) 87%)";
        }
    }
    else if (screen.width >= 1025 || screen.width <= 1599){
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "6px 10px";
            document.getElementById("logo").style.width = "70px";
        } else {
            document.getElementById("navbar").style.padding = "9px 10px";
            document.getElementById("logo").style.width = "90px";
        }
    }
    else if (screen.width >= 768 || screen.width <= 1024){
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "5px 10px";
            document.getElementById("logo").style.width = "70px";
        } else {
            document.getElementById("navbar").style.padding = "8px 10px";
            document.getElementById("logo").style.width = "80px";
        }
    }
    else if (screen.width >= 481 || screen.width <= 767){
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "4px 10px";
            document.getElementById("logo").style.width = "60px";
        } else {
            document.getElementById("navbar").style.padding = "7px 10px";
            document.getElementById("logo").style.width = "70px";
        }
    }
    else{
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "3px 10px";
            document.getElementById("logo").style.width = "50px";
        } else {
            document.getElementById("navbar").style.padding = "6px 10px";
            document.getElementById("logo").style.width = "60px";
        }
    }
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
