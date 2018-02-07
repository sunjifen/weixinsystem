// 个人中心

	// 用户名剧中控制
$(function(){
	var width_1=$('.personal-in-1 div').width();
	var width_2=$('.personal-in-1 img').width();
	var width_3=width_1+width_2;
	var width_4=$('.personal-in-1').width();
	var width_5=(width_4-width_3)/2;
	$('.personal-in-1 div').css('margin-left',width_5);
})
// 全部订单查询
	// 菜单切换
$('.all-head-box').click(function(){
	var i=$('.all-head-box').index(this);
	$('.all-head-box').eq(i).addClass('all-head-box-1').siblings().removeClass('all-head-box-1');
	$('.all-order-out').eq(i).addClass('all-order-out-block').siblings().removeClass('all-order-out-block');
})
// 信息中心我的订单
	// 标签切换
$(function (){
	$('.information-center-inner-1').click(function (){
		var i=$('.information-center-inner-1').index(this);
		$('.information-center-inner-1').eq(i).addClass('box').siblings().removeClass('box');
		$('.information-center-hide').eq(i).addClass('information-center-show').siblings().removeClass('information-center-show');
	})
})
// 用户编辑地址
	// 设为默认地址
$('.add-address-inner').click(function(){
	if($(this).find('img').attr('src')=='images/add-address-1.png'){  
           $(this).find('img').attr('src','images/add-address-2.png');  
        }else{  
            $(this).find('img').attr('src','images/add-address-1.png');  
        }  
})
// 用户收货地址
	// 选择收货地址
$(function(){
	$('.all-address-in').click(function(){
		$('.all-address-in img').attr('src','images/add-address-1.png');
		$(this).find('img').attr('src','images/add-address-2.png');
	})
})
// 我的钱包宝宝币余额
	// 标签切换
$(function (){
	$('.information-center-inner-1').click(function (){
		var i=$('.information-center-inner-1').index(this);
		$('.information-center-inner-1').eq(i).addClass('box').siblings().removeClass('box');
		$('.baby-currency-ms').eq(i).addClass('baby-currency-show').siblings().removeClass('baby-currency-show');
	})
})
// 我的进货
	// 商品数量控制
$(function(){
	$('.goods-box-left').click(function(){
		var i=$('.goods-box-left').index(this);
		var goods_text=$('.goods-box-text').eq(i).text();
		goods_text--;
		$('.goods-box-text').eq(i).text(goods_text);
		if (goods_text=="0") {
			$('.goods-box-left').eq(i).unbind("click");
		}
	})
	$('.goods-box-right').click(function(){
		var i=$('.goods-box-right').index(this);
		var goods_text=$('.goods-box-text').eq(i).text();
		goods_text++;
		$('.goods-box-text').eq(i).text(goods_text);
		// if (goods_text=="0") {			       限制数量
		// 	$('.goods-box-right').eq(i).unbind("click");
		// }
	})
})
// 我的团队
	// 级别切换
$(function (){
	$('.my-team-option').click(function (){
		var i=$('.my-team-option').index(this);
		$('.my-team-option').eq(i).addClass('my-box').siblings().removeClass('my-box');
		$('.my-team-ori').eq(i).addClass('my-team-show').siblings().removeClass('my-team-show');
	})
})