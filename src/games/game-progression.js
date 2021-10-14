import _ from 'lodash';
import run from '../index.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const createProgression = (firstNumber, step) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push((step * i) + firstNumber);
  }

  return progression;
};

const questionAndAnswer = () => {
  const progressionFirstNumber = _.random(100);
  const progressionStep = _.random(100);
  const progression = createProgression(progressionFirstNumber, progressionStep);
  const indexToHide = _.random(progressionLength - 1);
  progression[indexToHide] = '..';
  const question = `${progression.join(' ')}`;
  const correctAnswer = String(progression[indexToHide]);

  return { question, correctAnswer };
};

export default () => run(rules, questionAndAnswer);
