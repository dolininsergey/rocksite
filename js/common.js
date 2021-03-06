$(function() {

		$('#musician-1 .member-description').hover(function() {
				$('#musician-1 .mem-socials').css('display', 'block');
		}, function() {
				$('#musician-1 .mem-socials').css('display', 'none');
		});

		$('#musician-2 .member-description').hover(function() {
				$('#musician-2 .mem-socials').css('display', 'block');
		}, function() {
				$('#musician-2 .mem-socials').css('display', 'none');
		});

		$('#musician-3 .member-description').hover(function() {
				$('#musician-3 .mem-socials').css('display', 'block');
		}, function() {
				$('#musician-3 .mem-socials').css('display', 'none');
		});			



	  // Audio Player
      var myPlaylist = [{
        mp3:'../libs/audio-player/mix/audio/GreyMonday.mp3',
        title:'Grey Monday',
        artist:'Imany',
        rating: 4,
        duration:'00:03:13',
        cover:'../libs/audio-player/mix/covers/album.jpg'
    	},
    	{
        mp3:'../libs/audio-player/mix/audio/TakeCare.mp3',
        title:'Take Care',
        artist:'Imany',
        rating: 4,
        duration:'00:03:04',
        cover:'../libs/audio-player/mix/covers/album.jpg'    		
    	},
    	{
        mp3:'../libs/audio-player/mix/audio/ILostMyKeys.mp3',
        title:'I Lost My Keys',
        artist:'Imany',
        rating: 4,
        duration:'00:04:29',
        cover:'../libs/audio-player/mix/covers/album.jpg'    		
    	},
    	{
        mp3:'../libs/audio-player/mix/audio/PleaseAndChange.mp3',
        title:'Please And Change',
        artist:'Imany',
        rating: 4,
        duration:'00:03:10',
        cover:'../libs/audio-player/mix/covers/album.jpg'    		
    	},  
    	{
        mp3:'../libs/audio-player/mix/audio/PrayerInC.mp3',
        title:'Prayer in C',
        artist:'Moody',
        rating: 4,
        duration:'00:03:13',
        cover:'../libs/audio-player/mix/covers/album.jpg'    		
    	},
    	{
        mp3:'../libs/audio-player/mix/audio/PrayForHelp.mp3',
        title:'Pray For Help',
        artist:'Imany',
        rating: 4,
        duration:'00:03:12',
        cover:'../libs/audio-player/mix/covers/album.jpg'    		
    	}, 
    	{
        mp3:'../libs/audio-player/mix/audio/SeatWithMe.mp3',
        title:'Seat With Me',
        artist:'Imany',
        rating: 4,
        duration:'00:04:27',
        cover:'../libs/audio-player/mix/covers/album.jpg'    		
    	},
    	{
        mp3:'../libs/audio-player/mix/audio/SlowDown.mp3',
        title:'Slow Down',
        artist:'Imany',
        rating: 4,
        duration:'00:04:13',
        cover:'../libs/audio-player/mix/covers/album.jpg'    		
    	}, 	
    	{
        mp3:'../libs/audio-player/mix/audio/WhereHaveYouBeen.mp3',
        title:'Where Have You Been',
        artist:'Imany',
        rating: 4,
        duration:'00:04:15',
        cover:'../libs/audio-player/mix/covers/album.jpg'    		
    	},
];

      $('.songs-block').ttwMusicPlayer(myPlaylist, {
        autoPlay:false, 
        jPlayer:{
            swfPath:'../libs/audio-player/plugin/jquery-jplayer/' //You need to override the default swf path any time the directory structure changes
        }
      });
			
			//preloader is here
			// $('.preloader').fadeOut();


});
