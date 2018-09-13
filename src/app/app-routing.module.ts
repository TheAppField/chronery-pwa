import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Utils } from './utils/utils';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule'
  },
  {
    path: 'working-hours',
    loadChildren: './pages/working-hours/working-hours.module#WorkingHoursPageModule'
  },
  {
    path: 'report',
    loadChildren: './pages/report/report.module#ReportPageModule'
  },
  {
    path: 'projects',
    loadChildren: './pages/projects/projects.module#ProjectsPageModule'
  },
  {
    path: 'settings',
    loadChildren: './pages/settings/settings.module#SettingsPageModule'
  },
  {
    path: 'imprint',
    loadChildren: './pages/imprint/imprint.module#ImprintPageModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
