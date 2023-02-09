const currentYear = 2023;
const correctAnswer = 'Your answer is correct! Congratulations!';
const unCorrectAnswer = "Your answer isn't correct. I'm sorry";

const inuptAnswer = document.querySelector('.answer-input');
const btn = document.querySelector('.btn-send-answer');
const outputResult = document.querySelector('.outputRes');

btn.addEventListener('click', function () {
  const inuptValue = inuptAnswer.value;
  if (!inuptValue) {
    return;
  }

  const answer = Number(inuptAnswer.value);
  let output = correctAnswer;

  if (answer !== currentYear) {
    output = unCorrectAnswer;
  }
  outputResult.innerHTML = output;
});
