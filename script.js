$(function() {
  
    $("#h1").css('color','blue');
    $("h2").css('color','blue');
    $("a img").hover(function(){
      $(this).hidden(1000);
    });

    $('#title').hover(function(){
		$(this).animate({'marginleft':'800px'},2000);
	});

});
