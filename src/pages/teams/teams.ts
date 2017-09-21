import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';


@Component({
  templateUrl: 'teams.html'
})
export class TeamsPage {
   
    teams = [
      { id: 1, name: 'HC Elite'},
      { id: 2, name: 'Team Takeover'},
      { id: 3, name: 'DC Thunder'}
    ];

    constructor(private nav: Nav) {
  }

  itemTapped($event, team){
    this.nav.push(TeamHomePage, team);
  }
}
