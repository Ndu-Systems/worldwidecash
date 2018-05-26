import { RegisterService } from "./user-registration/Register.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HashLocationStrategy,LocationStrategy } from "@angular/common";
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
import { BankingDetailsComponent } from './user-registration/banking-details/banking-details.component';
import { PersonalInformationComponent } from './user-registration/personal-information/personal-information.component';
 
import { MyBonusesComponent } from './my-bonuses/my-bonuses.component';
import { BonusService } from "./my-bonuses/bonus.service";
import { MyWithdrawsComponent } from './my-withdraws/my-withdraws.component';
import { SideMenuService } from "./user-dashboard/side-menu/side-menu.service";
import { LogoutComponent } from './logout/logout.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { VerifyEmailService } from "./verify-email/verify-email.service";
import { AutomateComponent } from './automate/automate.component';
import { AutomateService } from "./automate/automate.service";
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfileService } from "./my-profile/profile.service";
import { CashOutDreamComponent } from './cash-out-dream/cash-out-dream.component';
import { UserLockedComponent } from './user-locked/user-locked.component';

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
  { path: "cash-out-dream/:id", component: CashOutDreamComponent },
  { path: "proof-of-payment", component: ProofOfPaymentComponent},
  { path: "personal-information", component: PersonalInformationComponent},
  { path: "banking-details", component:BankingDetailsComponent},
  { path: "my-bonuses", component: MyBonusesComponent},
  { path: "my-withdraws", component: MyWithdrawsComponent},
  { path: "logout", component: LogoutComponent},
  { path: "verify-email", component: VerifyEmailComponent},
  { path: "unauthorized", component: UnauthorizedComponent},
  { path: "my-profile", component: MyProfileComponent},
  { path: "user-locked", component: UserLockedComponent},
  { path: "**", component: HomePageComponent}

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
,
    LogoutComponent,
    LogoutComponent
,
    UnauthorizedComponent
,
    VerifyEmailComponent
,
    AutomateComponent
,
    MyProfileComponent
,
    CashOutDreamComponent
,
    UserLockedComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{useHash:true}) 
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
    SideMenuService,
    VerifyEmailService,
    AutomateService,
    ProfileService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
