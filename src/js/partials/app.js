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


});