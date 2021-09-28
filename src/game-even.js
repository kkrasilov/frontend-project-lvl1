import _ from 'lodash';
import readlineSync from 'readline-sync';

const game = (gameSteps, userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < gameSteps; i += 1) {
    const number = _.random(100);
    const definition = number % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === definition) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${definition}'. \nLet's try again, ${userName}!`,
      );
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export { game as default };
