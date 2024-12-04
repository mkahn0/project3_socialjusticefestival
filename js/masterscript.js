$(window).on("scroll", function() {
    if($(window).scrollTop() > 0) {
        header.style.backgroundColor='#f00';
        // header.style.backgroundColor = '#f00';
        // $("header").addClass("active");
    } else {
    //    $("header").removeClass("active");
    header.style.backgroundColor='#f333';

       header.style.backgroundColor = '#333';

    }
});

//   source: https://jsfiddle.net/634d6vgq/2/