# Brain games

[![Actions Status](https://github.com/kkrasilov/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/kkrasilov/frontend-project-lvl1/actions) 
![example workflow](https://github.com/kkrasilov/frontend-project-lvl1/workflows/lint/badge.svg) 
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/kkrasilov/frontend-project-lvl1)

## Установка

Для корректной работы приложения на Вашем компьютере должен быть установлен `Node JS v14.17.6` 
[(download Node JS)](https://nodejs.org/en/download/)

```
$ git clone https://github.com/kkrasilov/frontend-project-lvl1.git
$ cd ./frontend-project-lvl1
$ make install
```

### Игра: «Проверка на чётность»

Пользователю показывается случайное число. Нужно ответить `yes`, если число чётное, или `no` — если 
нечётное.

Запуск игры:
```
$ make brain-even
```

[![asciicast](https://asciinema.org/a/fCdme2UKxDDjofXKkDHDWEOeM.svg)](https://asciinema.org/a/fCdme2UKxDDjofXKkDHDWEOeM)

### Игра: «Калькулятор»

Пользователю показывается случайное математическое выражение, например `35 + 16`, которое нужно вычислить и записать 
правильный ответ.

Запуск игры:
```
$ make brain-calc
```
[![asciicast](https://asciinema.org/a/9OS11JtxOCOovha7liGpfLZeV.svg)](https://asciinema.org/a/9OS11JtxOCOovha7liGpfLZeV)

### Игра: «НОД»

Пользователю показывается два случайных числа, например, `25 50`. Пользователь должен вычислить и ввести наибольший общий 
делитель этих чисел.

Запуск игры:

```
$ make brain-gcd
```
[![asciicast](https://asciinema.org/a/4YNaGgaU9bsi8x4HQCGoMH9Q1.svg)](https://asciinema.org/a/4YNaGgaU9bsi8x4HQCGoMH9Q1)

### Игра: «Арифметическая прогрессия»

Пользователю показывается арифметическая прогрессия, в которой одно число спрятано. Игрок должен определить это число.

Запуск игры:

```
$ make brain-progression
```
[![asciicast](https://asciinema.org/a/EfjBddltbaYnakDUuoEHvYzqt.svg)](https://asciinema.org/a/EfjBddltbaYnakDUuoEHvYzqt)

### Игра: «Простое ли число?»

Пользователю показывается случайное число. Нужно ответить `yes`, если число простое, или `no` — если
нет.

Запуск игры:

```
$ make brain-prime
```
[![asciicast](https://asciinema.org/a/ufo2ChnGf3saxwyPnBkhu2hlU.svg)](https://asciinema.org/a/ufo2ChnGf3saxwyPnBkhu2hlU)
