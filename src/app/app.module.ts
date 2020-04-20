import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationContainerComponent } from './components/authentication-container/authentication-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { AnimeSideComponent } from './components/authentication-container/anime-side/anime-side.component';
import { FormLoginComponent } from './components/authentication-container/form-login/form-login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FormRegisterComponent } from './components/authentication-container/form-register/form-register.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardContainerComponent } from './components/dashboard/dashboard-container/dashboard-container.component';
import { DashboardProfilComponent } from './components/dashboard/dashboard-profil/dashboard-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationContainerComponent,
    AnimeSideComponent,
    FormLoginComponent,
    FormRegisterComponent,
    DashboardComponent,
    DashboardContainerComponent,
    DashboardProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
