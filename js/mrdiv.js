// to show the search div
document.getElementById("icon").onclick = function () {
    document.getElementById("sear").classList.remove("remove");
    document.getElementById("sear").classList.add("seen");
}
// to hide the search div
document.getElementById("close").onclick = function () {
    document.getElementById("sear").classList.remove("seen");
    document.getElementById("sear").classList.add("remove");
}
// to show the navigation links at small screens
document.getElementById("barsIcon").onclick = function () {
    document.getElementById("barsIcon").style.display = "none";
    document.getElementById("cancle").classList.remove("remove");
    document.getElementById("cancle").classList.add("seen");
    document.getElementById("links").classList.remove("delete");
    document.getElementById("links").classList.add("seen");
    document.getElementById("landing").style.top = "60%";
}
// to hide the navigation links at small screens
document.getElementById("cancle").onclick = function () {
    document.getElementById("barsIcon").style.display = "block";
    document.getElementById("cancle").classList.remove("seen");
    document.getElementById("cancle").classList.add("remove");
    document.getElementById("links").classList.remove("seen");
    document.getElementById("links").classList.add("delete");
    document.getElementById("landing").style.top = "50%";
}

// this code to make the tabs 
// first we call our main elements 
var boxs = Array.from(document.getElementsByClassName("work-cardes")),
    count = boxs.length,
    currenttab = 1,
    btns = Array.from(document.getElementsByClassName("header"));
// this funcation to remove the active classe from any main elements and add it to the element we need to active
function animation() {
    boxs.forEach(function (tab) {
        tab.classList.remove("card-active");//remove the class card-active from all tab containers(boxs)
    });
    btns.forEach(function (dot) {
        dot.classList.remove("tap-active");//remove the class tap-active from all tab links
    });

    boxs[currenttab - 1].classList.add("card-active");//add the class card-active to this box
    btns[currenttab - 1].classList.add("tap-active");//add the class tab-active to this link
    console.log("funcation");
}
// end the funcation
// for loop to set the tab link
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        currenttab = parseInt(this.getAttribute("data-index"));//to get the tab container which have the data index nomber equal to i
        animation();//calling the function 
    }
}

// go top button
 //Get the button:
 const mybutton = document.getElementById("myBtn");

 // When the user scrolls down 400px from the top of the document, show the button
 window.onscroll = function() {
     scrollFunction()
 };

 function scrollFunction() {
     if (document.body.scrollTop >= 400 || document.documentElement.scrollTop > 400) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }