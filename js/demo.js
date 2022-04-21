/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


// jQuery plugin example:
$(document).ready(function() {
  $.ajax({
    url: "https://api.github.com/users/alpertayfun",
    jsonp: true,
    method: "GET",
    dataType: "json",
    success: function(res) {
      console.log(Object.keys(res));
      console.log(res);
      $("#name").html(res.name);
      $("#bio").html(res.bio);
    }
  });
});
