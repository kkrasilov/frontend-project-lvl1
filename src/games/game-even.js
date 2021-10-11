import _ from 'lodash';
import run from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionAndAnswer = () => {
  const question = _.random(100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => run(rules, questionAndAnswer);
