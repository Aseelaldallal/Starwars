


export class StarWarsService {

  private characters;


  onSideAssigned(charInfo) {
    const pos = this.characters.findIndex( (char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
  }

  getCharacters(charInfo, chosenSide) {
    if (chosenSide === 'all') {
      return this.characters;
    }
    return this.characters.filter( (char) => {
      return char.side === chosenSide;
    });
  }


}
