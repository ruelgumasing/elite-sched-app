import { Component } from '@angular/core';
import { myTeamsPage } from '../my-teams/my-teams.page';
import { TeamsPage } from '../teams/teams';
import { Nav, LoadingController } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';

@Component({
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
  tournaments: any;
  constructor(private nav: Nav, 
              private eliteApi: EliteApi,
              private loadingController: LoadingController) { }

  itemTapped($event, tourney){
    this.nav.push(TeamsPage, tourney);
  }

  ionViewLoaded(){
    let loader = this.loadingController.create({
      content: 'Getting Tournaments...'
      spinner: 'line' //dots
    });

    loader.present().then(()=>{
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      
      });
    });
    
  }


}
