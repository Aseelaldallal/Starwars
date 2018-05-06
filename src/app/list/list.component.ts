import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../services/Starwars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters = [];
  swService: StarWarsService;
  activatedRoute: ActivatedRoute;

  constructor(swService: StarWarsService, activatedRoute: ActivatedRoute) {
    this.swService = swService;
    this.activatedRoute = activatedRoute;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.characters = this.swService.getCharacters(params.side);
    });
  }

}
