// 所有效果以及用户交互开始部位
// window.onload = function(){
	// alert(niubi);
// }

// 导航追踪
$(function(){
	// 侧边导航过度
	$(".nav").css("opacity","1");
	
	
	
	
	
	
			$(window).scroll(function(){
						let shouye = $(window).scrollTop();
						console.log(shouye);
						// 移动端隐形导航滚动显示效果
						if (shouye >= 531) {
							$("#dakai").css({
								color:"#000",
							});
							$("#guanbi").css({
								color:"#000",
							})
						}else{
							$("#dakai").css({
								color:"#fff",
							});
							$("#guanbi").css({
								color:"#707070",
							})
						}
						if (shouye >= 0) {
							$(".nav dl dd:nth-child(1)").css("color","red");
							$(".nav dl dd:nth-child(2)").css("color","#000");
							$(".nav dl dd:nth-child(3)").css("color","#000");
							$(".nav dl dd:nth-child(4)").css("color","#000");
							$(".nav dl dd:nth-child(5)").css("color","#000");
							$(".nav dl dd:nth-child(6)").css("color","#000");
						}
						if (shouye >= 532) {
							$(".nav dl dd:nth-child(2)").css("color","red");
							$(".nav dl dd:nth-child(1)").css("color","#000");
							$(".nav dl dd:nth-child(3)").css("color","#000");
							$(".nav dl dd:nth-child(4)").css("color","#000");
							$(".nav dl dd:nth-child(5)").css("color","#000");
							$(".nav dl dd:nth-child(6)").css("color","#000");
						}
						if (shouye >= 1064) {
							$(".nav dl dd:nth-child(3)").css("color","red");
							$(".nav dl dd:nth-child(2)").css("color","#000");
							$(".nav dl dd:nth-child(1)").css("color","#000");
							$(".nav dl dd:nth-child(4)").css("color","#000");
							$(".nav dl dd:nth-child(5)").css("color","#000");
							$(".nav dl dd:nth-child(6)").css("color","#000");
						}
						if (shouye >= 2001) {
							$(".nav dl dd:nth-child(4)").css("color","red");
							$(".nav dl dd:nth-child(3)").css("color","#000");
							$(".nav dl dd:nth-child(2)").css("color","#000");
							$(".nav dl dd:nth-child(1)").css("color","#000");
							$(".nav dl dd:nth-child(5)").css("color","#000");
							$(".nav dl dd:nth-child(6)").css("color","#000");
						}
						if (shouye >= 4832) {
							$(".nav dl dd:nth-child(5)").css("color","red");
							$(".nav dl dd:nth-child(4)").css("color","#000");
							$(".nav dl dd:nth-child(3)").css("color","#000");
							$(".nav dl dd:nth-child(2)").css("color","#000");
							$(".nav dl dd:nth-child(1)").css("color","#000");
							$(".nav dl dd:nth-child(6)").css("color","#000");
						}
						// if (shoye >= 532) {
						// 	$(".nav dl dd").css({
						// 		color:"#fff",
						// 	});
						// }else{
						// 	$(".nav dl dd").css({
						// 		color:"#000",
						// 	});
						// }
					})
			
			
			
			
			
				$(".icon-mouse").click(function(){
					let top = $(".main-2").offset();
					let scr = $("html,body").scrollTop();
					$("html,body").animate({
						scrollTop:top.top
					},1000)
				})
				
				$(".shouye").click(function(){
					let top = $(".main-1").offset();
					let scr = $("html,body").scrollTop();
					$("html,body").animate({
						scrollTop:top.top
					},1000)
				})
				
				$(".guanyu").click(function(){
					let top = $(".main-2").offset();
					let scr = $("html,body").scrollTop();
					$("html,body").animate({
						scrollTop:top.top
					},1000)
				})
				
				$(".jineng").click(function(){
					let top = $(".skill").offset();
					let scr = $("html,body").scrollTop();
					$("html,body").animate({
						scrollTop:top.top
					},1000)
				})
				
				$(".zuopin").click(function(){
					let top = $(".gallery-wapr").offset();
					let scr = $("html,body").scrollTop();
					$("html,body").animate({
						scrollTop:top.top
					},1000)
				})
				
				$(".lianxi").click(function(){
					let top = $(".contact").offset();
					let scr = $("html,body").scrollTop();
					$("html,body").animate({
						scrollTop:top.top
					},1000)
				})
			
			
				
				
				$("#dakai").click(function(){
					$(".nav-d").css({
						opacity:"1",
						top:"0%",
					})
				})
				
				$("#guanbi").click(function(){
					$(".nav-d").css({
						opacity:"0",
						top:"-50%",
					})
				})
			
			
			
			
			// 技能
			// 1.第一步创建函数入口
			// 2.绑定滚动条事件
			// 3.为浏览器添加滚动条动画
			// 4.利用if进行判断
				$(window).scroll(function(){
					let scr = $(window).scrollTop();
					// console.log(scr);
					if (scr >= 1064) {
						$(".jindu-1").css({
							width:"95%",
						})
						$(".jindu-2").css({
							width:"85%",
						})
						$(".jindu-3").css({
							width:"87%",
						})
						$(".jindu-4").css({
							width:"78%",
						})
						$(".jindu-5").css({
							width:"88%",
						})
						$(".jindu-6").css({
							width:"81%",
						})
					}else{
						$(".jindu-1").css({
							width:"0%",
						})
						$(".jindu-2").css({
							width:"0%",
						})
						$(".jindu-3").css({
							width:"0%",
						})
						$(".jindu-4").css({
							width:"0%",
						})
						$(".jindu-5").css({
							width:"0%",
						})
						$(".jindu-6").css({
							width:"0%",
						})
					}
				})
	})	