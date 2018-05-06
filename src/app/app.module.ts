import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';
import { StarWarsService } from './services/Starwars.service';
import { LogService } from './services/log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';


const routes = [
  {path: 'character', component: TabsComponent},
  {path: 'new', component: CreateCharacterComponent},
  {path: '**', redirectTo: '/character'}
];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    TabsComponent,
    CreateCharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
