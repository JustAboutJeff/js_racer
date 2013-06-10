$(document).ready(acceptKeyToMove);

function gameOver() {
  return $('tr.strip td:last-child').hasClass('active');
}

function buildTrack(size) {
  for(var i = 0; i < size; i++) {
    $('tr.strip').append('<td></td>');
  }
}

function acceptKeyToMove() {
  buildTrack(35);
  $(document).keyup(function(event) {
    if (gameOver()) {
      $(document).unbind('keyup');
      var playAgain = confirm("GAME OVER! PLAY AGAIN?");
      if (playAgain) { location.reload(); }
    }
    else {
      event.preventDefault();
      var key = event.which;
        switch(key) {
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
    }
  });
}

