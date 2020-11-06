var pics = document.querySelectorAll(".pics");
var information = document.querySelector(".information");
var links = document.querySelector(".links");

function AnimScroll(){
    var Top = window.pageYOffset;
    for(var i = 0; i< pics.length; i++){
        let picsTop = pics[i].offsetTop;
        if(picsTop -400 < Top){
            pics[i].classList.add("zoom-in-up");
        }else{
            pics[i].classList.remove("zoom-in-up");
            pics[i].classList.add("zoom-in-out-up");
        }
    
    }
    let infoTop = information.offsetTop;
    let linksTop = links.offsetTop
    if(infoTop - 300< Top){
        information.classList.add("slide-rigth-anim");
    }
    if(linksTop - 300 < Top){
        links.classList.add("slide-left-anim");
    }
}
window.addEventListener('scroll',AnimScroll);