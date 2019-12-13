$(function() {
    let navigation = $(".nav-wrapper");
    let naviPoint = $(".navitem");
    let naviBurger = $(".burger-box");
    let logo = $(".name");
    let bookbook = $(".bookbord");
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        if (scroll >= 15) {
            navigation.removeClass('nav-wrapper').addClass('nav-wrapper-alt');
            naviPoint.removeClass('navitem').addClass('navitem-alt');
            logo.removeClass('name').addClass('name-alt');
            naviBurger.removeClass('burger-box').addClass('burger-box-alt');
            bookbook.removeClass('bookbord').addClass('bookbord-alt');
        } else {
            navigation.removeClass("nav-wrapper-alt").addClass('nav-wrapper');
            naviPoint.removeClass('navitem-alt').addClass('navitem');
            logo.removeClass('name-alt').addClass('name');
            naviBurger.removeClass('burger-box-alt').addClass('burger-box');
            bookbook.removeClass('bookbord-alt').addClass('bookbord');
        }
    });
});

function frontPage() {
  let element = document.getElementById("menu");
  let content = document.getElementById("heroimg");
  let frontpage = document.getElementById("frontpage-div");
  let menupage = document.getElementById("menupage-div");
  let bookingpage = document.getElementById("bookingpage-div");
  let galleripage = document.getElementById("galleripage-div");
  let ompage = document.getElementById("ompage-div");
  let burger = document.getElementById("nav-icon1");
  element.classList.remove("menu-visible");
  element.classList.add("menu-closed");
  menupage.classList.add("menupage-closed");
  frontpage.classList.add("front");
  frontpage.classList.remove("front-closed");
  content.classList.remove("heroimg-bgg-alt");
  content.classList.add("heroimg-bgg");
  menupage.classList.remove("menupage-open");
  menupage.classList.add("menupage-closed");
  bookingpage.classList.remove("bookingpage-open");
  bookingpage.classList.add("bookingpage-closed");
  galleripage.classList.remove("galleripag-open");
  galleripage.classList.add("galleripag-closed");
  ompage.classList.remove("ompage-open");
  ompage.classList.add("ompage-closed");
  burger.classList.remove("open");
  burger.classList.remove("closed");
  document.getElementById("footerid").style.display = "none";

}

function menuPage() {
  let element = document.getElementById("menu");
  let content = document.getElementById("heroimg");
  let frontpage = document.getElementById("frontpage-div");
  let menupage = document.getElementById("menupage-div");
  let bookingpage = document.getElementById("bookingpage-div");
  let galleripage = document.getElementById("galleripage-div");
  let ompage = document.getElementById("ompage-div");
  let burger = document.getElementById("nav-icon1");
  element.classList.remove("menu-visible");
  element.classList.add("menu-closed");
  frontpage.classList.add("front-closed");
  frontpage.classList.remove("front");
  content.classList.remove("heroimg-bgg-alt");
  content.classList.add("heroimg-bgg");
  menupage.classList.remove("menupage-closed");
  menupage.classList.add("menupage-open");
  bookingpage.classList.remove("bookingpage-open");
  bookingpage.classList.add("bookingpage-closed");
  galleripage.classList.remove("galleripag-open");
  galleripage.classList.add("galleripag-closed");
  ompage.classList.remove("ompage-open");
  ompage.classList.add("ompage-closed");
  burger.classList.remove("open");
  burger.classList.remove("closed");
  document.getElementById("footerid").style.display = "block";
}

function bookingPage() {
  let element = document.getElementById("menu");
  let content = document.getElementById("heroimg");
  let frontpage = document.getElementById("frontpage-div");
  let menupage = document.getElementById("menupage-div");
  let bookingpage = document.getElementById("bookingpage-div");
  let galleripage = document.getElementById("galleripage-div");
  let ompage = document.getElementById("ompage-div");
  let burger = document.getElementById("nav-icon1");
  element.classList.remove("menu-visible");
  element.classList.add("menu-closed");
  frontpage.classList.add("front-closed");
  frontpage.classList.remove("front");
  content.classList.remove("heroimg-bgg-alt");
  content.classList.add("heroimg-bgg");
  menupage.classList.add("menupage-closed");
  menupage.classList.remove("menupage-open");
  bookingpage.classList.add("bookingpage-open");
  bookingpage.classList.remove("bookingpage-closed");
  galleripage.classList.remove("galleripag-open");
  galleripage.classList.add("galleripag-closed");
  ompage.classList.remove("ompage-open");
  ompage.classList.add("ompage-closed");
  burger.classList.remove("open");
  burger.classList.remove("closed");
}

function galleriPage() {
  let element = document.getElementById("menu");
  let content = document.getElementById("heroimg");
  let frontpage = document.getElementById("frontpage-div");
  let menupage = document.getElementById("menupage-div");
  let bookingpage = document.getElementById("bookingpage-div");
  let galleripage = document.getElementById("galleripage-div");
  let ompage = document.getElementById("ompage-div");
  let burger = document.getElementById("nav-icon1");
  element.classList.remove("menu-visible");
  element.classList.add("menu-closed");
  frontpage.classList.add("front-closed");
  frontpage.classList.remove("front");
  content.classList.remove("heroimg-bgg-alt");
  content.classList.add("heroimg-bgg");
  menupage.classList.add("menupage-closed");
  menupage.classList.remove("menupage-open");
  bookingpage.classList.add("bookingpage-closed");
  bookingpage.classList.remove("bookingpage-open");
  galleripage.classList.remove("galleripag-closed");
  galleripage.classList.add("galleripag-open");
  ompage.classList.remove("ompage-open");
  ompage.classList.add("ompage-closed");
  burger.classList.remove("open");
  burger.classList.remove("closed");
}

function omPage() {
  let element = document.getElementById("menu");
  let content = document.getElementById("heroimg");
  let frontpage = document.getElementById("frontpage-div");
  let menupage = document.getElementById("menupage-div");
  let bookingpage = document.getElementById("bookingpage-div");
  let galleripage = document.getElementById("galleripage-div");
  let ompage = document.getElementById("ompage-div");
  let burger = document.getElementById("nav-icon1");
  element.classList.remove("menu-visible");
  element.classList.add("menu-closed");
  frontpage.classList.add("front-closed");
  frontpage.classList.remove("front");
  content.classList.remove("heroimg-bgg-alt");
  content.classList.add("heroimg-bgg");
  menupage.classList.add("menupage-closed");
  menupage.classList.remove("menupage-open");
  bookingpage.classList.add("bookingpage-closed");
  bookingpage.classList.remove("bookingpage-open");
  galleripage.classList.add("galleripag-closed");
  galleripage.classList.remove("galleripag-open");
  ompage.classList.add("ompage-open");
  ompage.classList.remove("ompage-closed");
  burger.classList.remove("open");
  burger.classList.remove("closed");
}

$(document).ready(function(){
  let menu = $("#menu");
  let heroimg = $("#heroimg");
	$('#nav-icon1').click(function(){
    $(this).toggleClass('closed');
		$(this).toggleClass('open');
    $(menu).toggleClass('menu-visible')
    $(menu).toggleClass('menu-closed')
    $(heroimg).toggleClass('heroimg-bgg')
    $(heroimg).toggleClass('heroimg-bgg-alt')
	});
});
