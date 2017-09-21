import { Component } from '@angular/core';
import { Nav, NavParams } from 'ionic-angular';
// import { myTeamsPage } from '../my-teams/my-teams.page'; // other way home

@Component({
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {
  team: any;
  constructor(private nav: Nav, private navParams: NavParams) {
    this.team = this.navParams.data;
    console.log('**nav params: ', this.navParams);
  }

  // goHome(){
  //   this.nav.setRoot(myTeamsPage); //other way home
  //   this.nav.popToRoot(); //other way home
  //   // this.nav.parent.parent.popToRoot(); // not working
  // };

}
