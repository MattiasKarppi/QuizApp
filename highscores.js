const highScoresList = document.getElementById("highScoresList");
const sportsScores = JSON.parse(localStorage.getItem("highScores_sports")) || [];
const animalsScores = JSON.parse(localStorage.getItem("highScores_animals")) || [];

const createScoreList = (scores, title) => {
  return `<h2>${title}</h2>` +
    scores.map(score => {
      const timeInSeconds = Math.floor(score.time / 1000);
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      const timeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      return `<li class="high-score">${score.name} - ${score.score} (Time: ${timeFormatted})</li>`;
    }).join("");
};

highScoresList.innerHTML = `
  ${createScoreList(sportsScores, 'Sports Quiz')}
  ${createScoreList(animalsScores, 'Animals Quiz')}
`;
