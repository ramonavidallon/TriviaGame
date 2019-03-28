$(document).ready(function () {
    //QUESTIONS FOR THE QUIZ//
    var questions = [{
        question: "Who's nickname was 'The Kid' during his career in Seattle?",
        answerChoices: ["Russell Wilson", "Ken Griffey Jr.", "Gary Peyton", "Casey Keller"],
        realAnswer: "Ken Griffey Jr."
    }, {
        question: "How many Super Bowl appearances do the Seahawks?",
        answerChoices: ["5", "0", "1", "3"],
        realAnswer: "3"
    }, {
        question: "The Mariners set the record for most wins in a regular season in 2001. How many wins did they end with?",
        answerChoices: ["99", "162", "116", "100"],
        realAnswer: "116"
    }, {
        question: "What was the last year for the SuperSonic franshise?",
        answerChoices: ["2008", "2000", "2006", "2003"],
        realAnswer: "2008"
    }, {
        question: "Which one of the following stadium names isn't a Seattle Stadium?",
        answerChoices: ["Safeco Field", "Kingdome", "T-Mobile Park", "Amazon Park"],
        realAnswer: "Amazon Park"
    }, {
        question: "Which Professional team fanbase in Seattle has the nickname 'The 12th Man'?",
        answerChoices: ["Sounders", "Seahawks", "Storm", "Huskies"],
        realAnswer: "Seahawks"
    }];

    var quiz = $("#quiz");
    var timer;
    var gamePlay = {
        correct: 0,
        incorrect: 0,
        counter: 180,
    }

    function start() {
      timer = setInterval(gamePlay.countdown, 1000);

      $("#scoreboard").prepend("<h1>Time Remaining: <span id='time-remaining'><div id='sonics'>180</span> Seconds</div></h1>");

      $(".btn").remove();

      //FOR LOOP TO DISPLAY QUESTION//
      for (var i = 0; i < questions.length; i++) {
          quiz.append("<h2>" + questions[i].question + "</h2>");
          //FOR LOOP TO DISPLAY POSSIBLE ANSWERS//
          for (var j = 0; j < questions[i].answerChoices.length; j++) {
              quiz.append("<input type='radio' name='question- " + [i] + "' value='" + questions[i].answerChoices[j] + " '>'" + questions[i].answerChoices[j]);
          }
      }

      quiz.append("<button id='#complete'>SEE SCORE!</button>");
  }

        //ON CLICK FUNCTION TO START GAME//
        $(".btn").on("click", start),

        function countdown() {
            gamePlay.counter--;
            $("#time-remaining").html(gamePlay.counter);
            if (gamePlay.counter === 0) {
                gamePlay.done();
            }
        },

        //ON CLICK EVENT FOR THE "SEE SCORE" BUTTON//
        $("#complete").on("click", function () {
            gamePlay.done();
        }),

        //FUNCTION TO DETERMINE IF USER CHOSE CORRECT OR INCORRECT ANSWER//
            function done() {
                $.each($("input[name='question-0']:checked"), function() {
                    if ($(this).val() === questions[0].realAnswer) {
                      gamePlay.correct++;
                    }
                    else {
                      gamePlay.incorrect++;
                    }
                  });
                $.each($("input[name='question-1']:checked"), function() {
                    if ($(this).val() === questions[1].realAnswer) {
                      gamePlay.correct++;
                    }
                    else {
                      gamePlay.incorrect++;
                    }
                  });
                $.each($("input[name='question-2']:checked"), function() {
                    if ($(this).val() === questions[2].realAnswer) {
                      gamePlay.correct++;
                    }
                    else {
                      gamePlay.incorrect++;
                    }
                  });
                $.each($("input[name='question-3']:checked"), function() {
                    if ($(this).val() === questions[3].realAnswer) {
                      gamePlay.correct++;
                    }
                    else {
                      gamePlay.incorrect++;
                    }
                  });
                $.each($("input[name='question-4']:checked"), function() {
                    if ($(this).val() === questions[4].realAnswer) {
                      gamePlay.correct++;
                    }
                    else {
                      gamePlay.incorrect++;
                    }
                  });
                $.each($("input[name='question-5']:checked"), function() {
                    if ($(this).val() === questions[5].realAnswer) {
                      gamePlay.correct++;
                    }
                    else {
                      gamePlay.incorrect++;
                    }
                  });

                this.result();
            }

            // function result? This is psuedocode to show you my walk through to complete the code for this trivia game//
            // (In this function i would clear the time by coding: clearInterval(timer);)//
            // I would then remove the #scoreboard causing new information to load onto the window by coding: $("#scoreboard").remove();//
                //quiz.html("<h2>You have completed the quiz!</h2>");
                //quiz.append("<h3>Right Answers: " + this.correct + "</h3>");
                //quiz.append("<h3>Wrong Answers: " + this.incorrect + "</h3>");
                //creating a 'play again' <button> that would reload the original screen would be appropriate at this portion of my code//
            
            
});       


