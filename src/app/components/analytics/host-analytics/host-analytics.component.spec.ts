import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostAnalyticsComponent } from './host-analytics.component';
import {ApiService} from '../../../services/api.service';
import {AuthService} from '../../../services/auth.service';
import {EndpointsService} from '../../../services/endpoints.service';
import {GlobalService} from '../../../services/global.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {Routes} from '@angular/router';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {LoginComponent} from '../../auth/login/login.component';
import {NotFoundComponent} from '../../not-found/not-found.component';
import {WindowService} from '../../../services/window.service';


const routes: Routes = [
  {
    path: '',
    component: HostAnalyticsComponent,
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }
];



describe('HostAnalyticsComponent', () => {
  let component: HostAnalyticsComponent;
  let fixture: ComponentFixture<HostAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostAnalyticsComponent, NotFoundComponent ],
      providers: [ApiService, AuthService, EndpointsService, GlobalService, WindowService],
      imports: [RouterTestingModule.withRoutes(routes), HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});