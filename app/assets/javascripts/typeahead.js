$(document).ready(function() {
  $('#search_bar').keyup(function(e) {
    $("#foo").remove()
    var query = e.target.value
    $.getJSON( "typeahead", { query: query }).done(function( data ) {
      var items = [];
      data.forEach(function(article) {
        console.log(article);
        items.push( "<li id='" + article.id  + "'>" + article.title + "</li>" );
      });

      $( "<ul/>", {
        "class": "my-new-list",
        "id": "foo",
        html: items.join( "" )
      }).appendTo( "#results" );
    });
  });
});

console.log("hello");
