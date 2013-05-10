// load Youtube Player Script
var tag = document.createElement('script');
var player;
var youtubeReady = false;

tag.src = ('https:' == document.location.protocol ? 'https://' : 'http://www.') + "youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
	youtubeReady = true;
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.playVideo();
}

$("a.video").click(function(e){
	if(youtubeReady){
		$(this).children('img').fadeOut();
		$(this).children('.embed').css('z-index', 3);
		
		var $throwawayContainer = $(this).children(".embed").children("div")
		var youtubeId = $throwawayContainer.data("youtubeid");
	
		player = new YT.Player($throwawayContainer.attr("id"), {
			height: '408',
			width: '660',
			videoId: youtubeId,
			events: {
				'onReady': onPlayerReady
			}
		});
	}
	
	e.preventDefault();
});

$(".dropdown-menu a").click(function(e) {
	
	console.log($(this).attr("href"));
	$('html, body').animate({ scrollTop: $($(this).attr("href")).offset().top - $($(this).attr("href")).css("marginTop").replace('px', '') - $('header').outerHeight() }, 2000);
	e.preventDefault();
});

var headerTop = $("header").offset().top;
$(window).scroll(function(e) {  
    if ($(window).scrollTop() > headerTop) { 
      $('header').addClass("fixed");
    } else {
      $('header').removeClass("fixed");
    } 
 });

$(".design-role").click(function(){
	$('#myModal').modal('show');
	$("#myModal #myModalLabel").text($(this).children("h5").text());
	$("#myModal .modal-body").html($(this).children(".modal-content").html());
});
$('#myModal').on('show', function () {
	$("#myModal").show().addClass('in');
});

$('#myModal').on('hide', function () {
  // do something…
  	$(".modal-backdrop").remove();
});