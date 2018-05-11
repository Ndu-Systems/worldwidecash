import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from './user-login/login-service.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {RouterModule,Routes} from '@angular/router'
import { UserDataService } from './shared/services/user-data.service';
import { DreamsComponent } from './user-dashboard/dreams/dreams.component';
import { SideMenuComponent } from './user-dashboard/side-menu/side-menu.component';
import { CreateDreamComponent } from './create-dream/create-dream.component';
import { MyReferralsComponent } from './my-referrals/my-referrals.component';
const appRoutes = [
  {path:'', component:UserLoginComponent},
  {path: 'user-dashboard', component:UserDashboardComponent},
  {path: 'create-dream', component:CreateDreamComponent},
  {path: 'my-referrals', component:MyReferralsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    UserDashboardComponent,
    DreamsComponent,
    SideMenuComponent
,
    CreateDreamComponent
,
    MyReferralsComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginServiceService,UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
