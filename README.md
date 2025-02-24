# programming-hero-workshop-task explain
1. Start Game:
Goal: Begin a new game session.
      When: The game starts when the user clicks the "Start Game" button on index.html, which redirects them to 2nd_page.html.
      How: The 2nd_page.html page loads, and the game initializes with:
          A default number of 10 hearts (lives).
          A starting point of 0.
          A final level set to 1.
       A random number between 0 and 10 (can increase based on the level).
      Interaction: The user is asked to guess a number within the specified range. They will enter their guess in an input box, and upon clicking "Check", the game checks if 
      the guess is correct.
2. Game Operation:
  Guessing Logic:
  When the user enters a number and clicks "Check":
  
  The entered guess is compared to a randomly generated number.
   Correct Guess:
      If the guess is correct, the user moves up a level:
      The level increases by 1.
      The maximum number range for guessing also increases by a factor of 10.
      The points increase by 100 for each correct guess.
      The heart count resets to 10.
      The chosen numbers are cleared.
      A new random number is generated within the updated range.
  Incorrect Guess:
      If the guess is incorrect, the heart count decreases by 1.
      If the guess is too high, the system instructs the user to guess a lower number.
      If the guess is too low, the system instructs the user to guess a higher number.
      If the heart count reaches 0, the game restarts (game over).
  Updating Chosen Numbers:
      After each guess, the game stores the guessed number in the chosenNumbers array and displays it on the screen. This helps the player track their previous guesses.
Game Over:
      If the player runs out of hearts (i.e., makes too many incorrect guesses), the game resets:
      The heart count, point, level, and other settings are reset to their initial values.
      The user is informed that the game has restarted after a short delay.
      The user can either start over or quit by clicking the "Quit Game" button, which redirects them to the index.html page.
3. Quit Game:
      Goal: Allow the user to quit the game and return to the home page (index.html).
      When: The user clicks the "Quit Game" button, which has a link that navigates back to the index.html page.
      How: This navigation to the home page does not affect the game state on the 2nd_page.html, meaning it effectively ends the session. The user can start a new game from 
      index.html.
