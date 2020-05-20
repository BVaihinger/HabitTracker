import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ViewDailyComponent } from './components/view-daily/view-daily.component';
import { ViewWeeklyComponent } from './components/view-weekly/view-weekly.component';
import { ViewMonthlyComponent } from './components/view-monthly/view-monthly.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HabitListComponent } from './components/habit-list/habit-list.component';
import { HabitDetailsComponent } from './components/habit-details/habit-details.component';
import { HabitCreateComponent } from './components/habit-create/habit-create.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegisterComponent,
    ViewDailyComponent,
    ViewWeeklyComponent,
    ViewMonthlyComponent,
    UserDetailsComponent,
    HabitListComponent,
    HabitDetailsComponent,
    HabitCreateComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
