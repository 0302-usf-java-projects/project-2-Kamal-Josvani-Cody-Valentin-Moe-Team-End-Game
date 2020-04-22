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
import { QuillModule } from 'ngx-quill';

import { FormRegisterComponent } from './components/authentication-container/form-register/form-register.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardContainerComponent } from './components/dashboard/dashboard-container/dashboard-container.component';
import { DashboardProfilComponent } from './components/dashboard/dashboard-profil/dashboard-profil.component';
import { MyFeedComponent } from './components/dashboard/dashboard-container/my-feed/my-feed.component';
import { MyProfilComponent } from './components/dashboard/dashboard-container/my-profil/my-profil.component';
import { MySearchComponent } from './components/dashboard/dashboard-container/my-search/my-search.component';
import { PostComponent } from './components/dashboard/dashboard-container/my-feed/post/post.component';
import { FormsModule } from '@angular/forms';
import { ItemContainerComponent } from './components/dashboard/dashboard-container/my-feed/item-container/item-container.component';
import { ItemComponent } from './components/dashboard/dashboard-container/my-feed/item-container/item/item.component';

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
    MyFeedComponent,
    MyProfilComponent,
    MySearchComponent,
    PostComponent,
    ItemComponent,
    ItemContainerComponent,
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
    FormsModule,
    QuillModule.forRoot({
      modules: {
        syntax: true,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          [{ list: 'ordered' }, { list: 'bullet' }],

          [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          ['clean'], // remove formatting button

          ['link'], // link and image, video
        ],
      },
    }),
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
