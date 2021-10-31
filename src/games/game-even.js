import _ from 'lodash';
import run from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const questionAndAnswer = () => {
  const number = _.random(100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => run(rules, questionAndAnswer);
