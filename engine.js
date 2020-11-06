
var container = document.querySelector(".container");
var loader = document.querySelector(".loader");
var welcome = document.querySelector(".bg-alert");
var soundBtn = document.querySelector(".sound");
container.style.display = "none";
    loader.style.display = "block";
window.onload = function(){
    welcome.style.display = "block";
    container.style.display = "none";
    loader.style.display = "none";
    
}
soundBtn.addEventListener('click',()=>{
    sound();
    container.style.display = "block";
    welcome.style.display = "none";
});
function sound(){
    var audio = document.getElementById("music-bg");
    if(audio.paused || audio.ended){
    audio.play();
}else{
    audio.pause();
}
}
var grid = document.querySelector(".grid");
const picsGallery = [
   {
    pic: 'pic0.jpeg',
    desc: 'Junio 26'
},
  {
    pic: 'pic1.jpeg',
    desc: 'Agosto 27'
},
  {
    pic: 'pic2.jpeg',
    desc: 'Enero 1'
},
  {
    pic: 'pic3.jpeg',
    desc: 'Febrero 12'
},
  {
    pic: 'pic4.jpeg',
    desc: 'Julio 19'
},
  {
    pic: 'pic5.jpeg',
    desc: 'Marzo 20'
},
  {
    pic: 'pic6.jpeg',
    desc: 'Mayo 30'
},
  {
    pic: 'pic7.jpeg',
    desc: 'Diciembre 24'
},
  {
    pic: 'pic8.jpeg',
    desc: 'Diciembre 31'
}
];
var lengthGallery = picsGallery.length;

grid.innerHTML = "";
const baseUrl = "resources/";
picsGallery.forEach((pics,i) => {
  grid.innerHTML += `<div class="pics" style="background-image: url(${pics.pic});">
        <div class="info">
        <p>${pics.desc}</p>
        </div>
    </div>`;
});
//TyperWriter.JS
var elem = document.getElementById('autoText');
    var typer = new Typewriter(elem, {
        delay: 40
    });
    typer.
    typeString("Lorem ipsum dolor sit amet consectetur adipiscing elit justo blandit, felis varius urna libero donec fusce dictumst neque. A platea nostra eros primis mi nam cursus sapien, fames duis tempus dui aliquam aenean imperdiet, tellus sagittis orci ac euismod pharetra integer. Interdum facilisis penatibus non habitasse nisl pretium nullam fringilla faucibus, fusce duis torquent nec massa eros cras sociosqu iaculis ullamcorper, mattis habitant quis enim semper nulla augue class.Imperdiet praesent libero dictum at augue varius accumsan, vitae auctor erat urna nulla enim feugiat ad, facilisis tortor duis dictumst lacus luctus. Libero phasellus nullam lacinia condimentum iaculis vitae risus laoreet potenti litora, at non aliquam ut varius montes justo fermentum tincidunt rhoncus nascetur, vulputate dui metus morbi eget penatibus sapien eleifend rutrum. Volutpat ullamcorper dapibus magna integer nec ut taciti gravida hac duis, convallis augue turpis sodales praesent fusce blandit donec.").
    
    start();
    window.oncontextmenu = function(){return false;}
