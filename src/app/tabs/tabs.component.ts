import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../services/Starwars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements OnInit {

  chosenSide = 'all';
  swService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  getCharacters() {
    return this.swService.getCharacters(this.chosenSide);
  }

  chooseSide(side) {
    this.chosenSide = side;
  }

}
