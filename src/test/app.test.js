import Bowman from '../js/Bowman.js';
import Swordsman from '../js/Swordsman.js';
import Magician from '../js/Magician.js';
import Undead from '../js/Undead.js';
import Zombie from '../js/Zombie.js';
import Deamon from '../js/Daemon.js';

test('Проверка формирования Bowman', () => {
  const received = new Bowman('Лучник', 'Bowman');
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Проверка формирования Swordsman', () => {
  const received = new Swordsman('Лучник', 'Swordsman');
  const expected = {
    name: 'Лучник',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test('Проверка формирования Magician', () => {
  const received = new Magician('Лучник', 'Magician');
  const expected = {
    name: 'Лучник',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});

test('Проверка формирования Undead', () => {
  const received = new Undead('Лучник', 'Undead');
  const expected = {
    name: 'Лучник',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Проверка формирования Zombie', () => {
  const received = new Zombie('Лучник', 'Zombie');
  const expected = {
    name: 'Лучник',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test('Проверка формирования Deamon', () => {
  const received = new Deamon('Лучник', 'Deamon');
  const expected = {
    name: 'Лучник',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});
