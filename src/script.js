const previousPageLink = document.referrer;
const currentPage = window.location.href;
if (currentPage.includes("index.html")){
    if (previousPageLink.includes("index.html") || previousPageLink.includes("about.html") || previousPageLink.includes("main.html")){
        document.getElementById('welcome_window').style.display = "none";
        document.getElementById('window_shadow').style.display = "none";
    }
    document.getElementById('w_x_button').addEventListener('click',function(){
            fadeOut(1,document.getElementById('window_content'),false);
            fadeOut(12,document.getElementById('welcome_window'),true);
            fadeOut(1,document.getElementById('window_shadow'),true)
        })
}
document.getElementById('speaker').addEventListener('click',function() {
    if(document.getElementById('speaker').src.includes("png")){
        document.getElementById('b_audio').muted = false;
        document.getElementById('b_audio').play();
        document.getElementById('speaker').src = "src/boom_box.gif";
    }
    else{
        document.getElementById('speaker').src = "src/boom_box.png"
        document.getElementById('b_audio').pause();
    }
});
/*document.getElementById('window_shadow').addEventListener('click',function(){
    fadeOut(1,document.getElementById('window_content'),false);
    fadeOut(12,document.getElementById('welcome_window'),true);
    fadeOut(1,document.getElementById('window_shadow'),true)
})*/
document.getElementById('wario_button').addEventListener('click',function(){
    document.getElementById('window_content');
})


async function fadeOut(timeDelay, element, remove){
    var opacity = 1;
    while (opacity > 0){
        opacity = opacity - 0.05;
        element.style.opacity = opacity;
        await delay(timeDelay);
        console.log(opacity)
    }
    if (remove){
        element.style.display = 'none';
    }
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}