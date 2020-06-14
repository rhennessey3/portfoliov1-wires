
$("#mobileMenuBtn").click(function () {
    $("#openMenu").toggleClass('display-open')
    event.preventDefault();
});

$("#desktopMenuBtn").click(function () {
    $("#openMenu").toggleClass('display-open')
    event.preventDefault();
});


$(".menu-item").click(function () {
    $("#openMenu").removeClass('display-open')

});
