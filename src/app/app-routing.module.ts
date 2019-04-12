import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './views/user/login/login.component';
import {RegisterComponent} from './views/user/register/register.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {HousesListComponent} from './views/houses/houses-list/houses-list.component';
import {AuthGuard} from './services/auth-guard.service';
import {HousesNewComponent} from './views/houses/houses-new/houses-new.component';
import {HousesEditComponent} from './views/houses/houses-edit/houses-edit.component';
import {CommentsListComponent} from './views/comments/comments-list/comments-list.component';
import {CommentsNewComponent} from './views/comments/comments-new/comments-new.component';
import {CommentsEditComponent} from './views/comments/comments-edit/comments-edit.component';
import {HousesDetailComponent} from './views/houses/houses-detail/houses-detail.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:uid', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/house', component: HousesListComponent},
  {path: 'user/:uid/house/new', component: HousesNewComponent},
  {path: 'user/:uid/house/:hid', component: HousesEditComponent},
  {path: 'user/:uid/house/:hid/detail', component: HousesDetailComponent},
  {path: 'user/:uid/house/:hid/comment', component: CommentsListComponent},
  {path: 'user/:uid/house/:hid/comment/new', component: CommentsNewComponent},
  {path: 'user/:uid/house/:hid/comment/:cid', component: CommentsEditComponent},

];

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })
//
// export class AppRoutingModule { }
export const AppRoutingModule = RouterModule.forRoot(appRoutes, {useHash: true});

