const username = document.getElementById("username");
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const timeTaken = localStorage.getItem('timeTaken');
finalScore.innerText = `Score: ${mostRecentScore}`;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 10;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: parseInt(mostRecentScore),
    name: username.value,
    time: parseInt(timeTaken)
  };

  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(MAX_HIGH_SCORES);

  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.assign("/highscore.html");
};

document.getElementById('saveScoreForm').addEventListener('submit', saveHighScore);
