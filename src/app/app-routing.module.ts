import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationContainerComponent } from './components/authentication-container/authentication-container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardServiceService } from './services/auth-guard-service.service';
import { MyFeedComponent } from './components/dashboard/dashboard-container/my-feed/my-feed.component';
import { MyProfilComponent } from './components/dashboard/dashboard-container/my-profil/my-profil.component';
import { MySearchComponent } from './components/dashboard/dashboard-container/my-search/my-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthenticationContainerComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardServiceService],
    children: [
      {
        path: 'feed',
        component: MyFeedComponent,
        outlet: 'my',
      },
      {
        path: 'profil',
        component: MyProfilComponent,
        outlet: 'my',
      },
      {
        path: 'search',
        component: MySearchComponent,
        outlet: 'my',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
