const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML =
  highScores.map(score => {
    const timeInSeconds = Math.floor(score.time / 1000);
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const timeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    return `<li class="high-score">${score.name} - ${score.score} (Time: ${timeFormatted})</li>`;
  })
  .join("");
