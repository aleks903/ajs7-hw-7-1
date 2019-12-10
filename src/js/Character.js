/**
 * Функция создания персонажей, принимает на вход имя и тип персонажа
 * @constructor Character
 * @param name имя персонажа
 * @param type тип персонажа
 */
export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
