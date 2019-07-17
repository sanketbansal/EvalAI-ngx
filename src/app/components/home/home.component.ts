import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {EndpointsService} from '../../services/endpoints.service';
import {AuthService} from '../../services/auth.service';
import {GlobalService} from '../../services/global.service';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

/**
 * Component Class
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public user = {};
  public challengeList = [];
  authServiceSubscription: any;
  constructor(private apiService: ApiService, private endpointService: EndpointsService, private authService: AuthService,
              private globalService: GlobalService, private router: Router) { }

  ngOnInit() {
    this.init();
    this.getChallenge();
  }

  init() {
    const logInStatus = this.authService.isLoggedIn();
    this.authServiceSubscription = this.authService.change.subscribe((authState) => {
      if (authState.isLoggedIn) {
        this.user = authState;
      }
    });
  }

  getChallenge() {
    this.apiService.getUrl(this.endpointService.featuredChallengesURL()).subscribe(
      response => {
        this.challengeList = response.results;
      },
      err => { this.globalService.handleApiError(err); },
      () => {}
    );

  }

  hostChallenge() {
    if (this.authService.isAuth) {
      this.router.navigate(['/challenge-create']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  ngOnDestroy(): void {
    if (this.authServiceSubscription) {
      this.authServiceSubscription.unsubscribe();
    }
  }
}
