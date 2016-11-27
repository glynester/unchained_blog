$(document).ready(function(){

  // var text = $( ".post_text").css( "border", "3px double red" );
  // var text_length = $( ".post_text").text().length;
  // console.log(text_length)
  var teaser = "";
  var remainder = "";
  var full = "";
  var prevLength = "20";
  var text = "";
  // var itemLength
  $( ".post_text").each(function(index){
    console.log( index + ": " + $( this ).text().length)
    itemLength = $(this).text().length
    teaser = $(this).text().substring(0,prevLength);
    remainder = $(this).text().substring(prevLength,$(this).text().length);
    full = $(this).text();
    text = $(this);
    if (itemLength > prevLength - 3) {
      teaser = $(this).text().substring(0,prevLength);
      $(this).text("");
      $(this).append("<span class='more'>" + teaser + "</span>");
      $(this).append("<span class='remainder' style = 'display: none'>" + remainder + "</span>");
      } else {
      teaser = full;
    }

    console.log(teaser);

  })

  $(".post_text").click(function() {
    // alert($(this).text())     //This works!!!
    // alert($(this).children(".remainder").text())   //This works!!!
    $(this).children(".remainder").toggle();

  });

});
