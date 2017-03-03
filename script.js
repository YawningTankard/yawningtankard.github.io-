$(window).load( function() {
	checkVis("factsheet");
	checkVis("description");
	checkVis("history");
	checkVis("projects");
	checkVis("trailers");
	checkVis("images");
	checkVis("logo");
	checkVis("awards");
	checkVis("quotes");
	checkVis("credits");
	checkVis("contact");
} );

$(window).scroll( function() {
	checkVis("factsheet");
	checkVis("description");
	checkVis("history");
	checkVis("projects");
	checkVis("trailers");
	checkVis("images");
	checkVis("logo");
	checkVis("awards");
	checkVis("quotes");
	checkVis("credits");
	checkVis("contact");
} );

function checkVis(elem)	{
	if( isVis( "#"+elem ) ) $("#m-"+elem).css("color","#FFF"); else $("#m-"+elem).css("color","#666");
}

function isVis(elem){
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ( (elemBottom >= docViewTop && elemBottom <= docViewBottom) || (elemTop <= docViewBottom && elemTop >= docViewTop) || (elemTop <= docViewTop && elemBottom >= docViewBottom) );
}
