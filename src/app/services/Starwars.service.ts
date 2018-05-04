import { LogService } from './log.service';

export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: 'Light' },
    { name: 'Darth Vader', side: 'Dark' }
  ];

  logService: LogService;

  constructor(logS: LogService) {
    this.logService = logS;
  }

  assignSide(charInfo) {
    const pos = this.characters.findIndex(char => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
  }

  getCharacters(chosenSide) {
    if (chosenSide === 'all') {
      return this.characters;
    }
    return this.characters.filter(char => {
      return char.side === chosenSide;
    });
  }
}
