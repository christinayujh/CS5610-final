import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service.client';
import {SharedService} from './shared.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {
  }

  async f() {
    return await this.userService.loggedIn().toPromise();
  }

  // @ts-ignore
  async canActivate() {
    let auth = false;
    await this.f().then((data: any) => {
      const user = data;
      if (user !== '0') {
        this.sharedService.user = user.username;
        this.sharedService.role = user.role;
        auth = true;
      } else {
          this.router.navigate(['/login']);
      }
    });
    return auth;
  }

}
