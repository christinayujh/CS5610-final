import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {QuillEditorModule} from 'ngx-quill-editor';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './views/user/login/login.component';
import {RegisterComponent} from './views/user/register/register.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {UserService} from './services/user.service.client';
import {SharedService} from './services/shared.service';
import {FlickrService} from './services/flickr.service';
import {SortableDirective} from '../../assignment/directives/sortable.directive';
import {AuthGuard} from './services/auth-guard.service';
import {HousesEditComponent} from './views/houses/houses-edit/houses-edit.component';
import {HousesListComponent} from './views/houses/houses-list/houses-list.component';
import {HousesNewComponent} from './views/houses/houses-new/houses-new.component';
import {CommentsListComponent} from './views/comments/comments-list/comments-list.component';
import {CommentsEditComponent} from './views/comments/comments-edit/comments-edit.component';
import {CommentsNewComponent} from './views/comments/comments-new/comments-new.component';
import {HouseService} from './services/house.service.client';
import {CommentService} from './services/comment.service.client';
import { HousesDetailComponent } from './views/houses/houses-detail/houses-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SortableDirective,
    HousesEditComponent,
    HousesListComponent,
    HousesNewComponent,
    CommentsListComponent,
    CommentsEditComponent,
    CommentsNewComponent,
    HousesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    QuillEditorModule
  ],
  providers: [UserService, HouseService, CommentService, SharedService, FlickrService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
