// var googleMapScript = document.createElement("script");

// googleMapScript.src = "https://maps.googleapis.com/maps/api/js";
// //googleMapScript.async = true; //asynchronous
// document.getElementsByTagName("head")[0].appendChild(googleMapScript);

google.maps.event.addDomListener(window, 'load', init);


function init() {
	var mapElement = document.getElementById('map');
	var mapElementMob = document.getElementById('map-mobile');

	var myLatLng = new google.maps.LatLng(53.948602, 27.682395);
	var myLatLngCenter = new google.maps.LatLng(53.948628, 27.679198);

    var mapOptions = {
        zoom: 17,
        scrollwheel: false,
        center: myLatLngCenter,
        styles: 
        	[{"featureType":"landscape",
        	"elementType":"labels",
        	"stylers":[{"visibility":"off"}]},

        	{"featureType":"transit",
        	"elementType":"labels",
        	"stylers":[{"visibility":"off"}]},

        	{"featureType":"poi",
        	"elementType":"labels",
        	"stylers":[{"visibility":"off"}]},

        	{"featureType":"water",
        	"elementType":"labels",
        	"stylers":[{"visibility":"off"}]},

        	{"featureType":"road",
        	"elementType":"labels.icon",
        	"stylers":[{"visibility":"off"}]},

        	{"stylers":
        	[{"hue":"#00aaff"},
        	{"saturation":-100},
        	{"gamma":2.15},
        	{"lightness":12}]},

        	{"featureType":"road",
        	"elementType":"labels.text.fill",
        	"stylers":[{"visibility":"on"},{"lightness":24}]},

        	{"featureType":"road",
        	"elementType":"geometry",
        	"stylers":[{"lightness":57}]}]
    };

    var mapOptionsMob = {
    	zoom: 15,
        scrollwheel: false,
        center: myLatLng

    	};

    var map = new google.maps.Map(mapElement, mapOptions);
    var mapMob =  new google.maps.Map(mapElementMob, mapOptionsMob);

 	var infowindow = new google.maps.InfoWindow({
      content: "<B>Заблудились? Вход к нам со стороны внутреннего двора, после арки - направо</B>"
  	});
	

	var myMarkerImage = {
	  url: 'img/map-baloon.png',
	  size: new google.maps.Size(231, 190),
	  origin: new google.maps.Point(0, 0)
	  //anchor: new google.maps.Point(17, 34),
	  //scaledSize: new google.maps.Size(25, 25)
	};

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
		icon: myMarkerImage			
    });  
    var markerMob = new google.maps.Marker({
    	position: myLatLng,
    	map: mapMob
    }); 

    google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map,marker);
	}); 
	google.maps.event.addListener(markerMob, 'click', function() {
    	infowindow.open(mapMob,markerMob);
	});
}



function stickyNav(){
	if ( $(window).scrollTop() > 200 ) { 
	    $('.navigation-bar').addClass('sticky');
	    $('section-header').css('padding-top', '141px');
	} else {
	    $('.navigation-bar').removeClass('sticky'); 
	   $('section-header').css('padding-top', '0');
	}
}

$(document).ready(function(){

	// range slider
	var $range = $("#range-input");
	var $rangeFromField = $("#rangeFrom");
	var $rangeToField = $("#rangeTo");

	var $rangeField = $(".price-range");

	$range.ionRangeSlider({
		type: "double",
		grid: false,
		hide_min_max: true,
		hide_from_to: true,
	    min: 0,
	    max: 25000,
	    from: 0,
	    to: 15000
	});

	var $rangeData = $range.data("ionRangeSlider");

	$range.on("change", function() {
		var $this = $(this),
			value = $this.prop("value").split(";");
		$rangeFromField.val(value[0]);
		$rangeToField.val(value[1]);
	});

	$rangeFromField.on("change", function() {
		var $this = $(this);
		$rangeData.update({
			from: $this.val()
		});
	});

	$rangeToField.on("change", function() {
		var $this = $(this);
		$rangeData.update({
			to: $this.val()
		});
	});

	// $rangeField.on("keyup", function( event ) {
	// 	var selection = window.getSelection().toString();
	//     if ( selection !== '' ) {
	//         return;
	//     }
	//     if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
	//         return;
	//     }

	// 	var $this = $( this );
	// 	var input = $this.val();

	// 	// 2
	// 	var input = input.replace(/[\D\s\._\-]+/g, "");

	// 	// 3
	// 	input = input ? parseInt( input, 10 ) : 0;

	// 	// 4
	// 	$this.val( function() {
	// 		return ( input === 0 ) ? "" : input.toLocaleString( "ru-RU" );
	// 	});
	// });

 //pagination

	$(".shop-pagination-box:first").next().addClass('active');  		//default active- 1st page

	$('.shop-pagination').find('.shop-pagination-box:not(:first):not(:last)').click(function(e) {
			e.preventDefault();
			$(this).parent().children().removeClass('active');
			$(this).addClass('active');
	});

	$(".btn-next").click(function(e) {
		e.preventDefault();
		var activeItem = $(".shop-pagination-box.active");
		var nextItem = activeItem.next();
		activeItem.removeClass("active");

		if ( nextItem.next().length == 0 || nextItem.length == 0 ) {
			nextItem = $(".shop-pagination-box:first").next();
		}

		nextItem.addClass("active");
	});

	$(".btn-prev").click(function(e) {
		e.preventDefault();
		var activeItem = $(".shop-pagination-box.active");
		var prevItem = activeItem.prev();
		activeItem.removeClass("active");

		if ( prevItem.prev().length == 0 || prevItem.length == 0 ) {
			prevItem = $(".shop-pagination-box:last").prev();
		}

		prevItem.addClass("active");
	});


	// sticky header on desktop
	 
	stickyNav();
	 
	$(window).scroll(function() {
	  stickyNav();
	});

	//mobile nav fixed header

	$(".burger-menu").on("click", function() {
		var $this = $(this);
		$this.toggleClass("change"); //rotate sticks in burger-icon
	});


	var slideout = new Slideout({ //mobile slideout start 
	    'panel': document.getElementById('layout-wrapper'),
	    'menu': document.getElementById('layout-slideout'),
	    'padding': 256,
	    'tolerance': 70
  	});


	// open or close slideout, when burger is clicked
  	$(".burger-menu").click(function() {
  		slideout.toggle();
  	});

  	// change burger icon, when slideout open or close by touch
	slideout.on('open', function () {
  		$(".burger-menu").addClass("change");
  	});
  	slideout.on('close', function () {
  		$(".burger-menu").removeClass("change");
  	});


	function close(eve) {
	  eve.preventDefault();
	  slideout.close();
	}

	slideout
	  .on('beforeopen', function() {
	    this.panel.classList.add('panel-open');
	  })
	  .on('open', function() {
	    this.panel.addEventListener('click', close);
	  })
	  .on('beforeclose', function() {
	    this.panel.classList.remove('panel-open');
	    this.panel.removeEventListener('click', close);
	  });


	//correctly push fixed sidebar
  	var fixed = document.querySelector('.mobile-nav');

	slideout.on('translate', function(translated) {
	  fixed.style.transform = 'translateX(' + translated + 'px)';
	});

	slideout.on('beforeopen', function () {
	  fixed.style.transition = 'transform 300ms ease';
	  fixed.style.transform = 'translateX(256px)';
	});

	slideout.on('beforeclose', function () {
	  fixed.style.transition = 'transform 300ms ease';
	  fixed.style.transform = 'translateX(0px)';
	});

	slideout.on('open', function () {
	  fixed.style.transition = '';
	});

	slideout.on('close', function () {
	  fixed.style.transition = '';
	});

});