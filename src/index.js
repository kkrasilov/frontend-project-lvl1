import readlineSync from 'readline-sync';
import greeting from './cli.js';

const run = (rules, questionAndAnswer) => {
  const gameSteps = 3;
  const userName = greeting();
  console.log(rules);

  for (let i = 0; i < gameSteps; i += 1) {
    const { question, correctAnswer } = questionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`,
      );
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export { run as default };
