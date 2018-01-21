	<!--footer -->
	<div class="footer">
		
		
	<div class="copyright">
		<div class="container">
			<div class="copyrighttop">
				<ul>
					<li>
						<h4>Follow us on:</h4>
					</li>
					<li><a class="facebook" href="https://www.facebook.com/WorldWideCash" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
				
				</ul>
			</div>
			<div class="copyrightbottom">
				<p>© 2018 WorldWideCash. All Rights Reserved</p>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	<!-- //copyright -->


	<!-- js -->
	
	<!-- //js -->
	<!--search-bar-->
	<script src="js/main.js"></script>
	<!--//search-bar-->
	<script>
		$('ul.dropdown-menu li').hover(function () {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
		}, function () {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
		});
	</script>

	<!-- stats -->
	<script src="js/jquery.waypoints.min.js"></script>
	<script src="js/jquery.countup.js"></script>
	<script>
		$('.counter').countUp();
	</script>
	<!-- //stats -->


	<script src="js/responsiveslides.min.js"></script>
	<script>
		$(function () {
			$("#slider4").responsiveSlides({
				auto: true,
				pager: true,
				nav: true,
				speed: 1000,
				namespace: "callbacks",
				before: function () {
					$('.events').append("<li>before event fired.</li>");
				},
				after: function () {
					$('.events').append("<li>after event fired.</li>");
				}
			});
		});
	</script>
	<!-- script for responsive tabs -->
	<script>
		//$(document).ready(function () {
		//	$('#horizontalTab').easyResponsiveTabs({
		//		type: 'default', //Types: default, vertical, accordion           
		//		width: 'auto', //auto or any width like 600px
		//		fit: true, // 100% fit in a container
		//		closed: 'accordion', // Start closed if in accordion view
		//		activate: function (event) { // Callback function if tab is switched
		//			var $tab = $(this);
		//			var $info = $('#tabInfo');
		//			var $name = $('span', $info);
		//			$name.text($tab.text());
		//			$info.show();
		//		}
		//	});
		//	$('#verticalTab').easyResponsiveTabs({
		//		type: 'vertical',
		//		width: 'auto',
		//		fit: true
		//	});
		//});
	</script>
	<!--// script for responsive tabs -->
	<!-- start-smoth-scrolling -->
	<script type="text/javascript" src="js/move-top.js"></script>
	<script type="text/javascript" src="js/easing.js"></script>
	<script type="text/javascript">
		jQuery(document).ready(function ($) {
			$(".scroll").click(function (event) {
				event.preventDefault();
				$('html,body').animate({
					scrollTop: $(this.hash).offset().top
				}, 900);
			});
		});
	</script>
	<!-- start-smoth-scrolling -->

	<script type="text/javascript">
		$(document).ready(function () {
			/*
									var defaults = {
							  			containerID: 'toTop', // fading element id
										containerHoverID: 'toTopHover', // fading element hover id
										scrollSpeed: 1200,
										easingType: 'linear' 
							 		};
									*/

			$().UItoTop({
				easingType: 'easeOutQuart'
			});

		});
	</script>
	<a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>
	<script type="text/javascript" src="js/bootstrap-3.1.1.min.js"></script>


</body>

</html>