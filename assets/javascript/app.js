$(document).ready(function() {

  
  //VARIABLES USED FOR PAGE//
  var timeLeft = 180;
  var timer;
  var rightAnswers = 0;
  var wrongAnswers= 0;
  
  //THE PAGE WILL LOAD THE START BUTTON BUT WILL HIDE THE TIME/THE QUESTIONS/THE SCOREBOARD//
  
  $('#timeClock').hide();
  $('.questions').hide();
  $('.scoreboard').hide();
  
  //FUNCTION TO LOAD QUIZ//
  function revealGame() {
  $('#timeClock').show();
  $('.questions').show();
  $('#done-button').show();
  }

  function countdown() {
    timer = setInterval(countDown, 1000);
  }

  function countDown() {
    timeLeft--;
    $('#timer').html(timeLeft + ' seconds');
  if (timeLeft === 0) {
      stopTimer();
      hide();
      displayOverview();
    }
  }
  //FUNCTION TO CLEAR THE TIMER ON PAGE//
  function stopTimer() {
    clearInterval(timer);
  }

  //FUNCTION TO HIDE THE QUIZ ONCE ALL QUESTIONS ARE ANSWERED AND THE 'I'M DONE' IS CLICKED//
  function hide() {
    $('.scoreboard').hide();
    $('.questions').hide();
    $('#done-button').hide();
  }

  function displayOverview() {
    $('.scoreboard').show();
    $('#answersRight').text('Right Answers: ' + rightAnswers);
    $('#answersWrong').text('Wrong Answers: ' + wrongAnswers);
  }

  //ON CLICK FUNCTION FOR BUTTONS ON PAGE//

  //ON CLICK START//
  $('#start-button').on('click', function() {
    $('#start-button').hide();
    countdown();
    revealGame();
  });

  //ON CLICK DONE//
  $('#done-button').on('click', function() {
    $('#done-button').hide();
    $('#timeClock').hide();
    hide();
    displayOverview();
  });

  //POSSIBLE ANSWER BUTTONS//
  $('input[type=radio]').on('change', function() {
    rightAnswers = $('input[value=correct]:checked').length;
    wrongAnswers = $('input[value=wrong]:checked').length;
  });




  
});