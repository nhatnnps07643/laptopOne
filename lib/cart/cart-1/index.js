// JS Cart 01
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