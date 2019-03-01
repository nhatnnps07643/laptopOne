// import { log } from "util";

$('.detail_product_list.owl-carousel').owlCarousel({
    loop:true,
	margin: 10,
	items:1
})

var width = $('.item .box_img_product img').width()
$('.item .box_img_product figure img').css({
	'height': width*5/6 + 'px',
})
var width = $('.home_product_list .item  img').width()
$('.home_product_list .item  img').css({
	'height': width*5/6 + 'px',
})

console.log(width);


// JS TAB QUA LẠI
$("[data-action='tab']").on('click', function(){
	// Lấy ra tab sẽ được hiển thị
	var target = $(this).attr('data-target')
	// Tìm kiếm những item cùng vị trí để remove class
	var item_tab_current = $(this).parents("[id^='tab']").find('.item_tab')
	// Tìm vị trí các div Tab hiển trị hiện tại
	var Tab_current = $(target).parent().find("[id^='tab']")
	// Remove class củ , add active cho class mới
	$(item_tab_current).removeClass('active')
	$(this).addClass('active');

	// Set hidden và active cho TAB 
	$(Tab_current).attr('data-tab','hidden')
	$(target).attr('data-tab','true')
})

// ADd sự kiện để lấy hình từ view sang modal
$('.more_info_product').click(function(){
	var img = $(this).parents('figure').find('img').clone()
	$('figure#img_modal').html('');
	$('figure#img_modal').append(img);
})
