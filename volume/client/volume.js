if (Meteor.is_client) {
	
	// fade item visibility
	var fadeOutItems = function (selector) {
	    $(selector).each(function() { 
	        var item = $(this); 
					if (item) {
						item.fadeTo("slow", 0);
					}
	    });
	}

	var fadeInItems = function (selector) {	
	    $(selector).each(function() { 
	        var item = $(this); 
					if (item) {
						item.fadeTo("slow", 1);
					}
	    });
	}

	Meteor.startup(function () {
		// run scrolling
		$.stellar({
		    // Set scrolling to be in either one or both directions
		    horizontalScrolling: true,
		    verticalScrolling: false	
		});
	
		// play audio
		// TODO - make ogg
		var mySound = new buzz.sound("sounds/koko.mp3", {
		    preload: true,
		    autoplay: true,
		    loop: false
		});

		// audio event handlers - 	// sound.getVolume()
		$("#pause-audio").click(function() {
			var text = 'pause';
			mySound.togglePlay();
			updateAudioUI();
		});
	
		$("#up-audio").click(function() {
			mySound.increaseVolume(10);
      if (mySound.getVolume() > 80) {
        fadeOutItems(".blue");
      }  
		});

		$("#down-audio").click(function() {
			mySound.decreaseVolume(10);
		});
	
		var updateAudioUI = function () {
			if (mySound.isPaused()) {
				text = 'play';
			} else {
				text = 'pause';			
			}
			$('#pause-audio').html(text);
		}

		// call initially to set correct state for play button
		updateAudioUI();

    });	
}
