import _ from 'lodash';
import run from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const IsPrime = (number) => {
  if (number <= 1) { return false; }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) { return false; }
  }

  return true;
};

const questionAndAnswer = () => {
  const question = _.random(100);
  const correctAnswer = IsPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => run(rules, questionAndAnswer);
