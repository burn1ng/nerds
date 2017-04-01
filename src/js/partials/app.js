// var googleMapScript = document.createElement("script");

// googleMapScript.src = "https://maps.googleapis.com/maps/api/js";
// //googleMapScript.async = true; //asynchronous
// document.getElementsByTagName("head")[0].appendChild(googleMapScript);

google.maps.event.addDomListener(window, 'load', init);
        
function init() {
    var mapOptions = {
        zoom: 17,
        scrollwheel: false,
        center: new google.maps.LatLng(53.9492715,27.6808287),
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
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
 	var gimage = 'img/map-baloon.png';
	
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(53.948415,27.682158),
        map: map,
		icon: gimage,
        title: 'Тут наш офис'					
    });
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

	$rangeField.on("keyup", function( event ) {
		var selection = window.getSelection().toString();
	    if ( selection !== '' ) {
	        return;
	    }
	    if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
	        return;
	    }

		var $this = $( this );
		var input = $this.val();

		// 2
		var input = input.replace(/[\D\s\._\-]+/g, "");

		// 3
		input = input ? parseInt( input, 10 ) : 0;

		// 4
		$this.val( function() {
			return ( input === 0 ) ? "" : input.toLocaleString( "ru-RU" );
		});
	});


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


});