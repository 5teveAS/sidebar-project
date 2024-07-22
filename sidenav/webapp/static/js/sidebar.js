$("#sidebar-open-btn").on('click', function() {
    $(".sidebar").addClass('sidebar-active');
    $("#overlay").addClass('overlay-active');
    // $("body").addClass('body-sidebar-active');
    $("#sidebar-open-btn, #nav-title").addClass('hide-elements');
});

$("#sidebar-close-btn, #overlay").on('click', function() {
    $(".sidebar").removeClass('sidebar-active');
    $("#overlay").removeClass('overlay-active');
    // $("body").removeClass('body-sidebar-active');
    $("#sidebar-open-btn, #nav-title").removeClass('hide-elements');
});

$(document).on('click', function(e) {
    if (!$(e.target).closest('.sidebar, #sidebar-open-btn').length) {
        $(".sidebar").removeClass('sidebar-active');
        // $("body").removeClass('body-sidebar-active');
        $("#overlay").removeClass('overlay-active');
        $("#sidebar-open-btn, #nav-title").removeClass('hide-elements');
    }
});