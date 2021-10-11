import _ from 'lodash';
import run from '../index.js';

const rules = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return console.log('Operator not found :(');
  }
};

const questionAndAnswer = () => {
  const number1 = _.random(100);
  const number2 = _.random(100);
  const operator = _.sample(['+', '-', '*']);
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operator));
  return { question, correctAnswer };
};

export default () => run(rules, questionAndAnswer);
