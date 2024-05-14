// let header_sect = document.querySelector("#header_sect");

// let dropdown_nav = document.querySelector("#dropdown_nav");

// let header_sectHeight = header_sect.offsetHeight;

// dropdown_nav.style.marginTop = header_sectHeight + "px";


// window.addEventListener('resize', function () {
//     let header_sectHeight = header_sect.offsetHeight;

//     dropdown_nav.style.marginTop = header_sectHeight + "px";
// })

let hamburger_btn = document.querySelector("#hamburger_btn");

let dropdown_nav = document.querySelector("#dropdown_nav");

hamburger_btn.addEventListener("click", function(){
    dropdown_nav.classList.toggle("dropdown_togler")
})


let user_btn = document.querySelector("#user_btn");

let user_dropdown = document.querySelector("#user_dropdown");

user_btn.addEventListener("click", function(){
    user_dropdown.classList.toggle("users_info_togler")
})

