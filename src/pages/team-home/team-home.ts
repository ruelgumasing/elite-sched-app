import { Component } from '@angular/core';
import { Nav, NavParams } from 'ionic-angular';
import { StandingsPage } from '../standings/standings';
import { TeamDetailPage } from '../team-detail/team-detail';

@Component({
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  team: any;
  teamDetailTab = TeamDetailPage;
  teamStandingTab = StandingsPage;
  constructor(private nav: Nav, private navParams: NavParams) {
    this.team = this.navParams.data;
    // console.log('**nav params: ', this.navParams);
  }
  goHome(){
    this.nav.popToRoot();
  }
}
