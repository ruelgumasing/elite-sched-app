import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';


@Component({
  templateUrl: 'my-teams.page.html'
})
export class myTeamsPage {
  constructor(private nav: Nav) { 
    
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }
}
