const username = document.getElementById("username");
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const timeTaken = localStorage.getItem('timeTaken');
const quizType = localStorage.getItem('quizType');
finalScore.innerText = `Score: ${mostRecentScore}`;

const highScoresKey = `highScores_${quizType}`;
const highScores = JSON.parse(localStorage.getItem(highScoresKey)) || [];

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

  localStorage.setItem(highScoresKey, JSON.stringify(highScores));
  window.location.assign("/highscore.html");
};

document.getElementById('saveScoreForm').addEventListener('submit', saveHighScore);
