import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { myTeamsPage } from '../pages/my-teams/my-teams.page';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { GamePage } from '../pages/game/game';
import { TeamsPage } from '../pages/teams/teams';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = myTeamsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'myTeams', component: myTeamsPage },
      { title: 'Tournaments', component: TournamentsPage },
      { title: 'TeamDetail', component: TeamDetailPage },
      { title: 'Game', component: GamePage },
      { title: 'Teams', component: TeamsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goHome() {
    this.nav.push(myTeamsPage);
  }

  goToTournaments() {
    this.nav.push(TournamentsPage);
  }
  
}
