// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  $.get('games', function(result) {
    $('#result').text(JSON.stringify(result, undefined, 4));
  });
 
  $('form').submit(function(event) {
    event.preventDefault();
    $.get($('input').val() || 'games', function(result) {
      $('#result').text(JSON.stringify(result, undefined, 4));
    });
  });

});
