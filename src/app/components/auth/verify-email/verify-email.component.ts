import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ApiService } from '../../../services/api.service';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  token = '';
  isVerified = false;

  /**
   * Constructor.
   * @param document  Router Injection.
   * @param authService  AuthService Injection.
   * @param globalService  GlobalService Injection.
   * @param apiService  Router Injection.
   * @param route  ActivatedRoute Injection.
   * @param router  GlobalService Injection.
   */
  constructor(private router: Router, private route: ActivatedRoute,
              private apiService: ApiService, private globalService: GlobalService,
              private authService: AuthService) { }

  /**
   * Component on initialized.
   */
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['token']) {
        this.token = params['token'];
        this.authService.verifyEmail(this.token, () => {
          this.isVerified = true;
        });
      }
    });
  }
}
