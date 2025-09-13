const body = document.body;
const main= document.getElementById("main");
const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menubtn");
// var picture = document.querySelectorAll(".picturee");
// const pClose = document.getElementById("picture-close");

const scrollProgress = document.getElementById("scroll-progress");
const sPHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;


// const imgg = document.getElementById("imgg")
const imgg = document.querySelector(".imgg");
const img = document.querySelector(".img");
const imagg = document.querySelector(".imagg");
const imag = document.querySelector(".imag");
const imaagg = document.querySelector(".imaagg");
const imaag = document.querySelector(".imaag");

menuBtn.addEventListener("click", function(){
    body.classList.toggle("nav-active");
    // var menuText=document.getElementById("menutext").innerHTML;
    // var menuTextN=menuText.replace("menu","close");
    // document.getElementById("menutext").innerHTML=menuTextN;
});

document.querySelectorAll("nav li a").forEach(anchor =>{
    anchor.onclick = () =>{
        body.classList.remove("nav-active");
    }
})

// document.querySelector("#particles-js").addEventListener("click", function(){
//     if (body.classList.contains("nav-active")) {
//         body.classList.remove("nav-active");
//     }
    
// });

document.querySelectorAll("#pictures img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".picture-overlay").classList.add("picture-view");
        document.querySelector(".picture-overlay img").src = image.getAttribute("src");
    }
})

document.querySelector(".close").onclick =() =>{
    document.querySelector(".picture-overlay").classList.remove("picture-view");
}

window.addEventListener("scroll", function(){
    let value = window.scrollY;

    this.document.querySelector("#hero-5").style.top = value*.13 + "%";
    // this.document.querySelector("#hero-5").style.transform = `scale(${1-value*.0002})`
    this.document.querySelector("#hero-1").style.top = value*.115 + "%";
    this.document.querySelector("#hero-2").style.top = value*.1 + "%";
    this.document.querySelector("#hero-3").style.top = value*.08 + "%";
    this.document.querySelector("#hero-4").style.top = value*.025 + "%";
    this.document.querySelector("#text-3").style.transform = `translateX(${(550)-value*1.3}px) translateY(${value*.4}px)`;
    this.document.querySelector("#text-2").style.transform = `translateY(${value*.4}px) scale(${1+value*.0005})`;
    this.document.querySelector("#hero-6").style.left = value*.5 + "px";
    this.document.querySelector("#hero-6").style.bottom = value*.5 + "px";
    // this.document.querySelector("#text-3").style.transform = `scale(${(.75)+ value*.0008})`;
    // this.document.querySelector("#text-3").style.transform = `translateX(${-value*.2}%) translateY(${value*.8}%)`;
    // this.document.querySelector("#text-3").style.marginRight = value*1 +"%";

    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.height = `${(scrollTop / sPHeight) * 100}%`;
    
    body.classList.toggle("scrolltop-active",window.scrollY> 800);
});

// scroll progress //--

// window.addEventListener('scroll', () => {
//     const scrollTop =
//       document.body.scrollTop || document.documentElement.scrollTop;
//     scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
//   });