$(window).load(function(){function e(e,t){n.eq(e).addClass("active"),n.eq(t).removeClass("active"),l.eq(e).addClass("active"),l.eq(t).removeClass("active"),s.text(c[e].text),d.text(c[e].price)}function t(){a=$(".bgd-image .slides-images .active").attr("data-number"),r-=1,r<0&&(r=3),e(r,a)}function i(){a=$(".bgd-image .slides-images .active").attr("data-number"),r+=1,r>3&&(r=0),e(r,a)}var a,r=0,c=[{text:"Для зала",price:"50"},{text:"Для спальни",price:"40"},{text:"Для кухни",price:"60"},{text:"Для гостиной",price:"80"}],n=$(".bgd-image .slides-images img"),s=$(".wall-where h3"),d=$(".wall-price p span"),l=$(".slider-pointer .pointer");l.on("click",function(){r=$(this).attr("data-number"),a=$(".slider-pointer .active").attr("data-number"),e(r,a)}),$(".slider .left-arrow").on("click",function(){t()}),$(".slider .right-arrow").on("click",function(){i()})});