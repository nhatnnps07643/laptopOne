// var width = $(' .detail_3 .product-list .item').width()
// $('.product-list  .item  img').css({
// 	'height': width*5/7 + 'px',
// 	'width': '100%'
// })

$('.detail_3 .owl-carousel.product-list').owlCarousel({
   
	dots: false,
	margin: 10,
	loop: false,
    responsive:{
        0:{
			items:1,
			nav:true,
        },
        600:{
			items:3,
			nav:true,
        },
        1000:{
			items:5,
			nav:true,
        }
    }
})