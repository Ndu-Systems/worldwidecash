import { RegisterService } from "./user-registration/Register.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { FormsModule } from "@angular/forms";
import { LoginServiceService } from "./user-login/login-service.service";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { UserDataService } from "./shared/services/user-data.service";
import { DreamsComponent } from "./user-dashboard/dreams/dreams.component";
import { SideMenuComponent } from "./user-dashboard/side-menu/side-menu.component";
import { CreateDreamComponent } from "./create-dream/create-dream.component";
import { MyReferralsComponent } from "./my-referrals/my-referrals.component";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { NavHomeComponent } from "./nav-home/nav-home.component";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { DreamService } from "./create-dream/Dream.service";
import { ClientNavComponent } from "./client-nav/client-nav.component";
import { ResetUserService } from "./shared/reset-user.service";
import { DreamDetailComponent } from "./dream-detail/dream-detail.component";
import { DreamDetailsService } from "./dream-detail/dream-details.service";
import { ProofOfPaymentComponent } from './proof-of-payment/proof-of-payment.component';
import { UploadService } from "./proof-of-payment/upload.service";
import { EmailService } from "./shared/services/email.service";
<<<<<<< HEAD
import { BankingDetailsComponent } from './user-registration/banking-details/banking-details.component';
import { PersonalInformationComponent } from './user-registration/personal-information/personal-information.component';
 
=======
import { MyBonusesComponent } from './my-bonuses/my-bonuses.component';
import { BonusService } from "./my-bonuses/bonus.service";
import { MyWithdrawsComponent } from './my-withdraws/my-withdraws.component';
import { SideMenuService } from "./user-dashboard/side-menu/side-menu.service";
>>>>>>> b751673a88f41b3366b10e5701011c821873f81d
const appRoutes = [
  { path: "", component: HomePageComponent },
  { path: "home", component: HomePageComponent },
  { path: "user-login", component: UserLoginComponent },
  { path: "user-dashboard", component: UserDashboardComponent },
  { path: "create-dream", component: CreateDreamComponent },
  { path: "my-referrals", component: MyReferralsComponent },
  { path: "how-it-works", component: HowItWorksComponent },
  { path: "get-started", component: UserRegistrationComponent },
  { path: "dream/:id", component: DreamDetailComponent },
  { path: "proof-of-payment", component: ProofOfPaymentComponent},
<<<<<<< HEAD
  { path: "personal-information", component: PersonalInformationComponent},
  { path: "banking-details", component:BankingDetailsComponent}
=======
  { path: "my-bonuses", component: MyBonusesComponent},
  { path: "my-withdraws", component: MyWithdrawsComponent}
>>>>>>> b751673a88f41b3366b10e5701011c821873f81d
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    UserDashboardComponent,
    DreamsComponent,
    SideMenuComponent,
    CreateDreamComponent,
    MyReferralsComponent,
    SideMenuComponent,
    CreateDreamComponent,
    UserRegistrationComponent,
    HomePageComponent,
    NavHomeComponent,
    HowItWorksComponent,
    ClientNavComponent,
    DreamDetailComponent,
    PersonalInformationComponent,
    BankingDetailsComponent
,
    ProofOfPaymentComponent
,
    MyBonusesComponent
,
    MyWithdrawsComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoginServiceService,
    UserDataService,
    RegisterService,
    DreamService,
    ResetUserService,
    DreamDetailsService,
    UploadService,
    EmailService,
    BonusService,
    SideMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
