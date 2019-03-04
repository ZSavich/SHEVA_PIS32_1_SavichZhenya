"use strict";

const photo = document.getElementById("photo");
const wrapper = document.getElementById("wrapper");
const logo = document.getElementById("logo");

photo.addEventListener('click', ()=> {
    wrapper.classList.add("hidden");
    logo.classList.remove("hidden");

    setTimeout("alert('The Punisher')", 1000)
});