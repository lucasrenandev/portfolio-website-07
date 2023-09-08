/* ===== Strict mode ===== */
'use strict'

/* ===== Responsive menu ===== */
const menuIcon = document.getElementById("menu-icon")
const navbar = document.getElementById("navbar")

menuIcon.addEventListener("click", function() {
    navbar.classList.toggle("active")
    this.classList.toggle("fa-times")
})

window.addEventListener("scroll", function() {
    navbar.classList.remove("active")
    menuIcon.classList.remove("fa-times")
})

/* ===== Jquery counter ===== */
$(document).ready(function() {
    $(".count").each(function() {
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3500,
            easing: "swing",
            step: function(now) {
                $(this).text(Math.ceil(now) + "+")
            }
        })
    })
})

/* ===== LightGallery ===== */
lightGallery(document.querySelector(".projects .projects-container"))