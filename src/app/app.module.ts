import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemContainerComponent } from './components/dashboard/dashboard-container/my-feed/item-container/item-container.component';
import { ItemComponent } from './components/dashboard/dashboard-container/my-feed/item-container/item/item.component';
import { ItemSearchComponent } from './components/dashboard/dashboard-container/my-search/item-search/item-search.component';
import { ViewProfilComponent } from './components/dashboard/dashboard-container/my-search/view-profil/view-profil.component';
import { OtherProfilComponent } from './components/dashboard/dashboard-container/my-search/view-profil/other-profil/other-profil.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { ForgotPasswordComponent } from './components/authentication-container/form-login/forgot-password/forgot-password.component';
import { TimeDirective } from './time.directive';

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
    ItemSearchComponent,
    ViewProfilComponent,
    OtherProfilComponent,
    SafeHtmlPipe,
    ForgotPasswordComponent,
    TimeDirective,
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
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
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
  entryComponents: [ForgotPasswordComponent]
})
export class AppModule {}
