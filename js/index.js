//无缝轮播1
		$(function(){
			var oClone = $(".fr .mslide_banner").eq(0).clone();
			$(".fr .mslide_banners").append(oClone);
			var oWidth = $(" .fr .mslide_banner").width();
			var oLength =$(" .fr .mslide_banner").length;
//			var oLength =4;
			console.log(oWidth);
			console.log(oLength);
			$(".fr .mslide_banners").css({width:''+oWidth*oLength+'px'});
			var index=0;
			var oMack = false;
			$(" .fr .mslide_content_box .mslide_prev_btn").click(function(){
				if(oMack)return;
				oMack = true;
				 prevPlay();
				
			});
			
			$('.fr .mslide_content_box .mslide_next_btn').click(function(){
				if(oMack)return;
				oMack = true;
				nextPlay();
		     });
		    

			
			
			function prevPlay(){
				index --;
				if(index<0){
						$(".fr .mslide_banners").css({left:'-'+oWidth*(oLength-1)+'px'});
						index=oLength-2;
						
					
				}
					$(".fr .mslide_banners").stop().animate({left:'-'+index*oWidth+'px'},500,function(){oMack = false});
				
			}
			function nextPlay(){
				index ++;
				if(index>oLength-1){
					$(".fr .mslide_banners").css({left:0});
						index=1;
						
					}
						$(".fr .mslide_banners").stop().animate({left:'-'+index*oWidth+'px'},500,function(){oMack = false});

				
			}
			
			var timer = null;
			timer = setInterval(nextPlay,2000);
			$(".fr .mslide_content_box").mouseenter(function(){
				
				 clearInterval(timer);
				
			})
			$(".fr .mslide_content_box").mouseleave(function(){
				
				 timer = setInterval(nextPlay,2000);
				
			})
			
			
			
			
		})
//无缝轮播2
		$(function(){
			var oClone = $(".women .mslide_banner").eq(0).clone();
			$(".women  .mslide_banners").append(oClone);
			var oWidth = $(".women .mslide_banner").width();
			var oLength =$(".women .mslide_banner").length;
//			var oLength =4;
			console.log(oWidth);
			console.log(oLength);
			$(".women .mslide_banners").css({width:''+oWidth*oLength+'px'});
			var index=0;
			var oMack = false;
			$(".women .mslide_content_box .mslide_prev_btn2").click(function(){
				if(oMack)return;
				oMack = true;
				 prevPlay();
				
			});
			
			$('.women .mslide_content_box .mslide_next_btn2').click(function(){
				if(oMack)return;
				oMack = true;
				nextPlay();
		     });
		    

			
			
			function prevPlay(){
				index --;
				if(index<0){
						$(".women .mslide_banners").css({left:'-'+oWidth*(oLength-1)+'px'});
						index=oLength-2;
						
					
				}
					$(".women .mslide_banners").stop().animate({left:'-'+index*oWidth+'px'},500,function(){oMack = false});
				
			}
			function nextPlay(){
				index ++;
				if(index>oLength-1){	
					$(".women .mslide_banners").css({left:0});
						index=1;
						
					}
						$(".women .mslide_banners").stop().animate({left:'-'+index*oWidth+'px'},500,function(){oMack = false});

				
			}
			
			var timer = null;
			timer = setInterval(nextPlay,2000);
			$(".women .mslide_content_box").mouseenter(function(){
				
				 clearInterval(timer);
				
			})
			$(".women .mslide_content_box").mouseleave(function(){
				
				 timer = setInterval(nextPlay,2000);
				
			})
			
			
			
			
		})
		
		
//无缝轮播3
/*	$(function(){
			var oClone = $(".shoe .mslide_banner").eq(0).clone();
			$(".shoe  .mslide_banners").append(oClone);
			var oWidth = $(".shoe .mslide_banner").width();
//			var oLength =$(".shoe .mslide_banner").length;
			var oLength = 4;
			console.log(oWidth);
			console.log(oLength);
			$(".shoe .mslide_banners").css({width:''+oWidth*oLength+'px'});
	
	
			//添加数字按钮
			var oLi="";
			var index=0;
			for(var i=0; i <3; i++){

			oLi +='<li>'+(i+1)+'</li>';
			}
			$(".banner_menu").append(oLi);
			$(".banner_menu li").eq(0).addClass("active");
			//数字按钮移动
			$(".banner_menu li") .mouseenter(function(){
				
				   $(this).addClass("active").stop().siblings().removeClass("active");
				   var j =$(this).index();
				$(".shoe .mslide_banners").stop().animate({left:'-'+j*oWidth+'px'},2000);
//				   	console.log(j);
				   	index=j;
			})*/
//			var timer= 0;
//			timer = setInterval(function(){
//				index ++;
//				if(index>3){
//						$(".shoe .mslide_banners").css({left:0});
//				
//						index=1;
//
//				}
//				
//				var $li = $('.shoe .banner_menu li');
//				$li.eq(index).mouseenter();
//				
//
//			},2000);
//				
//			$(".middleArea").mouseenter(function(){
//
//				 clearInterval(timer);
//			}).mouseleave(function(){
//					timer = setInterval(function(){
//						index ++;
//						console.log(index);
//						if(index>3){
//							$(".shoe .mslide_banners").css({left:0});
//				
//							index=0;
//
//		
//						}
//						$(".banner").stop().animate({left:'-'+index*600+'px'},500,function(){oMack = false});
//						var $li = $('.shoe .banner_menu li');
//						$li.eq(index).mouseenter();
//				
//
//					},2000);
//
//			})

//})


	//banner轮播
	var oBanner = document.getElementsByClassName("banner");
	var oBox= document.getElementsByClassName("banner_conetnt");
	var oBox1 = document.getElementsByClassName("banner_conetnt_photo");
	var oBox2 = document.getElementsByClassName("banner_btn");
	var oSp= oBox2[0].getElementsByTagName('span');
	var oColors = ["#f5a3b6","#ffd328","#ff667f","#8dd9f9",'#c3173d'];

	var oSpan ="";
	var iNow = 0;

		for ( var i = 0; i < 5 ; i++){
			oSpan+='<span></span>';
		}
		oBox2[0].innerHTML = oSpan;
		
		for ( var j= 0; j <oSp.length; j++){
			oSp[j].index = j;
			oSp[j].onmousemove =function() {
				for(var k = 0; k<5 ; k++){
					oSp[k].style.background="none";
					oSp[this.index].style.background="#e7e7eb";
					oBox1[0].style.backgroundImage = 'url(img/banner'+(this.index+1)+'.jpg)';
					oBanner[0].style.background=oColors[this.index];
					iNow = this.index;
				
				} 
			
		}
	}

	var timer = 0;
	timer = setInterval(function(){
		iNow++;
//		console.log(iNow);
		 if(iNow>oSp.length-1){ 
     		 iNow=0;
      }
		oSp[iNow].onmousemove();
		
	},2000);

	oBox1[0].parentNode.onmousemove=function(){
		clearInterval(timer);
	}
	oBox1[0].parentNode.onmouseout=function(){
		timer = setInterval(function(){
		iNow++;
		console.log(iNow);
		 if(iNow>oSp.length-1){ 
     		 iNow=0;
      }
		oSp[iNow].onmousemove();
		
	},2000);
	}



	//倒计时
		var timedate = new Date("2018/07/16,00:00:00");
		var now= new Date();
		var date = parseInt(timedate.getTime()-now.getTime())/1000;
		var oDiv = document.getElementsByClassName("brandCountdown");
		var oli = oDiv[0].getElementsByTagName("li");
		function countDown(times){
			var timer =null;
			timer = setInterval(function(){
				var day = 0,
					hour = 0,
					mintue = 0,
					second = 0;
					if(times>0){
						day = Math.floor(times/(60*60*24));
						hour = Math.floor(times/(60*60)%24);
						mintue = Math.floor(times/60%60)
						second = Math.floor(times%60)
						
					}
					if(day <= 9) day ='0'+day;
					if(hour <= 9) hour ='0'+hour;
					if(mintue <= 9) mintue ='0'+mintue;
					if(second <= 9) second ='0'+second;
					<!-- console.log(hour); -->
					<!-- console.log(mintue); -->
					<!-- console.log(second); -->
					
					oli[0].innerHTML=hour;
					oli[2].innerHTML=mintue;
					oli[4].innerHTML=second;
					times--;

			},1000)
			if(times<=0){
				clearInterval(timer);
			}
		}
		countDown(date);
		
	//like	
	$(function(){
		
		  var oHeight = $(".good-item").height();
		 var oLength =$(".good-item").length;
		  
		  for (var i =1; i<150; i++) {
		  	var oClone = $(".goods_item").eq(0).clone();
		  	$(".like_goods").append(oClone);
		  }
		  $(".like_goods").css({height:''+oHeight*oLength/5+'px'});
//		  console.log( $(".like_goods").height());

		
		
		
		
		
		
		
	})
	
	$(function(){
		
		$(".QRcode").mouseenter(function(){
			$(".rightbar .qr").css("display","block")
			
		})
		$(".QRcode").mouseleave(function(){
			$(".rightbar .qr").css("display","none")
			
		})
		
		$(window).scroll(function(){
			if ($(window).scrollTop()>100){
				$(".rightbar .returntop div").fadeIn(500);
			}
			else{
				$(".rightbar .returntop div").fadeOut(500);
				
			}
		})
		$(".rightbar .returntop div").click(function(){
				
				$('body,html').animate({scrollTop:0},300);
				return false;
				
				})

		$(window).scroll(function(){
			if ($(window).scrollTop()>400){
				$(".scrolltop").slideDown(500);
			}
			else{
				$(".scrolltop").slideUp(500);
				
			}
		})
		$(".search_menu").mouseenter(function(){
				$(' .banner_conetnt_menu').css({
					"position":"fixed",
					"top":"50px",
					});
	
			
				$('.banner_conetnt .banner_conetnt_menu li').css({
					
					"background-color":"rgba(0,0,0,.8)",
				});
				$('.banner_conetnt_menu .drop_menu a').css({
					"color":"#ffffff",
				});
				$('.banner_conetnt_menu .drop_menu .drop_menu_more  a').css({
					"color":"#333",
				});
				
				
		})
		$(".search_menu").mouseout(function(){
			$('.banner_conetnt .banner_conetnt_menu').css({
					"position":"relative",
					"top":"0px",
					
				});
				$('.banner_conetnt .banner_conetnt_menu li').css({
					
					"background-color":"rgba(255,2255,255,.8)",
					
					
				});
				$('.banner_conetnt_menu .drop_menu a').css({
					"color":"#333",
					
				});
				$('.banner_conetnt_menu .drop_menu .drop_menu_more  a').css({
					"color":"#fffffff",
					
				});
				
				
		})
	})

   var mySwiper = new Swiper('.swiper-container', {
		autoplay: true,//可选选项，自动滑动
	  loop : true,
	   pagination: {
	        el: '.swiper-pagination',
	      },
	})
	    
