
<script>

function openNav() {
  document.getElementById("mySidenav").style.width = "380px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}    
</script>


<script>

(function($){

$(document).ready(function(){

$("[title]").style_my_tooltips({

tip_follows_cursor:true,

tip_delay_time:90,

tip_fade_speed:600,

attribute:"title"

});

});
 
})(jQuery);

</script> 

<script>
    console.clear();

class musicPlayer {
	constructor() {
		this.play = this.play.bind(this);
		this.playBtn = document.getElementById('play');
		this.playBtn.addEventListener('click', this.play);
		this.controlPanel = document.getElementById('control-panel');
		this.infoBar = document.getElementById('info');
	}

	play() {
		let controlPanelObj = this.controlPanel,
		infoBarObj = this.infoBar
		Array.from(controlPanelObj.classList).find(function(element){
					return element !== "active" ? controlPanelObj.classList.add('active') : 		controlPanelObj.classList.remove('active');
			});
		
		Array.from(infoBarObj.classList).find(function(element){
					return element !== "active" ? infoBarObj.classList.add('active') : 		infoBarObj.classList.remove('active');
			});
	}
}

const newMusicplayer = new musicPlayer();
</script>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <style>
  #draggable { width: auto; height: auto; border: none;}
  </style>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#draggable" ).draggable();
  } );
  </script>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
//
$('a.poplight[href^=#]').click(function() {
var popID = $(this).attr('rel'); 
var popURL = $(this).attr('href'); 
var query= popURL.split('?');
var dim= query[1].split('&');
var popWidth = dim[0].split('=')[1]; 
$('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close"></a>');
var popMargTop = ($('#' + popID).height() + 80) / 2;
var popMargLeft = ($('#' + popID).width() + 80) / 2;

$('#' + popID).css({
'margin-top' : -popMargTop,
'margin-left' : -popMargLeft
});
$('body').append('<div id="fade"></div>');
$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); 
return false;
});
$('a.close, #fade').live('click', function() {
$('#fade , .popup_block').fadeOut(function() {
$('#fade, a.close').remove(); 
});
return false;
});
});
</script>

<script type="application/ld+json">
	{"@type":"ItemList","url":"https:\/\/springdoythemes.tumblr.com","itemListElement":[{"@type":"ListItem","position":1,"url":"https:\/\/springdoythemes.tumblr.com\/post\/630704640181305344\/sidebar-image-270x280-sidebar-png"},{"@type":"ListItem","position":2,"url":"https:\/\/springdoythemes.tumblr.com\/post\/188068012154\/this-is-an-ask"},{"@type":"ListItem","position":3,"url":"https:\/\/springdoythemes.tumblr.com\/post\/188067992534\/demo-lorem-ipsum-dolor-sit-amet-consectetuer"},{"@type":"ListItem","position":4,"url":"https:\/\/springdoythemes.tumblr.com\/post\/188067989589\/an-example-post"},{"@type":"ListItem","position":5,"url":"https:\/\/springdoythemes.tumblr.com\/post\/188067986614\/demo-allison-weiss-fingers-crossed-via"},{"@type":"ListItem","position":6,"url":"https:\/\/springdoythemes.tumblr.com\/post\/188067983924\/jack-hey-you-know-what-sucks-lindsey"}],"@context":"http:\/\/schema.org"}</script><link rel="canonical" href="https://springdoythemes.tumblr.com"><style type="text/css">
</style><script async="" src="/assets/scripts/tumblr/dashboard/showads.js"></script><style type="text/css">


(function(){
        var analytics_frame = document.getElementById('ga_target');
        var analytics_iframe_loaded;
        var user_logged_in;
        var blog_is_nsfw = 'No';

        var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        var eventer = window[eventMethod];
        var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
        eventer(messageEvent,function(e) {
            var message = (e.data && e.data.split) ? e.data.split(';') : '';
            switch (message[0]) {
                case 'analytics_iframe_loaded':
                    analytics_iframe_loaded = true;
                    postCSMessage();
                    postGAMessage();
                    break;
                case 'user_logged_in':
                    user_logged_in = message[1];
                    postGAMessage();
                    break;
            }
        }, false);

        analytics_frame.src = "https://assets.tumblr.com/analytics.html?_v=9f5febfd57a8a649c598d888f2d9e062#" +
                              "https://springdoythemes.tumblr.com";
        function postGAMessage() {
            if (analytics_iframe_loaded && user_logged_in) {
                var is_ajax = false;
                analytics_frame.contentWindow.postMessage(['tick_google_analytics', is_ajax, user_logged_in, blog_is_nsfw, '/?route=%2F'].join(';'), analytics_frame.src.split('/analytics.html')[0]);
            }
        }
        function postCSMessage() {
            COMSCORE = true;
            analytics_frame.contentWindow.postMessage('enable_comscore;' + window.location, analytics_frame.src.split('/analytics.html')[0]);
        }
    })();
</script><script type="text/javascript" nonce="">!function(s){s.src='https://px.srvcs.tumblr.com/impixu?T=1632990506&J=eyJ0eXBlIjoidXJsIiwidXJsIjoiaHR0cDovL3NwcmluZ2RveXRoZW1lcy50dW1ibHIuY29tLyIsInJlcXR5cGUiOjAsInJvdXRlIjoiLyJ9&U=IEGPEINEKO&K=9d06049a0fa58bbc2cb4f6bfe686fe03c34102baf2e8500237fe5bfc5a6f8696&R=https%3A%2F%2Fwww.tumblr.com%2F'.replace(/&R=[^&$]*/,'').concat('&R='+escape(document.referrer)).slice(0,2000).replace(/%.?.?$/,'');}(new Image());</script><noscript><img style="position:absolute;z-index:-3334;top:0px;left:0px;visibility:hidden;" src="https://px.srvcs.tumblr.com/impixu?T=1632990506&J=eyJ0eXBlIjoidXJsIiwidXJsIjoiaHR0cDovL3NwcmluZ2RveXRoZW1lcy50dW1ibHIuY29tLyIsInJlcXR5cGUiOjAsInJvdXRlIjoiLyIsIm5vc2NyaXB0IjoxfQ==&U=IEGPEINEKO&K=caa74fdfb3a5f8c61f79b2547119256890bdcf6eb0075b4b5b40f6974d0ae5ad&R=https%3A%2F%2Fwww.tumblr.com%2F"></noscript><script type="text/javascript" nonce="">!function(s){s.src='https://px.srvcs.tumblr.com/impixu?T=1632990506&J=eyJ0eXBlIjoicG9zdCIsInVybCI6Imh0dHA6Ly9zcHJpbmdkb3l0aGVtZXMudHVtYmxyLmNvbS8iLCJyZXF0eXBlIjowLCJyb3V0ZSI6Ii8iLCJwb3N0cyI6W3sicG9zdGlkIjoiNjMwNzA0NjQwMTgxMzA1MzQ0IiwiYmxvZ2lkIjo0Nzg2MjQ2NDUsInNvdXJjZSI6MzN9LHsicG9zdGlkIjoiMTg4MDY4MDEyMTU0IiwiYmxvZ2lkIjo0Nzg2MjQ2NDUsInNvdXJjZSI6MzN9LHsicm9vdF9ibG9naWQiOiIxOCIsInJvb3RfcG9zdGlkIjoiNDU5MDA5MDc2IiwicG9zdGlkIjoiMTg4MDY3OTkyNTM0IiwiYmxvZ2lkIjo0Nzg2MjQ2NDUsInNvdXJjZSI6MzN9LHsicm9vdF9ibG9naWQiOiIxOCIsInJvb3RfcG9zdGlkIjoiMjMyIiwicG9zdGlkIjoiMTg4MDY3OTg5NTg5IiwiYmxvZ2lkIjo0Nzg2MjQ2NDUsInNvdXJjZSI6MzN9LHsicm9vdF9ibG9naWQiOiIxODIzMDUiLCJyb290X3Bvc3RpZCI6IjIyODAyMjg0NyIsInBvc3RpZCI6IjE4ODA2Nzk4NjYxNCIsImJsb2dpZCI6NDc4NjI0NjQ1LCJzb3VyY2UiOjMzfSx7InJvb3RfYmxvZ2lkIjoiMTgiLCJyb290X3Bvc3RpZCI6IjIzMyIsInBvc3RpZCI6IjE4ODA2Nzk4MzkyNCIsImJsb2dpZCI6NDc4NjI0NjQ1LCJzb3VyY2UiOjMzfV19&U=ECCJIFCBHN&K=eebdbe1fd97f849982d6a73902c489d02f6cf20cd549cf0d4ddeec9548636572&R=https%3A%2F%2Fwww.tumblr.com%2F'.replace(/&R=[^&$]*/,'').concat('&R='+escape(document.referrer)).slice(0,2000).replace(/%.?.?$/,'');}(new Image());</script><noscript><img style="position:absolute;z-index:-3334;top:0px;left:0px;visibility:hidden;" src="https://px.srvcs.tumblr.com/impixu?T=1632990506&J=eyJ0eXBlIjoicG9zdCIsInVybCI6Imh0dHA6Ly9zcHJpbmdkb3l0aGVtZXMudHVtYmxyLmNvbS8iLCJyZXF0eXBlIjowLCJyb3V0ZSI6Ii8iLCJwb3N0cyI6W3sicG9zdGlkIjoiNjMwNzA0NjQwMTgxMzA1MzQ0IiwiYmxvZ2lkIjo0Nzg2MjQ2NDUsInNvdXJjZSI6MzN9LHsicG9zdGlkIjoiMTg4MDY4MDEyMTU0IiwiYmxvZ2lkIjo0Nzg2MjQ2NDUsInNvdXJjZSI6MzN9LHsicm9vdF9ibG9naWQiOiIxOCIsInJvb3RfcG9zdGlkIjoiNDU5MDA5MDc2IiwicG9zdGlkIjoiMTg4MDY3OTkyNTM0IiwiYmxvZ2lkIjo0Nzg2MjQ2NDUsInNvdXJjZSI6MzN9LHsicm9vdF9ibG9naWQiOiIxOCIsInJvb3RfcG9zdGlkIjoiMjMyIiwicG9zdGlkIjoiMTg4MDY3OTg5NTg5IiwiYmxvZ2lkIjo0Nzg2MjQ2NDUsInNvdXJjZSI6MzN9LHsicm9vdF9ibG9naWQiOiIxODIzMDUiLCJyb290X3Bvc3RpZCI6IjIyODAyMjg0NyIsInBvc3RpZCI6IjE4ODA2Nzk4NjYxNCIsImJsb2dpZCI6NDc4NjI0NjQ1LCJzb3VyY2UiOjMzfSx7InJvb3RfYmxvZ2lkIjoiMTgiLCJyb290X3Bvc3RpZCI6IjIzMyIsInBvc3RpZCI6IjE4ODA2Nzk4MzkyNCIsImJsb2dpZCI6NDc4NjI0NjQ1LCJzb3VyY2UiOjMzfV0sIm5vc2NyaXB0IjoxfQ==&U=ECCJIFCBHN&K=6965dc56161f03f8339b1cb2cbbab67e2c0d046b226c98ba676100a60835a040&R=https%3A%2F%2Fwww.tumblr.com%2F"></noscript><script src="https://assets.tumblr.com/client/prod/standalone/tumblelog/index.build.js?_v=3adb836a96eddc27a1180d62826b0901"></script>

<div id="s-m-t-tooltip" style="position: absolute; display: none;"><div style="width: 100%; height: 100%;"></div></div><div id="xkit-notifications"></div><script nonce="">var add_tag = undefined;
(function() {
	var blogs = [];
	try {
		var models = Tumblr.dashboardControls.allTumblelogs;
		models.filter(function(model) {
			return model.attributes.hasOwnProperty("is_current");
		}).forEach(function(model) {
			blogs.push(model.attributes.name);
		});
	} catch (e) {} finally {
		window.postMessage({
			xkit_blogs: blogs
		}, window.location.protocol + "//" + window.location.host);
	}
})();</script><script nonce="">var add_tag = {};
(function fix_autoplaying_yanked_videos() {

	if (!window._ || !window.jQuery) {
		return;
	}

	if (_.get(window, "Tumblr.Prima.CrtPlayer")) {
		window.Tumblr.Prima.CrtPlayer.prototype.onLoadedMetadata =
		_.wrap(window.Tumblr.Prima.CrtPlayer.prototype.onLoadedMetadata,
			function(wrapped, _event) {
				if (!this.$el.is(":visible") || !jQuery.contains(document, this.$el[0])) {
					if (!this.$el.find('video[src^="blob:"]').length) {
						return true;
					}
				}
				return wrapped.call(this, _event);
			});
	}

	// unfortunately we're not fast enought to catch some
	// CRT instances that are currently instantiated, so handle those differently
	jQuery('video').parent().each(function() {
		this.addEventListener('loadedmetadata', function(event) {
			var $target = jQuery(event.target);
			if (!$target.is(":visible") || !jQuery.contains(document, event.target)) {
				event.stopPropagation();
			}
		}, true); // uses .parent() and capturing to preempt tumblr's js
	});
})();</script><script nonce="">var add_tag = {};
(function fix_jk_scrolling() {
	if (!window._ || !window.jQuery) {
		return;
	}

	if (_.get(window, "Tumblr.KeyCommands.update_post_positions")) {
		Tumblr.KeyCommands.update_post_positions = _.wrap(Tumblr.KeyCommands.update_post_positions,
			function(wrapped, _event) {
				wrapped.call(this);
				this.post_positions = _.pick(this.post_positions,
					function(scroll_pos, element_id) {
						var element = jQuery("[data-pageable='" + element_id + "']");
						return element.is(":visible") && element.height() > 0;
					});
			});
	}
})();</script><script nonce="">var add_tag = {"callback_nonce":0.29259425826628904};
(async ({callback_nonce, args}) => {
	try {
		const return_value = await (async () => {
			if (!window.tumblr) {
				return null;
			}
			const cssMap = await window.tumblr.getCssMap();
			return cssMap;
		})(args);

		window.postMessage({
			xkit_callback_nonce: callback_nonce,
			return_value,
		}, window.location.protocol + "//" + window.location.host);
	} catch (exception) {
		window.postMessage({
			xkit_callback_nonce: callback_nonce,
			exception: JSON.stringify({
				...exception,
				message: exception.message,
				stack: exception.stack,
			}),
		})
	}
})(add_tag)</script><script nonce="">var add_tag = {"callback_nonce":0.5117073209819256};
(async ({callback_nonce, args}) => {
	try {
		const return_value = await (async () => {
			if (!window.tumblr) {
				return null;
			}
			const cssMap = await window.tumblr.getCssMap();
			return cssMap;
		})(args);

		window.postMessage({
			xkit_callback_nonce: callback_nonce,
			return_value,
		}, window.location.protocol + "//" + window.location.host);
	} catch (exception) {
		window.postMessage({
			xkit_callback_nonce: callback_nonce,
			exception: JSON.stringify({
				...exception,
				message: exception.message,
				stack: exception.stack,
			}),
		})
	}
})(add_tag)</script><div id="xpreview-container"><div id="xpreview-notes">♥ 302</div></div><script nonce="">var add_tag = {"callback_nonce":0.5371299095441626};
(async ({callback_nonce, args}) => {
	try {
		const return_value = await (async () => {
			if (!window.tumblr) {
				return null;
			}
			const cssMap = await window.tumblr.getCssMap();
			return cssMap;
		})(args);

		window.postMessage({
			xkit_callback_nonce: callback_nonce,
			return_value,
		}, window.location.protocol + "//" + window.location.host);
	} catch (exception) {
		window.postMessage({
			xkit_callback_nonce: callback_nonce,
			exception: JSON.stringify({
				...exception,
				message: exception.message,
				stack: exception.stack,
			}),
		})
	}
})(add_tag)</script><iframe scrolling="no" width="1" height="1" frameborder="0" style="background-color:transparent; overflow:hidden; position:absolute; top:0; left:0; z-index:9999;" id="ga_target"></iframe><script type="text/javascript">
    (function(){
        var analytics_frame = document.getElementById('ga_target');
        var analytics_iframe_loaded;
        var user_logged_in;
        var blog_is_nsfw = 'No';

        var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        var eventer = window[eventMethod];
        var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
        eventer(messageEvent,function(e) {
            var message = (e.data && e.data.split) ? e.data.split(';') : '';
            switch (message[0]) {
                case 'analytics_iframe_loaded':
                    analytics_iframe_loaded = true;
                    postCSMessage();
                    postGAMessage();
                    break;
                case 'user_logged_in':
                    user_logged_in = message[1];
                    postGAMessage();
                    break;
            }
        }, false);

        analytics_frame.src = "https://assets.tumblr.com/analytics.html?_v=9f5febfd57a8a649c598d888f2d9e062#" +
                              "https://springdoythemes.tumblr.com";
        function postGAMessage() {
            if (analytics_iframe_loaded && user_logged_in) {
                var is_ajax = false;
                analytics_frame.contentWindow.postMessage(['tick_google_analytics', is_ajax, user_logged_in, blog_is_nsfw, '/st.?route=custom_page'].join(';'), analytics_frame.src.split('/analytics.html')[0]);
            }
        }
        function postCSMessage() {
            COMSCORE = true;
            analytics_frame.contentWindow.postMessage('enable_comscore;' + window.location, analytics_frame.src.split('/analytics.html')[0]);
        }
    })();
</script><script type="text/javascript" nonce="TNwqybn0jHlgHsDDQgUQvZdNOsg">!function(s){s.src='https://px.srvcs.tumblr.com/impixu?T=1639017659&J=eyJ0eXBlIjoidXJsIiwidXJsIjoiaHR0cDovL3NwcmluZ2RveXRoZW1lcy50dW1ibHIuY29tL3N0LiIsInJlcXR5cGUiOjAsInJvdXRlIjoiY3VzdG9tX3BhZ2UifQ==&U=FGENIACKCG&K=d92944b7ee5ce6634e4eb360e4f82901d3aa8cfbd52c55d4fa2720ea14bae257&R=https%3A%2F%2Fspringdoy.tumblr.com%2F'.replace(/&R=[^&$]*/,'').concat('&R='+escape(document.referrer)).slice(0,2000).replace(/%.?.?$/,'');}(new Image());</script><noscript><img style="position:absolute;z-index:-3334;top:0px;left:0px;visibility:hidden;" src="https://px.srvcs.tumblr.com/impixu?T=1639017659&J=eyJ0eXBlIjoidXJsIiwidXJsIjoiaHR0cDovL3NwcmluZ2RveXRoZW1lcy50dW1ibHIuY29tL3N0LiIsInJlcXR5cGUiOjAsInJvdXRlIjoiY3VzdG9tX3BhZ2UiLCJub3NjcmlwdCI6MX0=&U=FGENIACKCG&K=8dccf2e71272a64148e3f9ac81533a9e4a3dd80bd68454ed681738e19a5830da&R=https%3A%2F%2Fspringdoy.tumblr.com%2F">
