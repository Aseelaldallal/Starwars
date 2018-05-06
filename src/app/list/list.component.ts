import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../services/Starwars.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters = [];
  swService: StarWarsService;
  activatedRoute: ActivatedRoute;
  subscription: Subscription;
  side = 'all';

  constructor(swService: StarWarsService, activatedRoute: ActivatedRoute) {
    this.swService = swService;
    this.activatedRoute = activatedRoute;
   }

  ngOnInit() {
    console.log(this.swService.fetchCharacters());
    this.activatedRoute.params.subscribe( params => {
      this.characters = this.swService.getCharacters(params.side);
      this.side = params.side;
    });
    this.subscription = this.swService.charactersChanged.subscribe( () => {
      this.characters = this.swService.getCharacters(this.side);
    }); // what to do when characters changed?
  }

  onDestroy() {
    this.subscription.unsubscribe();
  }

}
