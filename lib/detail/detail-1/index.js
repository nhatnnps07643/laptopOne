
var dots = $('.detail_product_list.owl-carousel .owl-dots button')
var image = $('.detail_product_list .item img')

Array.prototype.forEach.call(dots,function(element,index){
	var Picture = $(image).get(index)
	var newpt = Picture.cloneNode()
	$(element).html(newpt)
});

$('.btn_prev').click(function(){
	var value = $(this).parent().find('input').val()
	if(value > 1){
		$(this).parent().find('input').val(value - 1)
	}
})
$('.btn_next').click(function(){
	var value = $(this).parent().find('input').val()
	value = parseInt(value) + 1
	$(this).parent().find('input').val(value)
})

$('#number_product').change(function(){
	if($(this).val() > 99 || $(this).val() < 1){
		$(this).val(1) 
	}
})