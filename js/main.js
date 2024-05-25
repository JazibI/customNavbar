let header_sect = document.querySelector("#header_sect");

let cart_btn_strip = document.querySelector("#cart_btn_strip");

let header_sectHeight = header_sect.offsetHeight;

cart_btn_strip.style.marginTop = header_sectHeight + "px";


window.addEventListener('resize', function () {
    let header_sectHeight = header_sect.offsetHeight;

cart_btn_strip.style.marginTop = header_sectHeight + "px";
})

let hamburger_btn = document.querySelector("#hamburger_btn");

let dropdown_nav = document.querySelector("#dropdown_nav");

hamburger_btn.addEventListener("click", function(){
    dropdown_nav.classList.toggle("dropdown_togler")
})




let hero_img = document.querySelector("#hero_img");

let hero_imgHeight = hero_img.offsetHeight;
// let hero_imgHeightA = hero_img.offsetHeight + 10;





window.addEventListener('scroll', function(){
    if(window.scrollY > hero_imgHeight){
        header_sect.classList.add('gb_light_gray');
    }else{
        header_sect.classList.remove('gb_light_gray');
    }
})



let search_panel = document.querySelector(".search_panel")
// let search_bar = document.querySelector(".search_bar")


let cross_icon = document.querySelector(".cross_icon")

let search_icon = document.querySelector(".search_icon")

let search_bar = document.querySelector(".search_bar")


search_icon.addEventListener('click', function(){
    search_panel.classList.add('width_toggle')
})

cross_icon.addEventListener('click', function(){
    search_panel.classList.remove('width_toggle')
})