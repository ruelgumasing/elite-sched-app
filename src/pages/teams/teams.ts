import { Component } from '@angular/core';
import { Nav, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';
import { EliteApi } from '../../shared/shared';

@Component({
  templateUrl: 'teams.html'
})
export class TeamsPage {
   teams = [];
    // teams = [
    //   { id: 1, name: 'HC Elite'},
    //   { id: 2, name: 'Team Takeover'},
    //   { id: 3, name: 'DC Thunder'}
    // ];

    constructor(private nav: Nav, 
                private navParams: NavParams,
                private eliteApi: EliteApi) {
  }
  ionViewLoaded(){
    let selectedTourney = this.navParams.data;
    this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
      this.teams = data.teams;
    }); 
  }


  itemTapped($event, team){
    this.nav.push(TeamHomePage, team);
  }
}
