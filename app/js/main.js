;($(window).load(function(){
    var n = 0;
    var desc = [
        {
            text: "Для зала",
                price: "50"
        },
        {
            text: "Для спальни",
                price: "40"
        },
        {
            text: "Для кухни",
                price: "60"
        },
        {
            text: "Для гостиной",
                price: "80"
        }
    ];
    var active;
    var img = $('.bgd-image .slides-images img');
    var text = $('.wall-where h3');
    var price = $('.wall-price p span');
    var pointer = $('.slider-pointer .pointer');
    
    function change(n, active) {
        img.eq(n).addClass('active');
        img.eq(active).removeClass('active');
        pointer.eq(n).addClass('active');
        pointer.eq(active).removeClass('active');
        text.text(desc[n].text);
        price.text(desc[n].price);
    }
    
    function left(){
        active = $('.bgd-image .slides-images .active').attr('data-number');
        n = n - 1;
        if (n<0) {
            n = 3;
        }
        
        change(n, active);            
    }
    
    function right() {
        active = $('.bgd-image .slides-images .active').attr('data-number');
        n = n + 1;
        if (n>3) {
            n = 0;
        }

        change(n, active);
    }

    pointer.on('click', function() {
        n = $(this).attr('data-number');
        active = $('.slider-pointer .active').attr('data-number');
        change(n, active);
    })


    $('.slider .left-arrow').on('click', function () {
        left();
    });

    $('.slider .right-arrow').on('click', function () {
        right();
    })

}));