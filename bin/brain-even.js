#!/usr/bin/env node
import greeting from '../src/cli.js';
import game from '../src/game-even.js';

const userName = greeting();

game(3, userName);
