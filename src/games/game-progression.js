import _ from 'lodash';
import run from '../index.js';

const rules = 'What number is missing in the progression?';

const arithmeticProgression = (firstNumber, differenceProgression) => {
  const lengthProgression = 9;
  let currentElemetProgression = firstNumber;
  const progression = [firstNumber];

  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(currentElemetProgression += differenceProgression);
  }

  return progression;
};

const questionAndAnswer = () => {
  const firstNumber = _.random(100);
  const differenceProgression = _.random(100);
  const randomElemet = _.random(9);
  const progression = arithmeticProgression(firstNumber, differenceProgression);
  const correctAnswer = String(progression[randomElemet]);
  progression[randomElemet] = '..';
  const question = `${progression.join(' ')}`;

  return { question, correctAnswer };
};

export default () => run(rules, questionAndAnswer);
