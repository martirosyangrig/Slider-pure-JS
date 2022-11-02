"use strict";

const wrap =document.querySelector(".wrapper");
const chek = document.querySelector("input");
const prevBtn = document.querySelector(".btn_prev")
const nextBtn = document.querySelector(".btn_next");

let images = [
    "./img/img1.jfif",
    "./img/img2.jpg",
    "./img/img3.webp",
    "./img/img4.jpg",
    "./img/img5.jpg",
    "./img/img6.jpg"
]

function start(){
    let a = 0;
    if(window.innerWidth < 635){
        a = 1
    }
    else if(window.innerWidth <= 1100){
        a = 2
    }
    else if(window.innerWidth > 1100){
        a = 4
    }

    for(let i = 0; i < a; i++ ){
        let img = document.createElement("img")
        let div = document.createElement("div");
        div.append(img)
        wrap.append(div)
        img.src = images[i]
    }

}

function showSlide(img){
    img.className = "fadeIn"

    setTimeout(()=>{
        img.className = ""
    }, 50)
 
    
}

function mobiletouch(){
    let x;
    let y;
    divs.forEach((div)=>{
        div.addEventListener("touchstart", (e)=>{
            x = e.touches[0].clientX; 
        });

        div.addEventListener("touchend", (e)=>{
            y = e.changedTouches[0].clientX;
            if(x - y >= 0){
                nextBtnMove();
            }else{
                prevBtnMove();
            }
           
            
        })
    })
}
start()

const imgs = document.querySelectorAll("img");
const divs = document.querySelectorAll(".wrapper > div");



function nextBtnMove(){
    let v = images.indexOf("." + imgs[0].src.slice(21))
    for(let i = 0; i < imgs.length; i++){
        showSlide(imgs[i]);
        if(v === 5){
            v = -1
        }
        imgs[i].src = images[v +1];
        v++
    }
}

function prevBtnMove(){
    let v = images.indexOf("." + imgs[imgs.length - 1].src.slice(21))
    for(let i = imgs.length -1; i >= 0; i--){
        showSlide(imgs[i])
        if(v === 0){
            v = 6
        }
        imgs[i].src = images[v - 1]
        v--;

    }
}

function autoSlide(){
    chek.addEventListener("change", ()=>{
        const ad =  setInterval(()=>{
            if(chek.checked){
                nextBtnMove();
            }
     
        }, 2000)
         if(!chek.checked){
             clearInterval(ad)
         }
         
    });
     
}

mobiletouch();
autoSlide();

nextBtn.addEventListener("click", ()=>{
    nextBtnMove();
});

prevBtn.addEventListener("click", ()=>{
    prevBtnMove();
});