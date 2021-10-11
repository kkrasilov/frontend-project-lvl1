import _ from 'lodash';
import run from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const divisors = (number) => {
  const divisorsNumber = [];
  for (let i = 0; i <= number; i += 1) {
    if (number % i === 0) {
      divisorsNumber.push(i);
    }
  }

  return divisorsNumber;
};

const greatestCommonFactor = (number1, number2) => {
  const overallDivisors = _.intersectionWith(divisors(number1), divisors(number2), _.isEqual);
  return _.max(overallDivisors);
};

const questionAndAnswer = () => {
  const number1 = _.random(100);
  const number2 = _.random(100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(greatestCommonFactor(number1, number2));
  return { question, correctAnswer };
};

export default () => run(rules, questionAndAnswer);
