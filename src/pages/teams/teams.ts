import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';


@Component({
  templateUrl: 'teams.html'
})
export class TeamsPage {
  constructor(private nav: Nav) { 
    
  }

  itemTapped(){
    this.nav.push(TeamDetailPage);
  }
}
