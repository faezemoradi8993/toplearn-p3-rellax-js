// Accepts any class name
var rellax = new Rellax('.rellax');
window.addEventListener("scroll", function () {
    //start totop

    if (window.pageYOffset > 200) {
        $(".totop").addClass("active");
    } else {
        $(".totop").removeClass("active");
    }

    //end totop

});
