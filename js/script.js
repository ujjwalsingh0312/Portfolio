var navbar = document.getElementsByClassName("nav-links");
function scrollpage(tabname){
    for(tablink of navbar){
        tablink.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}