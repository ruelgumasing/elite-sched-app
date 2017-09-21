import { Component } from '@angular/core';
import { myTeamsPage } from '../my-teams/my-teams.page';
import { TeamsPage } from '../teams/teams';
import { Nav } from 'ionic-angular';

@Component({
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  constructor(private nav: Nav) {
  }

  itemTapped(){
    this.nav.push(TeamsPage);
  }
}
