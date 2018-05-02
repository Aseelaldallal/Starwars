import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [
    {name: 'Luke Skywalker', side: 'Light'},
    {name: 'Darth Vader', side: 'Dark'}
  ];

  chosenSide = 'all';

  constructor() { }

  ngOnInit() {
  }

  chooseSide(side) {
    this.chosenSide = side;
  }

  getCharacters(charInfo) {
    if (this.chosenSide === 'all') {
      return this.characters;
    }
    return this.characters.filter( (char) => {
      return char.side === this.chosenSide;
    });
  }

  onSideAssigned(charInfo) {
    const pos = this.characters.findIndex( (char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
  }

}
