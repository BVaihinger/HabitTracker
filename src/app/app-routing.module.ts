import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDailyComponent } from './components/view-daily/view-daily.component';
import { ViewWeeklyComponent } from './components/view-weekly/view-weekly.component';
import { ViewMonthlyComponent } from './components/view-monthly/view-monthly.component';
import { HabitListComponent } from './components/habit-list/habit-list.component';
import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const routes: Routes = [
  {path: "daily", component: ViewDailyComponent},
  {path: "weekly", component: ViewWeeklyComponent},
  {path: "monthly", component: ViewMonthlyComponent},
  {path: "habits-list", component: HabitListComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: UserRegisterComponent},
  {path: "user-settings", component: UserDetailsComponent},
  {path: "dash", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
