$(document).ready(function() {

  for(var i = 0; i < 36; i++) {
    $('tr#player1_strip').append('<td></td>');
    $('tr#player2_strip').append('<td></td>');
    $('tr#player3_strip').append('<td></td>');
    $('tr#player4_strip').append('<td></td>');
  };

  $(document).keyup(function(event) {
    var key = event.which;
    acceptKeyToMove(key);
  });

});


acceptKeyToMove = function(key) {
  switch(key)
    {
    case 192: //RED BIKE
      $('#player1_strip > td.active').removeClass('active').next().addClass('active');
      break;
    case 90: //BLUE BIKE
      $('#player2_strip > td.active').removeClass('active').next().addClass('active');
      break;
    case 220: //GREEN BIKE
      $('#player3_strip > td.active').removeClass('active').next().addClass('active');
      break;
    case 191: //PINK BIKE
      $('#player4_strip > td.active').removeClass('active').next().addClass('active');
      break;
    default:
      break;
  }
};

