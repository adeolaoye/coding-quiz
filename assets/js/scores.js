// Sort the previous scores in order by retrieving scores from localStorage

function displayHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
    highscores.forEach(function(score) {
      var listTag = document.createElement("li");
      listTag.textContent = score.name + " - " + score.score;
      var ol = document.getElementById("highscores");
      ol.appendChild(listTag);
    });
}

// Remove previous scores when users click clear 
  function removeHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  } document.getElementById("clear").onclick = removeHighscores;
  
displayHighscores();