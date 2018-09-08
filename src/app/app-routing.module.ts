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
    redirectTo: `working-hours/${Utils.encodeDate(new Date())}`
    // loadChildren: './pages/working-hours/working-hours.module#WorkingHoursPageModule'
  },
  {
    path: 'working-hours/:date',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
