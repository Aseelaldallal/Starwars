import { LogService } from './log.service';

import { Injectable } from '@angular/core';

@Injectable()

export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: 'Light' },
    { name: 'Darth Vader', side: 'Dark' }
  ];

  logService: LogService;

  constructor(lgServ: LogService) {
    this.logService = lgServ;
  }

  assignSide(charInfo) {
    const pos = this.characters.findIndex(char => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.logService.log('Assigned ' + this.characters[pos].name + ' to side ' + charInfo.side);
  }

  getCharacters(chosenSide) {
    if (chosenSide === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter(char => {
      return char.side === chosenSide;
    });
  }

  createCharacter(name, side) {
    const pos = this.characters.findIndex(char => {
      return char.name === name;
    });
    if(pos !== -1) {
      return;
    }
    this.characters.push({name: name, side: side});
    this.logService.log('Created character: ' + name);
  }
}
